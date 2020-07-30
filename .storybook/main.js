const path = require('path')

module.exports = {
  // stories: ['../stories/**/*.[tj]s'],
  stories: [
    '../stories/**/footer.[tj]s',
    '../stories/**/hero.[tj]s',
    '../stories/**/header.[tj]s',
    '../stories/**/cardDeck.[tj]s',
    '../stories/**/management.[tj]s',
    '../stories/**/modalSelector.[tj]s',
    '../stories/**/wbgLayout.[tj]s',
    '../stories/**/school.[tj]s',
    '../stories/**/search.[tj]s'
  ],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.js$/],
          include: [path.resolve(__dirname, '../stories')] // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false }
        }
      }
    }
  ]
}
