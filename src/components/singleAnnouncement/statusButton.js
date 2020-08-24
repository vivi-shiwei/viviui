import React from 'react'
import {
  Button
} from '@chakra-ui/core'

const SingleAnnouncement = ({ children, ...props }) => {
  return (
    <Button rounded='999px' fontSize='14px' background='red' my='auto' size='xs' color='white' {...props}>
      {children}
    </Button>
  )
}
export default SingleAnnouncement
