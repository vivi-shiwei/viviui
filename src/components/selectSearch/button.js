import React from 'react'
import {
  Box
} from '@chakra-ui/core'

// 随内容撑开居中button
const CenterButton = ({ title, children, ...props }) => {
  return (
    <>
      {!!title && (
        <Box
          as='div'
          p='5px 10px'
          align='center'
          fontSize={{ base: 'xs', sm: 'md', md: 'lg' }}
          px={{ base: 1, sm: 4 }}
          rounded='20px'
          background='green'
          color='white'
          fontWeight='500'
        >
          {title}
          {children}
        </Box>
      )}
    </>
  )
}

export default CenterButton
