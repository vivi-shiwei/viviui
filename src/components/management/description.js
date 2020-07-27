import React from 'react'
import { Heading } from '@chakra-ui/core'
const Description = (props) => {
  return (
    <Heading as='h3' fontSize={{ base: '15px', sm: '1rem' }} mt={10} mb={4} {...props} />
  )
}

export default Description
