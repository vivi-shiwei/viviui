import React from 'react'
import {
  Box, Link
} from '@chakra-ui/core'

import AddSchoolAdministrators from '../src/components/modalSelector'
import Administrator from '../src/components/modalSelector/administrator'
import AddButton from '../src/components/modalSelector/altRoundButton'
import CenterButton from '../src/components/modalSelector/centerSelector'
import EditButton from '../src/components/modalSelector/editButton'
import NextLink from 'next/link'
export default { title: 'SelectorTest' }

export const SelectorTest = () => {
  return (
    <>
      <AddSchoolAdministrators
        topAdmin={
          <Box d={{ base: 'none', sm: 'none', md: 'flex' }} justifyContent='flex-end'>
            <NextLink href='https://www.baidu.com' passHref>
              <Box as='a' d='flex' alignItems='center'>
                <Administrator>管理员</Administrator>
              </Box>
            </NextLink>
          </Box>
        }
        leftY={<AddButton>新增</AddButton>}
        rightY={
          <EditButton />
        }
      />
    </>
  )
}
