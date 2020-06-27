import React from 'react'
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Stack
} from '@chakra-ui/core'
import Logo from './logo'
import GitHubButton from './GitHubButton'
import {
  Header as HeaderContainer,
  GithubLink,
  StorybookLink
} from './DocsHeader'
import SponsorButton from './SponsorButton'
import { DiGithubBadge } from 'react-icons/di'
import { Container } from './container'
import { StorybookIcon } from './storybook-icon'
import { MdAccessibility, MdPalette, MdGrain } from 'react-icons/md'

const { colorMode, toggleColorMode } = useColorMode()

export const RightButton = ({ sponsorBut, githubLin, storybookLin, nocolorMode = false }) => {
  return (
    <Flex
      flex={{ sm: '1', md: 'none' }}
      ml={5}
      align='center'
      color='gray.500'
      justify='flex-end'
    >
      {!!sponsorBut && (<SponsorButton mr='4' />)}
      <Stack align='center' isInline spacing='3'>
        {!!githubLin && <GithubLink />}
        {!!storybookLin && <StorybookLink />}
      </Stack>
      {!nocolorMode && (
        <IconButton
          aria-label={`Switch to ${
                colorMode === 'light' ? 'dark' : 'light'
          } mode`}
          variant='ghost'
          color='current'
          ml='2'
          fontSize='20px'
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? 'moon' : 'sun'}
        />)}
    </Flex>
  )
}

export const LeftButton = ({ gitHubButton, logi }) => {
  return (
    <Box display='flex' alignItems='center'>
      {!!logi && <Logo ico={MdAccessibility} text='chakra' />}
      <Box ml='5' mb='-8px' display={['none', 'flex']}>
        {!!gitHubButton && <GitHubButton name='Star' />}
      </Box>
    </Box>
  )
}

export const Header = ({ children, ...props }) => {
  const bg = { light: 'white', dark: 'gray.800' }
  return (
    <HeaderContainer bg={bg[colorMode]} {...props}>
      <Container h='100%'>
        <Flex
          size='100%'
          px={['0', '0', '6']}
          align='center'
          justify='space-between'
        >
          {children}
        </Flex>
      </Container>
    </HeaderContainer>
  )
}
