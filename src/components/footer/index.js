import React from 'react'
import {
  Box,
  Text,
  Divider,
  Flex,
  Heading
} from '@chakra-ui/core'

import Container from '../container'

const Footer = ({ title, context, sign, noDivider = false, children, ...props }) => {
  return (
    <>
      {!noDivider && (<Divider mt={24} mb={6} />)}
      <Container mb={{ base: 4, md: 20 }} px={4} {...props}>
        <Box as='footer'>
          <Flex flexWrap='wrap'>
            <Box w={{ base: '100%', md: '100%' }} borderLeftWidth={{ base: 0, md: 0 }} pl={{ base: 0, md: 0 }} mb={4}>
              <Heading as='p' size='lg' letterSpacing='-.1rem' mb={5}>
                <Box as='span'>
                  {title}
                </Box>
              </Heading>
              <Text mb={2}>
                {context}
              </Text>
            </Box>
            <Box d={{ base: 'block', md: 'block' }}>
              {sign}
            </Box>
          </Flex>
          {children}
        </Box>
      </Container>
    </>
  )
}

export default Footer
