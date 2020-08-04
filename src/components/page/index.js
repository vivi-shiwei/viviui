import React, { Children } from 'react'
import {
  Box,
  Divider
} from '@chakra-ui/core'

import WbgPage from './wbgPage'
import HeaderPage from './headerPage'

const WhiteBoard = ({ backurl, nodivider = false, children, ...props }) => {
  const title = []
  const chil = []

  Children.map(children, (c, i) => {
    switch (c.type) {
      case HeaderPage:
        title.push(c) // 自定義logo
        break
      default:
        chil.push(c)
    }
  })

  return (
    <WbgPage backurl={backurl} title={title} nodivider={nodivider} {...props}>
      {chil}
    </WbgPage>
  )
}

export default WhiteBoard
