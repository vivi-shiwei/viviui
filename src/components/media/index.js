import React, { memo, Children } from 'react'
import {
  Flex
} from '@chakra-ui/core'

import MediaCenter from './mediaCenter'
import MediaLeft from './mediaLeft'
import MediaRight from './mediaRight'

const Media = ({ center = null, children, ...props }) => {
  let left = null
  let mecenter = null
  let right = null
  const chil = []

  Children.map(children, (c, i) => {
    switch (c.type) {
      case MediaCenter:
        mecenter = c // 自定義logo
        break
      case MediaLeft:
        left = c // Header左邊列表
        break
      case MediaRight:
        right = c // Header 中間列表
        break
      default:
        chil.push(c)
    }
  })
  return (
    <Flex
      {...props}
    >
      {left}
      {mecenter}
      {right}
      {chil}
    </Flex>
  )
}

export default memo(Media)
