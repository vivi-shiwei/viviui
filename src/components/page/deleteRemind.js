import React from 'react'
import {
  Box,
  Heading,
  Divider,
  useColorMode
} from '@chakra-ui/core'

// 刪除提示框
const HeaderPage = ({ title, content, children, ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <Box border='1px solid #FED7D7' background={colorMode === 'light' ? '#FFF5F5' : '#2D3748'} rounded={4} mt={20} p={5} {...props}>
      <Box>
        <Heading as='h4' size='md'>
          {title}
        </Heading>
        <Box mt={4}>{content}</Box>
      </Box>
      <Divider />
      <Box
        textAlign='right'
        pr={3}
        pt={8}
      >
        {children}
      </Box>

    </Box>
  )
}

export default HeaderPage
