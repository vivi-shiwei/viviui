import React from 'react'
import Hero from '../src/components/hero'
import { DiGithubBadge } from 'react-icons/di'
import {
  Box,
  Heading,
  Text,
  Button,
  Grid,
  Divider,
  Flex,
  Stack,
  Link,
  useColorMode,
  IconButton
} from '@chakra-ui/core'
import NextLink from 'next/link'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Hero'
}

export const withAButton = () => (
  <button disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello Storybook')}
  </button>
)

export const withHero = () => {
  return (
    <Hero
      title='Build accessible React apps & websites'
      emphasis='with speed'
      subtitle='Chakra UI is a simple, modular and accessible component library that gives you all the building blocks you need to build your React applications.'
    >
      <NextLink href='/getting-started' passHref>
        <Button size='lg' as='a' variantColor='teal' m={2}>
          Get Started
        </Button>
      </NextLink>
      <Button
        as='a'
        size='lg'
        m={2}
        href='https://github.com/chakra-ui/chakra-ui/'
        target='__blank'
        leftIcon={props => <DiGithubBadge size='1.5em' {...props} />}
      >
        GitHub
      </Button>
    </Hero>
  )
}
