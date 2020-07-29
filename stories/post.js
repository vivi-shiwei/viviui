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
  MenuItem,
  useDisclosure
} from '@chakra-ui/core'

import PostsPictures from '../src/components/postCard/postsPictures'
import NewModal from '../src/components/newModal'
import ModalWithHeader from '../src/components/newModal/modalWithHeader'
import ModalWithContent from '../src/components/newModal/modalContent'
import ModelButton from '../src/components/blueButton'
import MyImage from '../static/QQ20200518181405.jpg'
import MyImage6 from '../static/timg.jpg'
import MyImage3 from '../static/timg8J2T10BJ.jpg'

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
      content='这是正文'
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
      postPhotos={
        <>
          <PostsPictures imageURL={MyImage} />
          {/* <PostsPictures imageURL={MyImage6} /> */}
        </>
      }
      title='這是大標題（title）'
      subtitle='這是小標題（subtitle）'
    >
      這是內容，（children）
    </Tags>
  )
}
export const nemodel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <NewModal
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      w='700px'
      openModal={<ModelButton onClick={onOpen} mt={4}>關閉</ModelButton>}
      modalcontent={
        <ModalWithContent
          mdalHeader={<ModalWithHeader>標題</ModalWithHeader>}
          modalWithFooter={
            <ModelButton onClick={onClose} w='100%' mt={4}>關閉</ModelButton>
          }
          closeButton
        // modalWithBody={<Box w='800px' bg='black' h='50px' />}
        />
      }
    />
  )
}
