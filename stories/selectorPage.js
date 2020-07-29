import React from 'react'
import {
  Box,
  Link,
  Text
} from '@chakra-ui/core'

import AddSchoolAdministrators from '../src/components/modalSelector'
import AddButton from '../src/components/modalSelector/squareButton'
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
                <Text>管理员</Text>
              </Box>
            </NextLink>
          </Box>
        }
        leftY={<AddButton>新增</AddButton>}
        rightY={
          <EditButton>編輯</EditButton>
        }
      />
    </>
  )
}
