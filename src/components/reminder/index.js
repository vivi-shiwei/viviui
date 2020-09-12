import React, { Children } from 'react'
import {
  Box
} from '@chakra-ui/core'

import ReminderBody from './reminderBody'
import ReminderFooter from './reminderFooter'
import ReminderHeader from './reminderHeader'

import ReminderContext from './reminderContext'

const Reminder = ({ error = null, success = null, warning = null, info = null, children, ...props }) => {
  let header = null
  let body = null
  let footer = null

  Children.map(children, (c, i) => {
    switch (c.type) {
      case ReminderHeader:
        header = c
        break
      case ReminderBody:
        body = c
        break
      case ReminderFooter:
        footer = c
        break
    }
  })
  return (
    <Box
      as='section'
      w='100%'
      minH='300px'
      border={error ? '1px solid #FED7D7' : success ? '1px solid #FED7D7' : warning ? '1px solid #FED7D7' : 'd'}
      {...props}
    >
      <ReminderContext.Provider
        value={{
          error
        }}
      >
        {header}
        {body}
        {footer}
      </ReminderContext.Provider>
    </Box>
  )
}

export default Reminder
