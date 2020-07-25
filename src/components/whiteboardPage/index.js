import React from 'react'
import {
  Button,
  Box
} from '@chakra-ui/core'

import WbgLayout from './wbgLayout'

const WhiteBoard = ({ title, children, ...props }) => {
  console.log(title)
  return (
    <WbgLayout {...props}>
      {title}
      {children}
    </WbgLayout>
  )
}

export default WhiteBoard
