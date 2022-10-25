import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'

export function unocssPlugin() {
  return Unocss({
    presets: [
      presetAttributify({
        /* preset options */
      }),
      presetUno(),
      presetIcons()
      // ...custom presets
    ]
  })
}
