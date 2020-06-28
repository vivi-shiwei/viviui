import React from 'react'
import { Box, Link, Flex, Text } from '@chakra-ui/core'
import { jsx } from '@emotion/core'
import NextLink from 'next/link'

const Logo = ({ text, icon, ...props }) => (
  <NextLink href='/' passHref>
    <Link
      _hover={{ textDecor: 'none' }}
      borderRadius='md'
      display='block'
      aria-label='Chakra UI, Back to homepage'
      {...props}
    >
      <Flex
        height='8'
        width='auto'
        viewBox='0 0 998 257'
        fill='none'
        {...props}
      >
        {!!icon && (
          <Flex
            rounded='full'
            size={10}
            bg='teal.500'
            align='center'
            justify='center'
          >
            <Box as={icon} size={6} color='white' />
          </Flex>

        )}
        {!!text && (
          <Text ml={4} fontSize={30}>{text}</Text>
        )}
      </Flex>
    </Link>
  </NextLink>
)

export default Logo
