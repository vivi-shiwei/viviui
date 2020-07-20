import React from 'react'
import {
  Box,
  Heading,
  Text,
  Grid,
  Divider,
  Flex
} from '@chakra-ui/core'
import { Container } from '../containerPage'

export const OddFeature = ({ title, icon, subtitle, children, ...props }) => {
  return (
    <Box {...props}>
      {!!icon && (
        <Flex
          rounded='full'
          size={12}
          bg='blue.500'
          align='center'
          justify='center'
        >
          {icon || (<Box size={6} color='white' as={icon} />)}
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
      {children}
    </Box>
  )
}

export const GridFooter = ({ children, noBottomBorder = false, gap, ...props }) => {
  return (
    <>
      <Container {...props}>
        {
          (children.length > 4) && (
            <Grid
              templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
              gap={gap || 8}
              px={{ md: 12 }}
            >
              {children}
            </Grid>
          )
        }
        {
          (children.length <= 4) && (
            <Grid
              templateColumns={{ sm: 'repeat(1, 1fr)', md: `repeat(${(children.length)}, 1fr)` }}
              gap={gap || 8}
              px={{ md: 12 }}
            >
              {children}
            </Grid>
          )
        }

      </Container>

      {!noBottomBorder && (
        <Divider my={16} />
      )}
    </>
  )
}
