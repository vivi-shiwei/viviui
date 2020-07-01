import React from 'react'
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Tag,
  TagLabel,
  Spinner,
  Divider
} from '@chakra-ui/core'
import { Container } from './container'
const NewBgLayout = ({ backurl, children, noDivider = false, title, ...props }) => {
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
            className='nav-prev'
          >
            {backurl}
          </Box>
        )}
        {title ? (
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
                <Box as='header' pt={4} px={16}>
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

                  {/* <Heading
                  textAlign='center'
                  fontSize={{ base: '17px', md: '25px' }}
                  mt={5}
                  overflow='hidden'
                  textOverflow='ellipsis'
                  whiteSpace='nowrap'
                >
                  {props.schoolname}
                  <Box
                    as='span'
                    display={{ base: 'none', sm: 'none', md: 'inline-block' }}
                  >
                    {props.dashboradname}
                  </Box>
                </Heading>
                <Heading
                  as='h5'
                  size='sm'
                  textAlign='center'
                  mt={4}

                  overflow='hidden'
                  textOverflow='ellipsis'
                  whiteSpace='nowrap'

                  display={{ base: 'block', sm: 'block', md: 'none' }}
                >
                  {props.dashboradname}
                </Heading> */}
                </Box>
                {!noDivider && <Divider my={6} d={{ base: 'none', md: 'flex' }} />}
                {children}
              </Box>
            </Box>
          </Box>
        ) : (
          <Container>
            <Box pb={4}>
              {children}
            </Box>
          </Container>
        )}
      </Box>
    </>
  )
}
export default NewBgLayout
