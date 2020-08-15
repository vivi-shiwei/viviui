import React, { useState, useEffect } from 'react'
import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'

import ButtonGrid from '../src/components/fullScreenView/buttonGrid'
import { BlueButton, FullScreenView } from '../src/index'

export default { title: 'showLing(hui)' }

export const SearchTest = () => {
  const data = [
    {
      href: '',
      name: '批量新增用戶',
      as: 'sdfs'
    },
    {
      href: '',
      name: '批量新增班級',
      as: 'sdfs'
    },
    {
      href: '',
      name: '批量新增用戶圖片',
      as: 'sdfs'
    },

    {
      href: '',
      name: '批量新增班級成員',
      as: 'sdfs'
    }
  ]
  return (
    <FullScreenView>
      <ButtonGrid>
        {
          data.map((item, index) => {
            return (
              <>
                <NextLink href='/test' passHref>
                  <a onClick={action('button-click')}>
                    <BlueButton>{item.name}</BlueButton>
                  </a>
                </NextLink>
              </>
            )
          })
        }
      </ButtonGrid>
    </FullScreenView>
  )
}
