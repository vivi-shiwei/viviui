import React, { Children } from 'react'
import {
  Box
} from '@chakra-ui/core'

import ReminderBody from './reminderBody'
import ReminderFooter from './reminderFooter'
import ReminderHeader from './reminderHeader'

// import ReminderContext from './reminderContext'

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
    <>
      {/* {(error && warning && info) && (<Box
        as='section'
        w='100%'
        minH='300px'
        background='#C6F6D5'
          border='1px solid #68D391'
        background={error ? '#FED7D7' : info ? '#B2F5EA' : warning ? '#FEFCBFE' : '#C6F6D5'}
        border={error ? '1px solid #FED7D7' : info ? '1px solid #63B3ED' : warning ? '1px solid #F6E05E' : '#68D391'}
        {...props}
                                      >
        <ReminderContext.Provider
        value={{
          error,
          success,
          warning,
          info
        }}
      >
        {header}
        {body}
        {footer}
        </ReminderContext.Provider>
      </Box>
      )} */}

      {(error && warning && info) && (
        <Box
          as='section'
          w='100%'
          minH='300px'
          background='#C6F6D5'
          border='1px solid #68D391'
          {...props}
        >
          {header}
          {body}
          {footer}
        </Box>
      )}

      {(error) && (
        <Box
          as='section'
          w='100%'
          minH='300px'
          background='#FED7D7'
          border='1px solid #FED7D7'
          {...props}
        >
          {header}
          {body}
          {footer}
        </Box>
      )}
      {(warning) && (
        <Box
          as='section'
          w='100%'
          minH='300px'
          background='#FEFCBFE'
          border='1px solid #F6E05E'
          {...props}
        >
          {header}
          {body}
          {footer}
        </Box>
      )}
      {(info) && (
        <Box
          as='section'
          w='100%'
          minH='300px'
          background='#B2F5EA'
          border='1px solid #63B3ED'
          {...props}
        >
          {header}
          {body}
          {footer}
        </Box>
      )}
    </>
  )
}

export default Reminder
