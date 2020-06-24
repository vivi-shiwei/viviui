/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import {
  Box,
  Heading,
  Text,
  Button,
  Grid,
  Divider,
  Flex,
  Stack,
  Link
} from '@chakra-ui/core'
import { MdAccessibility, MdPalette, MdGrain, MdEmail } from 'react-icons/md'
import * as Chakra from '@chakra-ui/core'
import * as ReactMdIcons from 'react-icons/md'
import { Container } from './container'

const Feature = ({ title, icon, children, ...props }) => {
  return (
    <Box {...props}>
      <Flex
        rounded='full'
        size={12}
        bg='teal.500'
        align='center'
        justify='center'
      >
        <Box size={6} color='white' as={icon} />
      </Flex>
      <Heading as='h2' size='md' fontWeight='semibold' mt='1em' mb='0.5em'>
        {title}
      </Heading>
      <Text>{children}</Text>
    </Box>
  )
}

export default () => {
  return (
    <>
      <Container>
        <Grid
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={10}
          px={{ md: 12 }}
        >
          <Feature icon={MdAccessibility} title='Accessible'>
            Chakra UI strictly follows WAI-ARIA standards. All components come
            with proper attributes and keyboard interactions out of the box.
                    </Feature>
          <Feature icon={MdPalette} title='Themeable'>
            Quickly and easily reference values from your theme throughout your
            entire application, on any component.
                    </Feature>
          <Feature icon={MdGrain} title='Composable'>
            Components were built with composition in mind. You can leverage any
            component to create new things.
                    </Feature>
        </Grid>
      </Container>

      <Divider my={16} />
    </>
  )
}
