import React from 'react'
import {
  Box,
  List,
  ListItem,
  Link
} from '@chakra-ui/core'
import { FaSchool, FaUserEdit } from 'react-icons/fa'
import { AiTwotoneSetting } from 'react-icons/ai'
import { GoTrashcan, GoStop } from 'react-icons/go'
import LinkNext from 'next/link'

import Management from '../src/components/page/manageMent'
import ColumnLine from '../src/components/page/columnIconText'
import WhiteBoardPage from '../src/components/page'
import HeaderPage from '../src/components/page/pageHeader'

export default {
  title: 'Management(hui)'
}

export const ManagementTest = () => {
  const data = [
    { icon: FaSchool, name: '修改学校' },
    { icon: FaUserEdit, name: '学校用户' },
    { icon: GoTrashcan, name: '批量新增' },
    { icon: AiTwotoneSetting, name: '专长设定' },
    { icon: AiTwotoneSetting, name: '智能设定' }
  ]
  return (
    <WhiteBoardPage
      title={
        <HeaderPage>
          管理员
        </HeaderPage>
      }
    >
      <Management
        px='5%'
        subTitle='你是管理员，可以拥有以下操作...'
      >
        <List spacing={3}>
          {
            data.map((item, index) =>
              <ListItem key={index}>
                <LinkNext href='#' as='a'>
                  <Link
                    _hover={{
                      textDecoration: 'none'
                    }}
                    color='#316bc3'
                  >
                    <ColumnLine icon={item.icon}>{item.name}</ColumnLine>
                  </Link>
                </LinkNext>
              </ListItem>)
          }
        </List>
      </Management>
    </WhiteBoardPage>
  )
}
