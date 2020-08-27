import React from 'react'
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from '@chakra-ui/core'

import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'

import Crumb from '../src/components/crumb'
import CrumbLink from '../src/components/crumb/crumbLink'

export default { title: 'Crumb(vivi)' }

export const Crumbs = () => {
  return (
    <Crumb>
      <NextLink href='/test' passHref>
        <CrumbLink>
          <Button
            border='1px solid #A0AEC0'
            bg='white'
          >
            Button
          </Button>
        </CrumbLink>
      </NextLink>
    </Crumb>
  )
}

export const Test = () => {
  return (
    <>
      <Breadcrumb addSeparator={false}>
        <BreadcrumbItem>
          <NextLink href='/test' as='/'>
            <BreadcrumbLink>Breadcrumb 1</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>

        {/* <BreadcrumbItem>
          <BreadcrumbLink href='#'>Breadcrumb 2</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Breadcrumb 3</BreadcrumbLink>
        </BreadcrumbItem> */}
      </Breadcrumb>
    </>
  )
}
