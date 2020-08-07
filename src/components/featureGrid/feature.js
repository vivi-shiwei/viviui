import React from 'react'
import {
  Box,
  Heading,
  Text,
  Flex
} from '@chakra-ui/core'

const Feature = ({
  title, // 傳入title
  icon, // 傳入icon
  subtitle, // 傳入subtitle
  children, // 它的子孫
  ...props // 傳入chakra能接受的樣式到Box裏
}) => {
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
          <Box size={6} color='white' as={icon} />
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

export default Feature
