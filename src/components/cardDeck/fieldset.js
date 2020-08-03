import React from 'react'
import { Box, Heading, Flex } from '@chakra-ui/core'

const Fieldset = ({ title, left, children, ...props }) => {
  return (
    <Box position='relative' width='full' textAlign='center' my='20px' {...props}>
      {left}
      <Flex justify='center' align='center'>
        <Box borderBottom='1px solid #aaa6a6' w='100%' position='absolute' zIndex='0' />
        <Heading
          fontSize={{ base: '20px', sm: '25px', md: '35px' }}
          textAlign='center'
          bg={props.bg || props.background}
          color='black'
          zIndex='1'
          lineHeight='40px'
          p='0 5px'
        >
          {title}
          {children}
        </Heading>
      </Flex>
    </Box>
  )
}

export default Fieldset
