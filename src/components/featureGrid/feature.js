import React from 'react'
import {
  Box,
  Heading,
  Text,
  Flex
} from '@chakra-ui/core'

const OddFeature = ({ title, icon, subtitle, children, ...props }) => {
  return (
    <Box {...props}>
      {!!icon && (
        <Flex
          rounded='full'
          size={12}
          bg='blue.500'
          align='center'
          justify='center'
        >
          {<Box size={6} color='white' as={icon} />}
        </Flex>
      )}
      {!!title && (
        <Heading as='h2' size='md' fontWeight='semibold' mt='1em' mb='0.5em'>
          {title}
        </Heading>
      )}
      {!!subtitle && (
        <Text>{subtitle}</Text>
      )}
      {children}
    </Box>
  )
}

export default OddFeature
