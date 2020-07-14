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
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { CenterButton, HeaderButtonOne } from '../src/components/selectSearch/button'

export default {
  title: 'Button'
}

export const CenterButtonOne = () => {
  return (
    <>
      <CenterButton title='Submit' />
    </>

  )
}
