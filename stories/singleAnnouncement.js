import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  Box,
  Heading,
  Text,
  Avatar,
  Icon,
  Flex
} from '@chakra-ui/core'

import SingleAnnouncement from '../src/components/singleAnnouncement'
import StatusButton from '../src/components/singleAnnouncement/statusButton'
import Header from '../src/components/header'
import HeaderLogo from '../src/components/header/headerLogo'
import HeaderCenter from '../src/components/header/headerCenter'
import HeaderRight from '../src/components/header/headerRight'
import Page from '../src/components/page'
import BackButton from '../src/components/page/backButton'
import SureButton from '../src/components/page/sureButton'
import DeleteRemind from '../src/components/page/deleteRemind'
// import DeleteIconButton from '../src/components/page/deleteButton'
import LabelName from '../src/components/page/labelName'

export default { title: 'SingleAnnouncement(vivi)' }

export const SearchTest = () => {
  return (
    <Box>
      <SingleAnnouncement
        onClick={() => console.log('hahah')}
        time='2020-08-10 14:58:25'
        title='圣诞晚会'
        content='发布人：XXX(管理员)'
      >
        <StatusButton>未读</StatusButton>
      </SingleAnnouncement>
      <SingleAnnouncement
        time='2020-08-10 14:58:25'
        title='圣诞晚会'
        content='发布人：XXX(管理员)'
      >
        <StatusButton>未读</StatusButton>
      </SingleAnnouncement>
      <SingleAnnouncement
        time='2020-08-10 14:58:25'
        title='圣诞晚会'
        content='发布人：XXX(管理员)'
      >
        <StatusButton>未读</StatusButton>
      </SingleAnnouncement>
      <SingleAnnouncement
        time='2020-08-10 14:58:25'
        title='圣诞晚会'
        content='发布人：XXX(管理员)'
      >
        <StatusButton background='#4299E1'>已读</StatusButton>
      </SingleAnnouncement>
      <SingleAnnouncement
        time='2020-08-10 14:58:25'
        title='圣诞晚会'
        content='发布人：XXX(管理员)'
      >
        <StatusButton>未回复读</StatusButton>
      </SingleAnnouncement>
    </Box>
  )
}

export const titytitle = () => {
  return (
    <>
      <Header bg='white'>
        <HeaderLogo>
          <Icon name='arrow-back' fontSize='34px' onClick={() => console.log('344')} />
        </HeaderLogo>
        <HeaderCenter>
          <Text fontSize='19px' fontWeight='bold'>通告</Text>
        </HeaderCenter>
        <HeaderRight>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </HeaderRight>
      </Header>
      <Page mt='67px'>
        <Box borderBottom='1px solid #4A5568'>
          <Heading textAlign='center' fontWeight='bold'>毕业典礼安排</Heading>
          <Flex justifyContent='space-around'>
            <Text fontSize='16px' color='#A0AEC0'>2020-8-25 14:54</Text>
            <Text fontSize='16px' color='#A0AEC0'>发布人：XXX（管理员）</Text>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Text>查看附件</Text>
          </Flex>
        </Box>
      </Page>
    </>
  )
}
