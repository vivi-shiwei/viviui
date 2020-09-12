import React, { useContext } from 'react'
import {
  Box
} from '@chakra-ui/core'

// import { ReminderContext } from './reminderContext'

const ReminderFooter = (props) => {
  // const { error, info, warning } = useContext(ReminderContext)
  return (
    <Box
      as='section'
      w='100%'
      // background={error ? '#FED7D7' : info ? '#B2F5EA' : warning ? '#FEFCBFE' : '#C6F6D5'}
      {...props}
    />
  )
}

export default ReminderFooter
