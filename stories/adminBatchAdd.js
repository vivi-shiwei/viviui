import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Box, Link, Button } from '@chakra-ui/core'

import Container from '../src/components/container'
import AddminBatchAdd from '../src/components/adminBatchAdd'
import NewButton from '../src/components/adminBatchAdd/newButton'

export default { title: 'showLing' }

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
    <>
      <Container mt='30px'>
        <AddminBatchAdd
          title='批量新增'
          body={
            data.map((item, index) => {
              return (
                <>
                  <NextLink
                    href='#'
                    as='#'
                    key={index}
                  >
                    <Link _hover={{ textDecoration: 'none' }} m={1}>
                      <NewButton>{item.name}</NewButton>
                    </Link>
                  </NextLink>
                </>
              )
            })

          }
        />
      </Container>
    </>
  )
}
