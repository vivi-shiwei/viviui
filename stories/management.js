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

import Management from '../src/components/management/index'
import Description from '../src/components/management/description'
import ManageTitle from '../src/components/management/manageTitle'
import ColumnLine from '../src/components/management/columnOne'

export default {
  title: 'Management'
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
    <Management
      title={
        <ManageTitle>管理员</ManageTitle>
      }
      text={
        <Description>你是以为管理员，可以拥有以下操作</Description>
      }
      columnLine={
        <List spacing={3}>
          {data.map((item, index) => {
            return (
              <ListItem className='admin-list-item' key={index}>
                <LinkNext href='#' as='a'>
                  <Link
                    d='flex'
                    alignItems='center'
                    _hover={{
                      textDecoration: 'none'
                    }}
                    color='#316bc3'
                  >
                    <ColumnLine icon={item.icon}>{item.name}</ColumnLine>
                  </Link>
                </LinkNext>
              </ListItem>
            )
          })}
        </List>
      }

    />
  )
}
