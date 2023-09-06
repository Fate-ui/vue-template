import { ref } from 'vue'
/**
 * 用于替换原生setInterval
 * @param fn 函数
 * @param interval ms 执行间隔
 * @return 函数 取消定时器的函数
 * */
export function useInterval(fn: () => void, interval = 1000) {
  let nowTime = ref(performance.now())
  let preTime: number
  let timeDifferance = 0 //每次的时间偏差
  let timer: number
  function refresh() {
    preTime ??= performance.now()
    if (preTime) {
      nowTime.value = performance.now()
      const realInterval = interval - timeDifferance
      if (nowTime.value - preTime >= realInterval) {
        timeDifferance = (nowTime.value - preTime - realInterval) % realInterval
        preTime = performance.now()
        fn()
        console.log('时间误差：' + timeDifferance + 'ms')
      }
    }
    timer = requestAnimationFrame(refresh)
  }
  timer = requestAnimationFrame(refresh)
  // 立即执行
  fn()
  function cancelTimer() {
    cancelAnimationFrame(timer)
  }
  // 离开后销毁
  onUnmounted(() => {
    cancelAnimationFrame(timer)
  })
  
  return cancelTimer
}
