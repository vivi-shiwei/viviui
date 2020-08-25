import React from 'react'
import { action } from '@storybook/addon-actions'
import { Box } from '@chakra-ui/core'

import SingleAnnouncement from '../src/components/singleAnnouncement'
import StatusButton from '../src/components/singleAnnouncement/statusButton'

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
