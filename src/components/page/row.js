import React from 'react'
import {
  Divider,
  Flex,
  Avatar,
  Box
} from '@chakra-ui/core'

// 顯示學校用戶的component
const Row = ({ right, left, name, profilePhoto, noDivider = false, children, ...props }) => {
  return (
    <>
      <Flex
        justify='space-between'
        width='full'
        maxWidth='1280px'
        mx='auto'
        px={{ base: '1.25rem', sm: '1.25rem', md: '1.25rem', lg: 0 }}
        {...props}
      >
        <Flex>
          <Box mr={5}>
            <Avatar
              name={name}
              src={profilePhoto}
            />
          </Box>
          {children}
          <Box>
            {left}
          </Box>
        </Flex>
        <Flex>{right}</Flex>
      </Flex>
      {!noDivider && <Divider my={6} />}
    </>
  )
}

export default Row
