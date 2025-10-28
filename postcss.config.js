export default {
  plugins: {
    /**
     * @see https://github.com/evrone/postcss-px-to-viewport/tree/9d6c5cee5eea367fb4c7cf0c3bb1117979b5fbf4
     */
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 1920,
      // propList: ['*'],
      // selectorBlackList: ['ant'],
      // exclude: /(theme)/,
      mediaQuery: false,
    },
  },
}
