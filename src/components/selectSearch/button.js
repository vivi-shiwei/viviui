import React from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'
import NextLink from 'next/link'

// 随内容撑开居中button
export const CenterButton = ({ title, children, ...props }) => {
  return (
    <>
      {!!title && (
        <Box
          as='button'
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
        </Box>

      )}
      {children}
    </>
  )
}
