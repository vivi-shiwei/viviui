import React from 'react'
import { Box } from '@chakra-ui/core'

// 包住小白塊的 Box
const GroupCard = (props) => {
  return (
    <Box as='section' textAlign='center' {...props} />
  )
}

export default GroupCard
