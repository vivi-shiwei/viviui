import React from 'react'
import {
  BreadcrumbLink
} from '@chakra-ui/core'

const CrumbLink = (props) => (
  <BreadcrumbLink
    color='#1b6ac9'
    fontWeight='bold'
    _hover={{ textDecoration: 'none' }}
    {...props}
  />
)

export default CrumbLink
