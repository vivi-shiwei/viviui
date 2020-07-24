import React from 'react'
import {
  Box, Link
} from '@chakra-ui/core'

import AddSchoolAdministrators from '../src/components/selectorPage/index'
import Administrator from '../src/components/selectorPage/administrator'
import AddButton from '../src/components/selectorPage/addSelectorButton'
import CenterButton from '../src/components/selectorPage/centerSelector'
import EditButton from '../src/components/selectorPage/editButton'
import NextLink from 'next/link'
export default { title: 'SelectorTest' }

export const SelectorTest = () => {
  return (
    <>
      <AddSchoolAdministrators
        topAdmin={
          <Box d={{ base: 'none', sm: 'none', md: 'flex' }} justifyContent='flex-end'>
            <NextLink href='#'>
              <Link as='a' d='flex' alignItems='center'>
                <Administrator>管理员</Administrator>
              </Link>
            </NextLink>
          </Box>
        }
        leftSelectPage={<AddButton>新增</AddButton>}
        centerSelectPage={
          <CenterButton>亮丽的风景啊觉得偶然圣诞节佛法四点零</CenterButton>
        }
        rightSelectPage={
          <EditButton />
        }
      />
    </>
  )
}
