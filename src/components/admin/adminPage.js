import React from 'react'
import {
  Box,
  Heading,
  Divider
} from '@chakra-ui/core'
import HeaderContainer from '../container'
const Admin = ({ backurl, button = null, schoolname, dashboradname, tabNames, children, divider, title, ...props }) => {
  return (
    <>
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
        {(title || button || tabNames || schoolname) ? (
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
                {(title || button || schoolname) && (
                  <Box as='header' m='auto' mt={children ? 8 : 0}>
                    {!!title && (
                      <Heading
                        as='h2'
                        textAlign='center'
                        size='lg'
                        overflow='hidden'
                        textOverflow='ellipsis'
                        whiteSpace='nowrap'
                      >
                        {title}
                      </Heading>
                    )}
                    {!!schoolname && (
                      <Heading
                        textAlign='center'
                        fontSize={{ base: '17px', md: '25px' }}
                        mt={5}

                        overflow='hidden'
                        textOverflow='ellipsis'
                        whiteSpace='nowrap'
                      >
                        {schoolname}
                        {!!dashboradname && (
                          <Box
                            as='span'
                            display={{ base: 'none', sm: 'none', md: 'inline-block' }}
                          >
                            （{dashboradname}）
                          </Box>
                        )}
                      </Heading>
                    )}
                    {button}
                  </Box>
                )}
                {!!tabNames && (
                  <Box overflowX='auto'>
                    {tabNames}
                  </Box>
                )}
                {!!divider && <Divider my={6} d={{ base: 'none', md: 'flex' }} />}
                {children}
              </Box>
            </Box>
          </Box>
        ) : (
          <HeaderContainer>
            <Box mt={4}>
              {children}
            </Box>
          </HeaderContainer>
        )}
      </Box>
    </>
  )
}
export default Admin
