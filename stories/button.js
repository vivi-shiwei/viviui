import React from 'react'
import {
  Button
} from '@chakra-ui/core'

import { action } from '@storybook/addon-actions'

export default {
  title: 'Button'
}

export const CenterButtonOne = () => {
  return (
    <Button title='Submit' onClick={action('button-click')}>按鈕</Button>
  )
}
