import {
  Box,
  Heading,
  Text,
  Avatar,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@chakra-ui/core'

import Header from '../src/components/header'
import HeaderLogo from '../src/components/header/headerLogo'
import HeaderCenter from '../src/components/header/headerCenter'
import HeaderRight from '../src/components/header/headerRight'
import SingleAnnouncement from '../src/components/singleAnnouncement'
import StatusButton from '../src/components/singleAnnouncement/statusButton'

export default { title: 'phone(vivi)' }

export const PhoneNotifications = () => {
  return (
    <>
      <Header bg='white'>
        <HeaderLogo>
          <Heading as='h1' fontSize='26px' letterSpacing='-.1rem'>
            <Box as='span' d={{ base: 'none', sm: 'inline' }}>
              SCHOOL
            </Box>
            <Box as='span' d={{ base: 'inline', sm: 'none' }}>
              SCH
            </Box>
          </Heading>
        </HeaderLogo>
        <HeaderCenter>
          <Text fontSize='19px' fontWeight='bold'>通告</Text>
        </HeaderCenter>
        <HeaderRight>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </HeaderRight>
      </Header>
      <Box mt={16}>
        <Tabs variant='unstyled'>
          <TabList d='flex' justifyContent='space-between'>
            <Tab w='100%' border='1px solid #A0AEC0' borderWidth='0 1px 1px 0' _selected={{ bg: '#E2E8F0' }}>全部</Tab>
            <Tab w='100%' border='1px solid #A0AEC0' borderWidth='0 0 1px 0' _selected={{ bg: '#E2E8F0' }}>未读</Tab>
            <Tab w='100%' border='1px solid #A0AEC0' borderWidth='0 0 1px 1px' _selected={{ bg: '#E2E8F0' }}>未回复</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SingleAnnouncement
                title='圣诞节活动'
                time='2019-08-09 14:09'
                content='发布人：vivi(管理员)'
              >
                <StatusButton>未读</StatusButton>
              </SingleAnnouncement>

              <SingleAnnouncement
                title='圣诞节活动'
                time='2019-08-09 14:09'
                content='发布人：vivi(管理员)'
              >
                <StatusButton>未回复</StatusButton>
              </SingleAnnouncement>

              <SingleAnnouncement
                title='圣诞节活动'
                time='2019-08-09 14:09'
                content='发布人：vivi(管理员)'
              >
                <StatusButton background='#4299E1'>已读</StatusButton>
              </SingleAnnouncement>
            </TabPanel>
            <TabPanel>
              <SingleAnnouncement
                title='圣诞节活动'
                time='2019-08-09 14:09'
                content='发布人：vivi(管理员)'
              >
                <StatusButton>未读</StatusButton>
              </SingleAnnouncement>
            </TabPanel>
            <TabPanel>
              <SingleAnnouncement
                title='圣诞节活动'
                time='2019-08-09 14:09'
                content='发布人：vivi(管理员)'
              >
                <StatusButton>未回复</StatusButton>
              </SingleAnnouncement>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}
