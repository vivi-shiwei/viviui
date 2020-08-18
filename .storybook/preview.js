import React from 'react';
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { RouterContext } from 'next/dist/next-server/lib/router-context'

import App from '../App'


addDecorator(storyFn => (
  <App>
    <RouterContext.Provider
      value={{
        pathname: '/',
        basePath: '',
        push: (url, as) => {
          action('push')()
          return Promise.resolve(true)
        },
        replace: (url, as) => {
          action('replace')()
          return Promise.resolve(true)
        },
        reload: () => {
          return Promise.resolve(true)
        },
        prefetch: () => {
          return Promise.resolve(true)
        }
      }}
    >
      {storyFn()}
    </RouterContext.Provider>
  </App>
))


addDecorator(withKnobs)
