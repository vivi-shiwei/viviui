import React, { useState } from 'react'
import NextLink from 'next/link'
import { action } from '@storybook/addon-actions'

import ModalSelector from '../src/components/modalSelector/index'
import AltRoundButton from '../src/components/modalSelector/squareButton'
import EditButton from '../src/components/modalSelector/editButton'
import ModalSelectorOption from '../src/components/modalSelector/modalSelectorOption'

export default { title: 'ModalSelector(vivi hui)' }

export const ModalSelectorTest = () => {
  const [values, setValues] = useState('cdsj6 2019/2020 Dashboard')

  return (
    <ModalSelector
      modalTitle='Dashboard 選擇'
      value={values}
      onChange={setValues}
      left={
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <AltRoundButton>新增</AltRoundButton>
          </a>
        </NextLink>
      }
      right={
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <EditButton icon='edit' />
          </a>
        </NextLink>
      }
    >
      <NextLink href='/test' passHref>
        <a onClick={action('button-click')}>
          <ModalSelectorOption value='cdsj6 2019/2020 Dashboard'>cdsj6 2019/2020 Dashboard</ModalSelectorOption>
        </a>
      </NextLink>
      <NextLink href='/test' passHref>
        <a onClick={action('button-click')}>
          <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>cdsj6 2020/2021 Dashboard</ModalSelectorOption>
        </a>
      </NextLink>
      <NextLink href='/test' passHref>
        <a onClick={action('button-click')}>
          <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>cdsj6 2021/2022 Dashboard</ModalSelectorOption>
        </a>
      </NextLink>
    </ModalSelector>
  )
}
