import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core'

import Container from '../container'

const SingleAnnouncement = ({ content, title, time, children, ...props }) => {
  return (
    <Container d='flex' justifyContent='space-between' py={2} borderBottom='1px solid #A0AEC0' {...props}>
      <Box>
        <Text fontSize='12px' color='#A0AEC0'>{time}</Text>
        <Text fontSize='22px' fontWeight='bold'>{title}</Text>
        <Text fontSize='14px' color='#718096'>{content}</Text>
      </Box>
      {children}
    </Container>
  )
}
export default SingleAnnouncement
