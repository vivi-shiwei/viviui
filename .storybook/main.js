const path = require('path')

module.exports = {
  // stories: ['../stories/**/*.[tj]s'],
  stories: [
    '../stories/**/header.[tj]s',
    '../stories/**/hero.[tj]s',
    '../stories/**/footer.[tj]s',
    '../stories/**/school.[tj]s',
    '../stories/**/modalSelector.[tj]s',
    '../stories/**/search.[tj]s',
    '../stories/**/cardDeck.[tj]s',
    '../stories/**/management.[tj]s',
    '../stories/**/wbgLayout.[tj]s',
    '../stories/**/adminBatchAdd.[tj]s',
    '../stories/**/avatarTootip.[tj]s',
    '../stories/**/addIntelligence.[tj]s',
    '../stories/**/editintelligence.[tj]s',
    '../stories/**/post.[tj]s',
    '../stories/**/table.[tj]s',
    '../stories/**/fullScreenView.[tj]s',
    '../stories/**/fieldset.[tj]s',
    '../stories/**/breadcrumb.[tj]s',
    '../stories/**/picture.[tj]s',
    '../stories/**/oldPictureGroup.[tj]s',
    '../stories/**/postCardPicture.[tj]s'
  ],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
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
