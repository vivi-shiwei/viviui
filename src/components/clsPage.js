import React from 'react'
import {
  Box,
  Heading,
  Button,
  IconButton,
  Tag,
  Tooltip,
  Avatar
} from '@chakra-ui/core'
import { Container } from './containerPage'

const clsPage = ({ title, clsImage, button, PostCard, children, rightButton = null, ...rest }) => {
  return (
    <>
      <Box {...rest}>
        <Container>
          <Box as='header' textAlign='center'>
            {(title || rightButton) && (
              <Box d='flex' alignItems='center' justifyContent='center'>
                {!!title && (<Heading textAlign='center' fontSize={{ base: '20px', sm: '25px', md: '32px' }} mx={4}>{title}</Heading>)}
                {rightButton}
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
        <Container>
          {PostCard}
        </Container>
      </Box>
      {children}
    </>
  )
}
export default clsPage
