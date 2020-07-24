
import React from 'react'
import {
  Button
} from '@chakra-ui/core'

const ConfirmButton = ({ ...props }) => {
  return (
    <Button
      bg='#9370DB' color='white' _hover='color:black' fontSize={{ base: '12px', sm: '12px', md: '16px' }} m={{ base: '5px', sm: '5px' }}
      {...props}
    >確認
    </Button>
  )
}
export default ConfirmButton
