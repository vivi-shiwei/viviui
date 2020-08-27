import React, { Children } from 'react'
import {
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  Box
} from '@chakra-ui/core'

const Crumb = ({ children, crumbProps, ...props }) => (
  <Box
    mx='auto'
    h='45px'
    w='100%'
    d='flex'
    alignItems='center'
    justifyContent='center'
    roundedTopLeft='4px'
    roundedTopRight='4px'
    {...props}
  >
    <Breadcrumb
      spacing='8px'
      separator={<Icon name='chevron-right' />}
      {...crumbProps}
    >
      {
        Children.map(children, (breadcrumd, index) => (
          <BreadcrumbItem key={index}>
            {breadcrumd}
          </BreadcrumbItem>
        ))
      }
    </Breadcrumb>
  </Box>
)

export default Crumb
