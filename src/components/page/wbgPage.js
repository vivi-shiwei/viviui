import React from 'react'
import {
  Box,
  Divider
} from '@chakra-ui/core'

// 白板的component，有backurl時，又有children，就會出現白板，沒有children就不會出現白板
const WbgPage = ({ backurl, title, nodivider, children, ...props }) => {
  console.log(title, nodivider)
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

      {
        !!title && (
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

                {!!title && (
                  <>
                    <Box as='header' pt={4} px={16} alignItems='center'>
                      {title}
                    </Box>
                    {!nodivider && <Divider my={6} d={{ base: 'none', md: 'flex' }} />}
                  </>
                )}

                {!!children && (children)}
              </Box>
            </Box>
          </Box>
        )
      }

      {
        (!!children && !title) && (children)
      }
    </Box>
  )
}

export default WbgPage
