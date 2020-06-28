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
import { MdAccessibility, MdPalette, MdGrain } from 'react-icons/md'

export const RightButton = ({ sponsorButton, githubLink, storybookLink, nocolorMode = false, children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
      flex={{ sm: '1', md: 'none' }}
      ml={5}
      align='center'
      color='gray.500'
      justify='flex-end'
    >
      {children}
      {!!sponsorButton && (<SponsorButton mr='4' />)}
      {(!!githubLink || !!storybookLink) && (
        <Stack align='center' isInline spacing='3'>
          <GithubLink icon={githubLink} />
          <StorybookLink icon={storybookLink} />
        </Stack>
      )}
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

export const LeftButton = ({ gitHubButton, children }) => {
  return (
    <Box display='flex' alignItems='center'>
      {children}
      {!!gitHubButton && (
        <Box ml='5' mb='-8px' display={['none', 'flex']}>
          <GitHubButton name='Star' />
        </Box>
      )}
    </Box>
  )
}

export const Header = ({ children, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()
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
