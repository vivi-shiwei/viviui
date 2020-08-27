import React, { memo, Children } from 'react'
import {
  Flex
} from '@chakra-ui/core'

import MediaCenter from './mediaCenter'
import MediaLeft from './mediaLeft'
import MediaRight from './mediaRight'

const Media = ({ children, ...props }) => {
  let left = null
  let center = null
  let right = null
  let cli = []

  Children.map(children, (c, i) => {
    switch (c.type) {
      case MediaCenter:
        center = c // 自定義logo
        break
      case MediaLeft:
        left = c // Header左邊列表
        break
      case MediaRight:
        right = c // Header 中間列表
        break
      default:
        cli.push(c)
    }
  })
  return (
    <Flex
      {...props}
    >
      {left}
      {center}
      {right}
      {children}
    </Flex>
  )
}

export default memo(Media)
