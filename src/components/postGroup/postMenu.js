import React from 'react'
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Text
} from '@chakra-ui/core'

const PostMenu = ({ canDelete, canEdit, children, ...props }) => {
  return (
    <Box position='absolute' right='0px' top='0px' d='flex' justifyContent='flex-end' alignItems='flex-start' {...props}>
      {/* 編輯與刪除的按鈕 */}
      <Menu placement='bottom-end'>
        <MenuButton as={Icon} size='30px' name='chevron-down' />
        <MenuList>
          <MenuItem minH='20px' onClick=''>
            <Text>編輯</Text>
          </MenuItem>
          <MenuItem minH='20px' onClick=''>
            <Text>刪除</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default PostMenu
