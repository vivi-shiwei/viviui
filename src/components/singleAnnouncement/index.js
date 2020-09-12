import React from 'react'
import {
  Box,
  Text,
  PseudoBox
} from '@chakra-ui/core'

const SingleAnnouncement = ({ content, title, time, children, ...props }) => {
  return (
    <PseudoBox
      d='flex'
      justifyContent='space-between'
      py={2}
      borderBottom='1px solid #A0AEC0'
      width='full'
      maxWidth='1280px'
      mx='auto'
      px={2}
      {...props}
    >
      <Box w='72%'>
        <Text fontSize='12px' color='#A0AEC0'>{time}</Text>
        <Text
          fontSize='22px'
          fontWeight='bold'
          overflow='hidden'
          // width='90%'
          textOverflow='ellipsis'
          whiteSpace='nowrap'
          wordBreak='break-word'
        >
          {title}
        </Text>
        <Text fontSize='14px' color='#718096'>{content}</Text>
      </Box>
      {children}
    </PseudoBox>
  )
}
export default SingleAnnouncement
