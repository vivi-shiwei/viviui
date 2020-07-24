import React from 'react'
import { Box } from '@chakra-ui/core'

const GroupCard = ({ data, children, ...props }) => {
  return (
    <Box as='section' textAlign='center'>
      {children}
    </Box>

  )
}

export default GroupCard
