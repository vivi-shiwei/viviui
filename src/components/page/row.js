import React from 'react'
import {
  Divider,
  Flex,
  Avatar
} from '@chakra-ui/core'

import { Container } from '../container'

const Row = ({ right, left, name, profilePhoto, noDivider = false, children, ...props }) => {
  return (
    <Flex justify='space-between' px={{ base: '1.25rem', sm: '1.25rem', md: '1.25rem', lg: 0 }} {...props}>
      <Flex mr={5}>
        <Avatar
          name={name}
          src={profilePhoto}
        />
        {children}
        {left}
      </Flex>
      <Flex>{right}</Flex>
      {!noDivider && <Divider my={6} />}
    </Flex>
  )
}

export default Row
