import React from 'react'
import {
  Icon
} from '@chakra-ui/core'

<<<<<<< HEAD

const DeleteButton = ({ ...props }) => {

=======
const DeleteButton = ({ ...props }) => {
>>>>>>> 0bfd86e08e423bc39474fd13dda2ffed06b822da
  return (
    <>
      <Icon name='delete' size={{ base: '18px', sm: '24px', md: '24px' }} color='#696969' cursor='pointer' {...props} />
    </>
  )
}

export default DeleteButton
