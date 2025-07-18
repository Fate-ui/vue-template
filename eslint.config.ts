import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['node_modules', '**/node_modules/**', 'dist', '**/dist/**', 'components.d.ts', '**/components.d.ts/**', '!.*', '!**/.*/**', '.idea', '.vscode'],
    rules: {
      // 对象属性后添加逗号
      'style/comma-dangle': ['error', 'always-multiline'],
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-empty-file': 'off',
    },
    formatters: { css: true, html: true, markdown: true },
    unicorn: { allRecommended: true },
  },
  {
    files: ['**/*.vue', '**/*.ts', '**/*.js', '**/*.tsx', '**/*.jsx'],
    rules: {
      // 允许有声明但未使用的变量
      'unused-imports/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'off',
      'node/prefer-global/process': 'off',
      // 在块级语句（函数、{ }, if (a) { }, and while (a) { }）后添加空行
      'style/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'block-like', next: '*' },
      ],

      'regexp/no-unused-capturing-group': 'off',
      'unicorn/prefer-set-has': 'off',
      'unicorn/no-array-reduce': 'off',

      // 允许使用 console
      'no-console': 'off',
      'unicorn/prefer-array-index-of': 'error',
      'ts/no-use-before-define': 'off',
      'no-empty': 'off',
      // 允许使用非全等
      'eqeqeq': 'off',
      'vue/eqeqeq': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      // unicorn
      'unicorn/no-null': 'off',
      'unicorn/switch-case-braces': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/prefer-number-properties': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/explicit-length-check': 'off',
      'unicorn/prefer-spread': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      // 允许事件名通过短横线连接
      'vue/v-on-event-hyphenation': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/no-use-v-if-with-v-for': 'off',
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always', // 对于空元素，如 <img>，始终使用自闭合形式 <img />
          component: 'always', // 对于 Vue 组件，始终使用自闭合形式
        },
      }],
      // 多行元素的内容之前和之后都需要换行符
      'vue/multiline-html-element-content-newline': ['error', { ignoreWhenEmpty: true, ignores: ['pre', 'textarea'], allowEmptyLines: false }],
    },
  },
)
