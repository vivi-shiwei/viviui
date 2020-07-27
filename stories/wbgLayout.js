import React from 'react'
import {
  Box,
  Button,
  MenuButton,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  Text,
  Icon,
  Image,
  AspectRatioBox,
  Flex
} from '@chakra-ui/core'
import WhiteBoardPage from '../src/components/whiteboardPage'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

import MyImage from '../static/QQ20200518181405.jpg'
export default {
  title: 'wbgLayout'
}
export const noProfilePhoto = () => {
  return (
    <WhiteBoardPage title='聖若瑟教區中學第六校' background='blue' />
  )
}
