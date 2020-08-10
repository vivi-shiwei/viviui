import React from 'react'
import {
  Box,
  Heading,
  Flex,
  useColorMode
} from '@chakra-ui/core'

import Container from '../container'
// 學校專業的 title 底綫模塊
const Fieldset = ({ title, left, right, children, ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <Container
      pb={4}
      maxW='960px'
      {...props}
      bg={colorMode === 'light' ? (props.bg || props.background) : (props.dark || '#1A202C')}
    >
      <Box
        position='relative'
        width='full'
        textAlign='center'
        my='20px'
        bg={colorMode === 'light' ? (props.bg || props.background) : (props.dark || '#1A202C')}
      // {...props}
      >
        <Box
          position=' absolute'
          top='0'
          left=' 0'
        >
          {left}
        </Box>
        <Flex justify='center' align='center'>
          {(!!children || !!title) && (
            <>
              <Box borderBottom={`1px solid ${colorMode === 'light' ? '#aaa6a6' : 'white'}`} w='100%' position='absolute' zIndex='0' />
              <Heading
                fontSize={{ base: '20px', sm: '25px', md: '35px' }}
                textAlign='center'
                bg={colorMode === 'light' ? (props.bg || props.background) : (props.dark || '#1A202C')}
                color={colorMode === 'light' ? 'black' : 'white'}
                zIndex='1'
                lineHeight='40px'
                p='0 5px'
              >
                {title}
                {children}
              </Heading>
            </>
          )}
        </Flex>
        <Box
          position=' absolute'
          top='0'
          right=' 0'
        >
          {right}
        </Box>
      </Box>
    </Container>
  )
}

export default Fieldset
