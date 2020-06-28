import React from 'react'
import { jsx } from '@emotion/core'
import {
  Box,
  Heading,
  Text,
  Grid,
  Divider,
  Flex
} from '@chakra-ui/core'
import { Container } from './container'

export const OddFeature = ({ title, icon, subtitle, ...props }) => {
  return (
    <Box {...props}>
      {!!icon && (
        <Flex
          rounded='full'
          size={12}
          bg='teal.500'
          align='center'
          justify='center'
        >
          <Box size={6} color='white' as={icon} />
        </Flex>
      )}
      {!!title && (
        <Heading as='h2' size='md' fontWeight='semibold' mt='1em' mb='0.5em'>
          {title}
        </Heading>
      )}
      {!!subtitle && (
        <Text>{subtitle}</Text>
      )}
    </Box>
  )
}

export const GridFooter = ({ children, noBottomBorder = false, ...props }) => {
  return (
    <>
      <Container {...props}>
        {children.length > 4 ? (
          <Grid
            templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
            gap={10}
            px={{ md: 12 }}
          >
            {children}
          </Grid>
        ) : (
          <Grid
            templateColumns={{ sm: 'repeat(1, 1fr)', md: `repeat(${(children.length)}, 1fr)` }}
            gap={10}
            px={{ md: 12 }}
          >
            {children}
          </Grid>)}

      </Container>

      {!noBottomBorder && (
        <Divider my={16} />
      )}
    </>
  )
}
