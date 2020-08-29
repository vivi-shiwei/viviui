import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Box, Link, Button } from '@chakra-ui/core'

import ButtonGrid from '../src/components/fullScreenView/buttonGrid'
// import AddminBatchAdd from '../src/components/adminBatchAdd'
import { BlueButton } from '../src/index'
import { FullScreenView } from '../src/index'

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
                <BlueButton>{item.name}</BlueButton>
              </>
            )
          })
        }
      </ButtonGrid>
    </FullScreenView>
  )
}
