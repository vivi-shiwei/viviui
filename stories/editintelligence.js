
import React from 'react'
import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'

import Intelligence from '../src/components/editShow'
import DeleteIcon from '../src/components/editShow/deleteIcon'
import ConfirmButton from '../src/components/editShow/confirmButton'
import CancelButton from '../src/components/editShow/cancelButton'
import EditTable from '../src/components/editShow/editTable'

export default {
  title: 'EditIntelligenceOne(hui)'
}

export const EditIntelligenceTest = () => {
  return (
    <>
      <Intelligence>

        <EditTable value='jfiekj' color='#CC6600' />
        <EditTable value='jfiekj' color='#99CC33' />
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <DeleteIcon onClick={() => { console.log('杰克') }} />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <ConfirmButton> 确认</ConfirmButton>
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <CancelButton>取消</CancelButton>
          </a>
        </NextLink>
      </Intelligence>
    </>
  )
}
