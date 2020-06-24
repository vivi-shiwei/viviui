import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import App from '../App'

addDecorator(storyFn => (
  <App>
    {storyFn()}
  </App>
))

addDecorator(withKnobs)
