import React from 'react';

import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router';
// import { RouterContext } from 'next/dist/next-server/lib/router-context'

// import { withKnobs } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { withNextRouter } from 'storybook-addon-next-router';

import App from '../App'

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() { return Promise.resolve() }, // defaults to using addon actions integration, can override any method in the router,
    replace() { return Promise.resolve() }
  })
);

addDecorator(storyFn => (
  <App>
    {/* <RouterContext.Provider
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
    > */}
    {storyFn()}
    {/* </RouterContext.Provider> */}
  </App>
))


// addDecorator(withKnobs)
