import React from 'react'
import { Heading } from '@chakra-ui/core'

const LargeTitle = (props) => {
  return (
    <Heading
      as='h1'
      size='2xl'
      w='100%'
      mb='16px'
      textAlign='center'
      {...props}
    />
  )
}

export default LargeTitle
