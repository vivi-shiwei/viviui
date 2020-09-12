import React from 'react'
import {
  Box,
  Heading,
  Button,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  useDisclosure
} from '@chakra-ui/core'

import Reminder from '../src/components/reminder'
import ReminderBody from '../src/components/reminder/reminderBody'
import ReminderFooter from '../src/components/reminder/reminderFooter'
import ReminderHeader from '../src/components/reminder/reminderHeader'

export default {
  title: 'Reminder(vivi)'
}

export const Reminderr = () => {
  return (
    <Reminder>
      <ReminderHeader>
        这是头部
      </ReminderHeader>
      <ReminderBody>
          这是body
      </ReminderBody>
      <ReminderFooter>
            这是尾巴
      </ReminderFooter>
    </Reminder>
  )
}
