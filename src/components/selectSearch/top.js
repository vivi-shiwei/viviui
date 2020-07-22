import React from 'react'
import { Box, Flex, Image, Icon, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/core'
import { Container } from '../containerPage'
import { Header as HeaderBorder } from '../header/DocsHeaderPage'
import { MdAccessibility, MdSettings } from 'react-icons/md'
import { IconName, FiAlignLeft } from 'react-icons/fi'

// logo接受logo文字或圖片  text接受top中部佈局的盒子
const Testpages = ({ logoimgurl, logo, text, children, ...props }) => {
  const Logo = (props) => (
    <Box as='a' href='#'>
      {props.icon}
    </Box>
  )
  return (
    <Container {...props}>
      <HeaderBorder bg='#BBFFFF' pl='-24px'>
        <Flex size='100%' px={{ base: 0, sm: 4, md: 6 }} align='center' justify='space-between'>
          {(!!logo || !!logoimgurl) && (
            <Box display='flex' alignItems='center'>
              {/* {!!logoimgurl && (<Image src={logoimgurl} w='40px' h='40px' rounded='50%' />)} */}
              {!!logo && <Box fontSize='3xl' fontWeight='semibold'>{logo}</Box>}
            </Box>
          )}
          {/* mx中部劇中 */}
          <Box display={{ md: ' flex', sm: 'flex', base: 'none' }} justifyContent='center' mx='auto' w='300px' textAlign='center'>{text}</Box>
          {/* <Box display={{ md: ' none', sm: 'none', base: 'block' }} as={FiAlignLeft} size='32px' color='black' /> */}
          <Menu display='none'>
            <MenuButton display={{ lg: 'none', base: 'block' }} as={FiAlignLeft} size='32px' color='black' />
            <MenuList w='100%'>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem as='a' href='#'>
                Attend a Workshop
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        {children}
      </HeaderBorder>
    </Container>
  )
}

export default Testpages
