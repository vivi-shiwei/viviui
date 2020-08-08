import React from 'react'

import { Button } from '@chakra-ui/core'

const AddButton = (props) => {
  return (
    <Button
      variantColor='blue'
      minW={{ base: '100%', sm: '100%', md: '200px' }}
      mt={{ base: '10px', md: '0px' }}
      {...props}
    />
  )
}
export default AddButton
