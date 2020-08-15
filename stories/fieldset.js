import React from 'react'
import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'
import LeftGroupButton from '../src/components/Fieldset/leftFieldsetButton'
import RightGroupButton from '../src/components/Fieldset/rightFieldsetButton'
import Fieldset from '../src/components/Fieldset'

export default { title: 'Fieldset(vivi)' }

export const Fieldsetsure = () => {
  return (
    <>
      <Fieldset
        title='班級'
        bg='white'
        left={
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <LeftGroupButton>新增</LeftGroupButton>
            </a>
          </NextLink>
        }
        right={
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <RightGroupButton>新增</RightGroupButton>
            </a>
          </NextLink>
        }
      />
    </>
  )
}

export const LeftFieldset = () => {
  return (
    <>
      <Fieldset
        title='班級'
        bg='white'
        left={
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <LeftGroupButton>新增</LeftGroupButton>
            </a>
          </NextLink>
        }
      />
    </>
  )
}

export const RightFieldset = () => {
  return (
    <>
      <Fieldset
        title='班級'
        bg='white'
        right={
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <RightGroupButton>新增</RightGroupButton>
            </a>
          </NextLink>
        }
      />
    </>
  )
}
