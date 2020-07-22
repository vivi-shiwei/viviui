import React from 'react'
import Tags from '../src/components/postCard'
import PostMenuButton from '../src/components/postCard/postMenuButton'
import Creator from '../src/components/postCard/postCreatorHeader'
import {
  Box,
  Heading,
  Button,
  Avatar,
  Menu,
  MenuList,
  MenuItem
} from '@chakra-ui/core'

export default {
  title: 'Post'
}

export const post = () => {
  return (
    <Tags
      creator={
        <Creator
          profilePhoto={<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />}
          creatorName='vivi'
          creatorTime='2019-7-22'
        />
      }
      postMenu={
        <Menu>
          <PostMenuButton />
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
      }
      title='這是大標題（title）'
      subtitle='這是小標題（subtitle）'
    >
      這是內容，（children）
    </Tags>
  )
}
