import React from 'react'

import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'

import Crumb from '../src/components/crumb'
import CrumbLink from '../src/components/crumb/crumbLink'

export default { title: 'Crumb(vivi)' }

export const Crumbs = () => {
  return (
    <Crumb>
      <NextLink href='/test' passHref>
        <a onClick={action('button-click')}>
          <CrumbLink>vivi
          </CrumbLink>
        </a>
      </NextLink>
      <NextLink href='/test' passHref>
        <a onClick={action('button-click')}>
          <CrumbLink>vivi
          </CrumbLink>
        </a>
      </NextLink>
      <NextLink href='/test' passHref>
        <a onClick={action('button-click')}>
          <CrumbLink>vivi
          </CrumbLink>
        </a>
      </NextLink>
    </Crumb>
  )
}
