import React from 'react'
import {
  Button
} from '@chakra-ui/core'

const HeaderPage = (props) => {
  return (
    <Button
      variantColor='blue'
      minW={{ base: '100%', sm: '100%', md: '200px' }}
      mr={3}
      mt={8}
      {...props}
    />
  )
}

export default HeaderPage
