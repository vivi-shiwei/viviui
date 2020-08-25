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
  const a = '圣马大肋纳学校毕业安排 一、典礼时间：2020年8月15日下午15：00 二、典礼地点在升旗台集合 三、典礼程序 第一项：全体起立，奏国歌 第二项：校领导宣读《关于授予2010届工商管理硕士（MBA）专业学位的决定》并致辞 第三项：举行授予硕士学位的仪式 第四项：领导致辞 第五项：表彰 （一）优秀论文 （二）优秀干部 （三）优秀毕业生 第六项“学院领导讲话 第七项：学院领导讲话 第八项：朗诵核心理念（宣布毕业典礼结束）'
  return (
    <>
      <Header bg='#4bd6f3'>
        <HeaderLogo>
          <Icon color='white' name='arrow-back' fontSize='34px' onClick={() => console.log('344')} />
        </HeaderLogo>
        <HeaderCenter>
          <Heading as='h1' fontWeight='500' fontSize='26px' letterSpacing='-.1rem'>
            <Box as='span' d={{ base: 'none', sm: 'inline' }}>
              SCHOOL
            </Box>
            <Box as='span' d={{ base: 'inline', sm: 'none' }}>
              SCH
            </Box>
          </Heading>
        </HeaderCenter>
        <HeaderRight>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </HeaderRight>
      </Header>
      <Page mt='67px'>
        <Box borderBottom='1px solid #4A5568'>
          <Heading as='h1' fontSize='26px' textAlign='center' fontWeight='bold'>毕业典礼安排</Heading>
          <Flex justifyContent='space-between' mx='20px'>
            <Text fontSize='16px' color='#A0AEC0'>2020-8-25 14:54</Text>
            <Text fontSize='16px' color='#A0AEC0'>发布人：XXX（管理员）</Text>
          </Flex>
        </Box>
        <Box mx='24px'>
          <Flex justifyContent='flex-end'>
            <Text fontSize='20px' color='#00B5DD'>查看附件</Text>
          </Flex>
          <Box>
            <LabelName label='通告内容' />
            {a.split(' ').map((item, index) => {
              return (
                <Text key='index'>{item}</Text>
              )
            })}
          </Box>
        </Box>
      </Page>
    </>
  )
}
