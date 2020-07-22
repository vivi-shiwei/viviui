import React from 'react'
import {
  Box,
  Heading,
  Button,
  IconButton,
  Tag,
  Tooltip,
  Avatar,
  Flex
} from '@chakra-ui/core'
import { Container } from './containerPage'

const ClsPage = ({ classes, clsImage, noDivider = false, title, noTitle = false, left, right, button, PostCard, children, ...rest }) => {
  return (
    <>
      <Box {...rest}>
        <Container>
          <Box as='header' textAlign='center'>
            {!!classes && (
              <Box d='flex' alignItems='center' justifyContent='center'>
                {!!classes && (<Heading textAlign='center' fontSize={{ base: '20px', sm: '25px', md: '32px' }} mx={4}>{classes}</Heading>)}
              </Box>
            )}
            {clsImage}
            {!!button && (
              <Box d='flex' justifyContent='center'>
                {button}
              </Box>
            )}
          </Box>
        </Container>
      </Box>
      <Box py={4}>
        {(!!title || !!left || !!right) && (
          <Box position='relative' mx='auto' px={2} mb={children ? 8 : 0}>
            <Flex justify='center' align='center'>
              {!!left && (
                <Flex
                  bg='white'
                  zIndex='1'
                  position='absolute'
                  top='50%'
                  left=' 0'
                  transform=' translate(0, -50%)'
                >
                  {left}
                </Flex>
              )}
              {!noTitle
                ? (
                  <>
                    {!noDivider && <Box borderBottom='1px solid #aaa6a6' w='95%' position='absolute' zIndex='0' />}
                    <Heading fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} position='relative' textAlign='center' bg='white'>
                      {title || '貼文'}
                    </Heading>
                  </>
                ) : ''}
              {!!right && (
                <Box
                  bg='white'
                  zIndex='1'
                  position='absolute'
                  top='50%'
                  right=' 0'
                  transform=' translate(0, -50%)'
                >
                  {right}
                </Box>
              )}
            </Flex>
            {children}
          </Box>
        )}
        {children}
      </Box>
    </>
  )
}
export default ClsPage
