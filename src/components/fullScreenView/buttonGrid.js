import React from 'react'
import {
  SimpleGrid
} from '@chakra-ui/core'

const ButtonGrid = (props) => {
  return (
    <SimpleGrid
      columns={1}
      spacing='16px'
      py='16px'
      w={{ base: '100%', sm: '340px' }}
      {...props}
    />
  )
}

export default ButtonGrid
