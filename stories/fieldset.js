import React from 'react'
import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'
import LeftFieldset from '../src/components/Fieldset/leftFieldset'
import RightFieldset from '../src/components/Fieldset/rightFieldset'
import FieldsetHeader from '../src/components/Fieldset/fieldsetHeader'
import Fieldset from '../src/components/Fieldset'

export default { title: 'Fieldset(vivi)' }

export const Fieldsetsure = () => {
  return (
    <>
      <Fieldset
        title='班級'
        bg='white'
      // left={
      //   <NextLink href='/test' passHref>
      //     <a onClick={action('button-click')}>
      //       <LeftGroupButton>新增</LeftGroupButton>
      //     </a>
      //   </NextLink>
      // }
      // right={
      //   <NextLink href='/test' passHref>
      //     <a onClick={action('button-click')}>
      //       <RightGroupButton>新增</RightGroupButton>
      //     </a>
      //   </NextLink>
      // }
      >
        <LeftFieldset>新增</LeftFieldset>
        <FieldsetHeader>班级</FieldsetHeader>
        <RightFieldset>新增</RightFieldset>
      </Fieldset>
    </>
  )
}

export const LeftFieldsest = () => {
  return (
    <>
      <Fieldset
        title='班級'
        bg='white'
        left={
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <LeftFieldset>新增</LeftFieldset>
            </a>
          </NextLink>
        }
      />
    </>
  )
}

export const RightFieldsets = () => {
  return (
    <>
      <Fieldset
        title='班級'
        bg='white'
        right={
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <RightFieldset>新增</RightFieldset>
            </a>
          </NextLink>
        }
      />
    </>
  )
}
