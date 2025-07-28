import type { AxiosResponse, InternalAxiosRequestConfig,AxiosRequestConfig  } from 'axios'
import axios from 'axios'

/**
 * 响应码枚举
 */
export enum ResultEnum {
  /**
   * 成功
   */
  SUCCESS = 200,

  /**
   * 令牌无效或过期
   */
  TOKEN_INVALID = 401,
}

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
})

// 保存所有的AbortController，用于取消请求
const abortControllerMap: Record<string, AbortController> = {}
// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    /** 默认接口带有去重功能，若不需要去重，将headers中noUnique属性值设为true即可 */
    if (!config.headers.noUnique) {
      // 取消重复请求
      const key = config.url
      if (abortControllerMap[key]) {
        abortControllerMap[key].abort()
        abortControllerMap[key] = undefined
      }

      const controller = new AbortController()
      abortControllerMap[key] = controller
      config.signal = controller.signal
    }

    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 检查配置的响应类型是否为二进制类型（'blob' 或 'arraybuffer'）, 如果是，直接返回响应对象
    if (response.config.responseType === 'blob' || response.config.responseType === 'arraybuffer') {
      return response
    }

    const { code, data, msg } = response.data
    if (code === ResultEnum.SUCCESS) {
      return data
    }

    // ElMessage.error(msg || '系统出错')
    return Promise.reject(new Error(msg || 'Error'))
  },
  (error: any) => {
    if (error.code === 'ERR_CANCELED')
      return
    // 异常处理
    if (error.response.data) {
      const { code, msg } = error.response.data
      if (code === ResultEnum.TOKEN_INVALID) {
        // todo: token过期的处理逻辑
      }
      else {
        // ElMessage.error(msg || '系统出错')
      }
    }

    return Promise.reject(error.message)
  },
)

const request = <ResponseType = unknown>(
  url: string,
  options?: AxiosRequestConfig<unknown>,
): Promise<ResponseType> => {
  return new Promise((resolve, reject) => {
    service({
      url,
      ...options,
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => reject(err))
  })
}
// 使用示例
// export async function getUserInfo(id: string) {
//   return request<NameType>('url', {
//     params: {
//       id,
//     },
//   })
// }

// 导出 axios 实例
export default {service,request}
