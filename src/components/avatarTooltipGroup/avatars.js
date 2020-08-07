import React, { useContext } from 'react'
import {
  Avatar
} from '@chakra-ui/core'

import { AvatarTooltipContext } from './avatarTooltipContext'

const Tooltips = ({ profilePhotoSrc, ...props }) => {
  const { name } = useContext(AvatarTooltipContext)
  console.log(name)
  return (
    <Avatar
      mr={1}
      w={{ base: '30px', md: '35px' }}
      h={{ base: '30px', md: '35px' }}
      name={name || ''}
      src={profilePhotoSrc}
      fontSize={{ base: '13px', md: '15px' }}
      color='black'
      {...props}
    />
  )
}

export default Tooltips
