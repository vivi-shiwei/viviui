import React from 'react'
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Stack,
  ButtonGroup,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Heading
} from '@chakra-ui/core'
import GitHubButton from './GitHubButton'
import {
  Header as HeaderContainer,
  GithubLink,
  StorybookLink
} from './DocsHeader'
import { Container } from './container'

const Logo = (props) => (
  <Box as='a' href='#'>
    {props.icon}
  </Box>
)
const Header = ({ left, right, text, logo, children, ...props }) => {
  return (
    <HeaderContainer {...props} bg='white'>
      <Container
        h='100%'
        height='4rem'
      >
        <Flex size='100%' px={{ base: 0, sm: 2, md: 4 }} align='center' justify='space-between'>
          <Box display='flex' alignItems='center'>
            {!!logo && <Logo icon={logo} />}
            {!!left && (
              <Heading as='h1' size='lg' letterSpacing='-.1rem' my='auto'>
                <Box as='span' ml='3'>
                  {left}
                </Box>
              </Heading>
            )}
          </Box>
          <Flex>
            {children}
          </Flex>
          {!!right && (
            <Flex
              flex={{ sm: '1', md: 'none' }}
              ml={5}
              align='center'
              justify='flex-end'
            >
              {right}
            </Flex>
          )}
        </Flex>
      </Container>
    </HeaderContainer>
  )
}

export default Header
