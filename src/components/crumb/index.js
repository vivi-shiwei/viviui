import React from 'react'
import {
  Icon,
  Breadcrumb,
  BreadcrumbItem
} from '@chakra-ui/core'

const CrumbLink = ({ crumbItemProps, children, ...props }) => (
  <Breadcrumb
    spacing='8px'
    separator={<Icon name='chevron-right' />}
    {...props}
  >
    {
      children.map((breadcrumd, index) => (
        <BreadcrumbItem key={index} {...crumbItemProps}>
          {breadcrumd}
        </BreadcrumbItem>
      ))
    }
  </Breadcrumb>
)

export default CrumbLink
