import presetRemToPx from '@unocss/preset-rem-to-px'
import { presetAttributify, presetIcons, presetUno, transformerVariantGroup } from 'unocss'
import Unocss from 'unocss/vite'

export function unocssPlugin() {
  return Unocss({
    presets: [
      presetAttributify({
        /* preset options */
      }),
      presetUno(),
      presetIcons(),
      presetRemToPx({ baseFontSize: 4 }),
    ],
    transformers: [transformerVariantGroup()],
  })
}
