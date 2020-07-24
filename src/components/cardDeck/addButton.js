import React from 'react'
import { Button } from '@chakra-ui/core'

const AddButton = ({ Children, ...props }) => {
  return (
    <>
      <Button rounded='999px' size='md' width={{ base: '80px', md: '100px' }} {...props}> 新增 </Button>
      {Children}
    </>

  )
}

export default AddButton
