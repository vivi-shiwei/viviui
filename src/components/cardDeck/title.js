import React from 'react'
import { Box, Heading, Flex } from '@chakra-ui/core'

const Title = ({ title, children, ...props }) => {
  return (
    <>
      <Box position='relative' width='full' {...props}>
        <Flex justify='center' align='center'>
          <Box borderBottom='1px solid #aaa6a6' w='100%' position='absolute' zIndex='0' />
          <Heading fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} position='relative' textAlign='center' bg='white' color='black' lineHeight='40px' p='0 5px'>
            {title}
          </Heading>
        </Flex>
      </Box>
      {children}
    </>
  )
}

export default Title
