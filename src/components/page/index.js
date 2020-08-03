import React from 'react'
import {
  Box,
  Divider
} from '@chakra-ui/core'

import WbgPage from './wbgPage'

const WhiteBoard = ({ title, backurl, nodivider = false, children, ...props }) => {
  return (
    <WbgPage backurl={backurl} title={title} nodivider={nodivider} {...props}>
      {children}
    </WbgPage>
  )
}

export default WhiteBoard
