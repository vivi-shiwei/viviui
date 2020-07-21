import React from 'react'
import {
  Button
} from '@chakra-ui/core'

const cancelButton = ({ ...props }) => {
  return (
    <Button
      bg='#00B2EE' color='white' _hover='color:black' fontSize={{ base: '12px', sm: '12px', md: '16px' }}
      {...props}
    >還原
    </Button>
  )
}
export default cancelButton
