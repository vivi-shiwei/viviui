import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme,
  ColorModeProvider,
  useColorMode
} from '@chakra-ui/core'
import { button } from '@storybook/addon-knobs'

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode()

  const label = 'Switch color mode'
  const handler = () => toggleColorMode()
  button(label, handler)
  return null
}

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme.colors}>
      <ColorModeProvider>
        <CSSReset />
        <ColorModeSwitch />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
