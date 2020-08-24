import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core'

const StatusButton = ({ children, ...props }) => {
  return (
    <Box rounded='999px' fontSize='14px' background='red' my='auto' h='30px' px='15px' color='white' {...props}>
      <Text alignItems='center' textAlign='center' lineHeight='30px'>
        {children}
      </Text>
    </Box>
  )
}
export default StatusButton
