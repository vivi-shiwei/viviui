import React from 'react'
import {
  Box,
  Tooltip,
  Avatar
} from '@chakra-ui/core'

// 卡片組
const Avatars = ({ name, profilePhoto, tooltipProps, ...props }) => {
  return (
    <Tooltip hasArrow label={name} placement='auto-start'>
      <Avatar
        mr={1}
        w={{ base: '30px', md: '35px' }}
        h={{ base: '30px', md: '35px' }}
        name={name}
        src={profilePhoto}
        fontSize={{ base: '13px', md: '15px' }}
        color='black'
        {...props}
      />
    </Tooltip>
  )
}

export default Avatars
