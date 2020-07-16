import React from 'react'
import {
  Box,
  Heading,
  Text,
  Divider
} from '@chakra-ui/core'
import { Container } from '../containerPage'

const Hero = ({ title, subtitle, children, noBottomBorder = false, leftButton = null, rightButton = null, ...rest }) => {
  return (
    <>
      <Box as='section' pt={40} pb={24} {...rest}>
        <Container>
          <Box maxW='xl' mx='auto' textAlign='center'>
            {!!title && (
              <Heading as='h1' size='xl' fontWeight='semibold'>
                {title}
              </Heading>
            )}
            {!!subtitle && (
              <Text opacity='0.7' fontSize='xl' mt={title ? 6 : 0}>
                {subtitle}
              </Text>
            )}
            {(!!children || !!leftButton || !!rightButton) && (
              <Box mt={(title || subtitle) ? 4 : 0}>
                {leftButton}
                {rightButton}
                {children}
              </Box>
            )}
          </Box>
        </Container>
      </Box>
      {!noBottomBorder && (
        <Divider my={16} />
      )}
    </>
  )
}
export default Hero
