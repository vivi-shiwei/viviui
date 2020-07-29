import React from 'react'
import {
  Box,
  IconButton,
  Button
} from '@chakra-ui/core'

import ModalSelector from '../src/components/modalSelector/index'
import Administrator from '../src/components/modalSelector/administrator'
import AddButton from '../src/components/modalSelector/altRoundButton'
import EditButton from '../src/components/modalSelector/editButton'
import ModalSelectorOption from '../src/components/modalSelector/modalSelectorOption'

import NextLink from 'next/link'
import { GrTwitter } from 'react-icons/gr'
export default { title: 'ModalSelector' }

export const ModalSelectorTest = () => {
  return (
    <>
      <ModalSelector
        mt='20px'
        value='阿迪斯发威风威风第三方撒旦发射点发大水撒打发二'
        modalTitle='Dashboard 選擇'
        topAdmin={
          <Box d={{ base: 'none', sm: 'none', md: 'flex' }} justifyContent='flex-end'>
            <NextLink href='https://www.baidu.com' passHref>
              <Box as='a' d='flex' alignItems='center'>
                <Administrator icon={GrTwitter}>管理员</Administrator>
              </Box>
            </NextLink>
          </Box>
        }
        leftY={
          // <Button>新增</Button>
          <AddButton>新增</AddButton>
        }
        rightY={
          // <IconButton icon='search' />
          <EditButton icon='edit' />
        }
      >
        <ModalSelectorOption value='option1' isDisabled>option1</ModalSelectorOption>
        <ModalSelectorOption value='option2'>option2</ModalSelectorOption>
        <ModalSelectorOption value='option3'>option3</ModalSelectorOption>
      </ModalSelector>
    </>
  )
}
