import React from 'react'
import {
  Icon
} from '@chakra-ui/core'

const DeleteButton = ({ ...props }) => {
  return (
    <>
      <Icon name='delete' size={{ base: '18px', sm: '24px', md: '24px' }} color='#696969' cursor='pointer' {...props} />
    </>
  )
}

export default DeleteButton
