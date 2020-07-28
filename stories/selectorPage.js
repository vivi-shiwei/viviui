import React from 'react'
import {
  Box, Link
} from '@chakra-ui/core'

import AddSchoolAdministrators from '../src/components/selectorPage/index'
import Administrator from '../src/components/selectorPage/administrator'
import AddButton from '../src/components/selectorPage/altRoundButton'
import CenterButton from '../src/components/selectorPage/centerSelector'
import EditButton from '../src/components/selectorPage/editButton'
import NextLink from 'next/link'
import Router from 'next/router'
import { GrUserAdmin, GrUserExpert, GrTwitter } from 'react-icons/gr'
import { GoTrashcan } from 'react-icons/go'
export default { title: 'SelectorTest' }

export const SelectorTest = () => {
  return (
    <>
      <AddSchoolAdministrators
        topAdmin={
          <Box d={{ base: 'none', sm: 'none', md: 'flex' }} justifyContent='flex-end'>
            <NextLink href='https://www.baidu.com' passHref>
              <Box as='a' d='flex' alignItems='center'>
                <Administrator icon={GrTwitter}>管理员</Administrator>
              </Box>
            </NextLink>
          </Box>
        }
        leftSelectPage={<AddButton>新增管理员</AddButton>}
        centerSelectPage={
          <CenterButton>亮丽的风景啊觉得偶然圣诞节佛法四点零</CenterButton>
        }
        rightSelectPage={
          <EditButton icon='edit' bg='#99CC99' />
        }
      />
    </>
  )
}
