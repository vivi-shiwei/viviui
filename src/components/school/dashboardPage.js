import React from 'react'
import {
  Box,
  Heading,
  Flex
} from '@chakra-ui/core'
import { Container } from '../containerPage'

export const Card = ({ left, right, title, plate, noDivider = false, children, ...props }) => {
  return (
    <Container {...props} pd={4}>
      {(!!title || !!left || !!right) && (
        <Box position='relative' mx='auto' px={2}>
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
            {!noDivider && <Box borderBottom='1px solid #aaa6a6' w='100%' position='absolute' zIndex='0' />}
            {!!title &&
              <Heading fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} position='relative' textAlign='center' bg='white'>
                {title}
              </Heading>}
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
        </Box>
      )}
      {!!plate && (
        <Box as='section' textAlign='center' mt={3}>
          {plate}
        </Box>
      )}
      {children}
    </Container>
  )
}

const Dashboard = ({ isAdmin, backurl, children, dashboards, ...props }) => {
  return (
    <Box as='main' {...props}>
      <Container>
        {!!isAdmin && (
          <Box d={{ base: 'none', sm: 'none', md: 'flex' }} justifyContent='flex-end'>
            {isAdmin}
          </Box>
        )}
        {!!dashboards && (
          <Box pb={4} textAlign='center'>
            {dashboards}
          </Box>
        )}
        {children}

        {!!isAdmin && (
          <Box d={{ base: 'flex', sm: 'flex', md: 'none' }} justifyContent='center'>
            {isAdmin}
          </Box>
        )}
      </Container>
    </Box>
  )
}
export default Dashboard
