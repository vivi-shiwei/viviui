import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const PageHeader = (props) => {
  return (
    <Box
      w='100%'
      borderBottomWidth='1px'
      {...props}
    />
  )
}

export default PageHeader
