import React, { memo, Children } from 'react'
import {
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  useColorMode
} from '@chakra-ui/core'
import { MdDehaze } from 'react-icons/md'

import HeaderContainer from '../container'

import HeaderLeft from './headerLeft'
import HeaderRight from './headerRight'
import HeaderLogo from './headerLogo'
import HeaderCenter from './headerCenter'
import HeaderWrapper from './headerWrapper'
import HeaderMobileNav from './headerMobileNav'

const Header = ({
  containerProps, // 傳入頭部的數據
  children,
  ...props // 除以上輸入值外都會解構到props裏，props裏可以是外邊框、内邊框、字體顔色、背景顔色、border，傳入chakra能接受的樣式到最外層的Box裏。
}) => {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bg = { light: 'white', dark: 'gray.800' }

  let logo = null
  let left = null
  let center = null
  let right = null
  let drawerItems = null

  Children.map(children, (c, i) => {
    switch (c.type) {
      case HeaderLogo:
        logo = c // 自定義logo
        break
      case HeaderLeft:
        left = c // Header左邊列表
        break
      case HeaderCenter:
        center = c // Header 中間列表
        break
      case HeaderRight:
        right = c // Header 右邊列表
        break
      case HeaderMobileNav:
        drawerItems = c.props.children// 選單數據
        break
    }
  })

  return (
    <HeaderWrapper bg={bg[colorMode]} {...props}>
      <HeaderContainer
        height='4rem'
        {...containerProps}
      >
        <Flex size='100%' px={{ base: 0, sm: 2, md: 4 }} align='center' w='full' justify='space-between'>
          {logo}
          {left}
          {center}
          {right}

          {!!drawerItems && (
            <Flex justify='flex-end'>
              <IconButton
                onClick={onOpen}
                display={{ sm: 'inline-flex', md: 'none' }}
                aria-label='Navigation Menu'
                fontSize='20px'
                variant='ghost'
                icon={MdDehaze}
                marginRight='-16px'
              />
              <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader borderBottomWidth='1px'>選項</DrawerHeader>
                  <DrawerBody fontSize={{ sm: 'xs', md: 'sm' }}>
                    {drawerItems}
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
          )}
        </Flex>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
export default memo(Header)
