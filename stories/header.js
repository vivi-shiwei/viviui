import React from 'react'

import {
  ButtonGroup,
  Button,
  Stack,
  Menu,
  Avatar,
  MenuButton,
  MenuItem,
  Box,
  MenuList,
  Link,
  MenuDivider,
  Heading,
  Flex
} from '@chakra-ui/core'
import NextLink from 'next/link'
import Header from '../src/components/header'
import HeaderRight from '../src/components/header/headerRight'
import HeaderLeft from '../src/components/header/headerLeft'
import HeaderCenter from '../src/components/header/headerCenter'
import HeaderButton from '../src/components/header/headerButton'
import HeaderLogo from '../src/components/header/headerLogo'
import { MdAccessibility, MdPalette, MdSettings } from 'react-icons/md'
import { IoMdHome } from 'react-icons/io'
import { AiOutlineLogout } from 'react-icons/ai'

import MyImage from '../static/QQ20200518181405.jpg'

export default { title: 'Header' }

export const header = () => {
  return (
    <Header
      left={
        <>
          <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
          <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
        </>
      }
      logo={<HeaderLogo icon={<Box as={IoMdHome} size={6} />} />}
      right={
        <>
          <HeaderButton title='右邊按鈕' icon={MdAccessibility} href='https://www.baidu.com' />
          <Menu>
            <MenuButton as={Button} rightIcon='chevron-down'>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem as='a' href='#'>
                Attend a Workshop
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      }
      center={<HeaderButton icon={MdAccessibility} title='中间按鈕' href='https://www.baidu.com' />}
    />
    // <HeaderLogo icon={<Box as={IoMdHome} size={6} />} />

  // <HeaderLeft>
  //   <HeaderButton icon={MdAccessibility} title='左邊按鈕' href='https://www.baidu.com' />
  // </HeaderLeft>
  // <HeaderCenter>
  //   <HeaderButton icon={MdAccessibility} title='中間按鈕' href='https://www.baidu.com' />
  //   <HeaderButton title='中間按鈕' href='https://www.baidu.com' />
  //   <HeaderButton icon={MdAccessibility} title='中間按鈕' href='https://www.baidu.com' />
  // </HeaderCenter>

  // <HeaderRight>
  //   <HeaderButton title='右邊按鈕' icon={MdAccessibility} href='https://www.baidu.com' />
  //   <Menu>
  //     <MenuButton as={Button} rightIcon='chevron-down'>
  //       Actions
  //     </MenuButton>
  //     <MenuList>
  //       <MenuItem>Download</MenuItem>
  //       <MenuItem>Create a Copy</MenuItem>
  //       <MenuItem>Mark as Draft</MenuItem>
  //       <MenuItem>Delete</MenuItem>
  //       <MenuItem as='a' href='#'>
  //         Attend a Workshop
  //       </MenuItem>
  //     </MenuList>
  //   </Menu>
  // </HeaderRight>

  )
}
