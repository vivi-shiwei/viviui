import React from 'react'
import {
  Box,
  Text,
  Heading,
  Flex
} from '@chakra-ui/core'

const SingleAnnouncement = ({ content, title, left, right, time, children, ...props }) => {
  return (
    <>
      <Box borderBottom='1px solid #4A5568'>
        <Heading as='h1' fontSize='26px' textAlign='center' fontWeight='bold'>{title}</Heading>
        <Flex justifyContent='space-between' mx='20px'>
          <Text fontSize='16px' color='#A0AEC0'>{left}</Text>
          <Text fontSize='16px' color='#A0AEC0'>{right}</Text>
        </Flex>
      </Box>
      <Box mx='20px'>
        {children}
      </Box>
    </>
  )
}
export default SingleAnnouncement
