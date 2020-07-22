import React from 'react'
import {
  ButtonGroup,
  Button,
  Stack,
  Menu,
  Avatar,
  MenuButton,
  MenuItem,
  Box,
  MenuList,
  Link,
  MenuDivider,
  Heading,
  Flex,
  Text,
  Grid,
  Input

} from '@chakra-ui/core'
import Toptest from '../src/components/selectSearch/top'
import Centertest from '../src/components/selectSearch/center'
import { OneGrid, GridGroup } from '../src/components/selectSearch/footer'
import { MdAccessibility, MdPalette, MdPhoto, MdShowChart } from 'react-icons/md'

import MyImage from '../static/QQ20200518181405.jpg'

export default { title: 'SelectSearch' }

export const withHeader = () => {
  const data = [
    { title: '標題', content: 'this is content of the title' },
    { title: '標題', content: 'this is content of the title' },
    { title: '標題', content: 'this is content of the title' }
  ]
  return (
    <>
      <Toptest
        mt='20px'
        logo={<Box>LOGO</Box>} logosize='24px' logoWeight='bold'
        text={
          <>
            <Box w='60%'>
              <Grid templateColumns='repeat(4, 1fr)' gap={2}>
                <Box color='blue.500' lineHeight='40px'>活動</Box>
                <Box color='blue.500' lineHeight='40px'>簡介</Box>
                <Box color='blue.500' lineHeight='40px'>生活</Box>
              </Grid>
            </Box>
            <Input w='40%' />
          </>
        }
      />
      <Centertest HeaderContent='内容' />
      {/* 底部數據 */}
    </>
  )
}
export const SearchHeaderleft = () => {
  return (
    <Toptest logo='WEIKT' />
  )
}
export const SearchCustomTitle = () => {
  const Header1 = '大标题'
  return (
    <Centertest Header1={Header1} />
  )
}
export const SearchContent = () => {
  const HeaderContent = '内容主体'
  return (
    <Centertest HeaderContent={HeaderContent} />
  )
}
export const SearchIcon = () => {
  const HeaderIcon = 'warning'
  return (
    <Centertest HeaderIcon={HeaderIcon} />
  )
}
export const SearchLeftButton = () => {
  const leftButton = 'leftButton'
  return (
    <Centertest leftButton={leftButton} />
  )
}
export const SearchRightButton = () => {
  const rightButton = 'rightButton'
  return (
    <Centertest HrightButton={rightButton} />
  )
}
export const SearchLeftRight = () => {
  return (
    <Centertest leftButton='leftButton' rightButton='rightButton' />
  )
}
export const Children = () => {
  return (

    <Centertest
      Header1='我的學校'
      leftButton='登入我的學校'
      HeaderContent='SCHOOL 是一個簡單的、可連結很多模組的、線上的學校系統。可透過 SCHOOL 進行日常校園管理，了解學生學習生活，促進發掘學生閃光點等等。專為澳門中小幼學校而設。'
    >什麽内容都可以
    </Centertest>
  )
}
export const SearchOneGrid = () => {
  return (
    <OneGrid title='大標題' content='内容部分' icon='warning' />
  )
}
export const GridGroupsTest = () => {
  return (
    <GridGroup>
      <OneGrid icon='phone' title='大標題' content='内容部分' />
      <OneGrid icon='add' title='大標題' />
    </GridGroup>
  )
}

export const PCompound = () => {
  return (
    <>
      <Toptest
        background='red'
        mt='120px'
        logo={<Box>LOGO</Box>} logosize='24px' logoWeight='bold'
        text={
          <>
            <Box w='60%'>
              <Grid templateColumns='repeat(4, 1fr)' gap={2}>
                <Box color='blue.500' lineHeight='40px'>活動</Box>
                <Box color='blue.500' lineHeight='40px'>簡介</Box>
                <Box color='blue.500' lineHeight='40px'>生活</Box>
              </Grid>
            </Box>
            <Input w='40%' />
          </>
        }
      />
      <Centertest
        Header1='我的學校'
        leftButton='登入我的學校'
        rightButton='登入我的學校'
        HeaderContent='SCHOOL 是一個簡單的、可連結很多模組的、線上的學校系統。可透過 SCHOOL 進行日常校園管理，了解學生學習生活，促進發掘學生閃光點等等。專為澳門中小幼學校而設。'
      >
        什麽内容都可以
      </Centertest>
      <Box />
      <GridGroup mt='60px'>
        <OneGrid icon='phone' title='大標題' content='内容部分' />
        <OneGrid icon='add' title='大標題' />
        <OneGrid icon='moon' title='大標題' content='内容部分' />
      </GridGroup>
    </>
  )
}
