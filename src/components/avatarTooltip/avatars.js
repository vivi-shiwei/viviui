import React, { useContext } from 'react'
import {
  Avatar
} from '@chakra-ui/core'
import { TooltipContext } from './toolTipContext'
// 卡片組
const Avatars = ({ profilePhoto, tooltipProps, ...props }) => {
  const { name } = useContext(TooltipContext)
  return (
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
  )
}

export default Avatars
