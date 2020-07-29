import React, { memo } from 'react'
import {
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton
} from '@chakra-ui/core'
import { MdDehaze } from 'react-icons/md'

import HeaderContainer from '../container'

import HeaderLeft from './headerLeft'
import HeaderRight from './headerRight'
import HeaderLogo from './headerLogo'
import HeaderCenter from './headerCenter'
import HeaderWrapper from './headerWrapper'

const Header = ({
  left, // Header左邊列表
  center, // Header 中間列表
  right, // Header 右邊列表
  logo, // 自定義logo
  drawerItems, // 選單數據
  containerProps, // 傳入頭部的數據
  ...props // 除以上輸入值外都會解構到props裏，props裏可以是外邊框、内邊框、字體顔色、背景顔色、border，傳入chakra能接受的樣式到最外層的Box裏。
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HeaderWrapper {...props}>
      <HeaderContainer
        height='4rem'
        {...containerProps}
      >
        <Flex size='100%' px={{ base: 0, sm: 2, md: 4 }} align='center' w='full' justify='space-between'>

          <HeaderLogo>
            {logo}
          </HeaderLogo>

          <HeaderLeft>
            {left}
          </HeaderLeft>

          <HeaderCenter>
            {center}
          </HeaderCenter>

          <HeaderRight>
            {right}
          </HeaderRight>

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
