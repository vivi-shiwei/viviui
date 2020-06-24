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
import { DiGithubBadge } from 'react-icons/di'
import * as Chakra from '@chakra-ui/core'
import * as ReactMdIcons from 'react-icons/md'
import NextLink from 'next/link'
import { Container } from './container'

const Title = ({ title, emphasis }) => {
  return (
    <Heading as='h1' size='xl' fontWeight='semibold'>
      {title}
      <Box as='span' color='teal.500'>
        {' '}
        {emphasis}
      </Box>
    </Heading>
  )
}

const Subtitle = ({ subtitle }) => {
  return (
    <Text opacity='0.7' fontSize='xl' mt='6'>
      {subtitle}
    </Text>
  )
}

const hero = ({ title, subtitle, emphasis, children, ...props }) => {
  return (
    <>
      <Box as='section' pt={40} pb={24}>
        <Container>
          <Box maxW='xl' mx='auto' textAlign='center'>
            <Title title={title} emphasis={emphasis} />
            <Subtitle subtitle={subtitle} />
            <Box mt='4'>
              {children}
            </Box>
          </Box>
        </Container>
      </Box>
      <Divider my={16} />
    </>
  )
}
export default hero

{ /* <NextLink href={props.leftButtonhref} passHref>
                                <Button size="lg" as="a" variantColor="teal" m={2}>
                                    {props.leftButton}
                                </Button>
                            </NextLink>
                            <Button
                                as="a"
                                size="lg"
                                m={2}
                                href={props.rightButtonhref}
                                target="__blank"
                                leftIcon={props => <DiGithubBadge size="1.5em" {...props} />}
                            >
                                {props.rightButton}

                            </Button> */ }
