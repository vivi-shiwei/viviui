import React from 'react'
import {
  Icon
} from '@chakra-ui/core'

const deleteButton = ({ ...props }) => {
  return (
    <>
      <Icon name='delete' size='24px' color='#696969' cursor='pointer' {...props} />
    </>
  )
}

export default deleteButton
