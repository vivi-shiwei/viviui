import React from 'react'
import {
  Box,
  Divider,
  useColorMode
} from '@chakra-ui/core'

// 白板的component，有backurl時，又有children，就會出現白板，沒有children就不會出現白板
const WbgPage = ({ title, nodivider, headerPage, children, ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <Box as='main' {...props}>
      <Box
        as='div'
        w={{ base: '100%', md: '90%' }}
        mt='2px'
        mx='auto'
        bg={colorMode === 'light' ? (props.bg || props.background || 'white') : (props.dark || '#1A202C')}
        minH='100vh'
        maxWidth='928px'
        borderRadius='4px 4px 0 0'
        position='relative'
        boxShadow={{
          base: '',
          sm: '',
          md: colorMode === 'light' ? '0 -1px 10px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #f3ece8' : '0 -1px 10px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #2D3748'
        }}
      >
        <Box pt='1px'>
          <Box
            as='section'
            mx='auto'
            w='100%'
            maxW={{ base: '100%', sm: '100%', md: '800px' }}
            bg={colorMode === 'light' ? (props.bg || props.background || 'white') : (props.dark || '#1A202C')}
            rounded={8}
            transition='0.3s'
          >

            {(!!title || !!headerPage) && (
              <>
                <Box as='header' pt={4} px={16} alignItems='center'>
                  {title}
                  {headerPage}
                </Box>
                {!nodivider && <Divider my={6} d={{ base: 'none', md: 'flex' }} />}
              </>
            )}

            {!!children && (children)}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default WbgPage
