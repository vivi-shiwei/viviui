import React from 'react'
import { ThemeProvider, CSSReset, theme, ColorModeProvider, Box, useColorMode, IconButton } from '@chakra-ui/core'
import { boolean } from '@storybook/addon-knobs'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      variant='ghost'
      color='current'
      ml='2'
      fontSize='20px'
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? 'moon' : 'sun'}
    />
  )
}

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value={boolean('Dark mode', false) ? 'dark' : 'light'}>
        <CSSReset />
        <Box background='red'>
          <ColorModeSwitch />
        </Box>
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
