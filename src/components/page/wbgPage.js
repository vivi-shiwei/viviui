import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const WbgPage = ({ backurl, children, ...props }) => {
  return (
    <Box as='main' {...props}>
      {!!backurl && (
        <Box
          mx='auto'
          h='45px'
          w='100%'
          d='flex'
          alignItems='center'
          justifyContent='center'
          roundedTopLeft='4px'
          roundedTopRight='4px'
        >
          {backurl}
        </Box>
      )}
      {!!children && (
        <Box
          as='div'
          w={{ base: '100%', md: '90%' }}
          mt='2px'
          mx='auto'
          bg='white'
          minH='100vh'
          maxWidth='928px'
          borderRadius='4px 4px 0 0'
          position='relative'
          boxShadow={{
            base: '',
            sm: '',
            md: '0 -1px 10px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #f3ece8'
          }}
        >
          <Box pt='1px'>
            <Box
              as='section'
              mx='auto'
              w='100%'
              maxW={{ base: '100%', sm: '100%', md: '800px' }}
              backgroundColor='white'
              rounded={8}
              transition='0.3s'
            >
              {children}
            </Box>
          </Box>
        </Box>
      )}

    </Box>
  )
}

export default WbgPage
