import React, { memo, Children } from 'react'
import {
  Flex
} from '@chakra-ui/core'

import MediaCenter from './mediaContent'
import MediaLeft from './mediaLeft'
import MediaRight from './mediaRight'

const Media = ({ center = null, left = null, right = null, children, ...props }) => {
  let meleft = null
  let mecenter = null
  let meright = null

  Children.map(children, (c, i) => {
    switch (c.type) {
      case MediaCenter:
        mecenter = c // 自定義logo
        break
      case MediaLeft:
        meleft = c // Header左邊列表
        break
      case MediaRight:
        meright = c // Header 中間列表
        break
    }
  })
  return (
    <>
      {(!center && !left && !right) && (
        <Flex
          {...props}
        >
          {meleft}
          {mecenter}
          {meright}
        </Flex>
      )}
      {
        center && (
          <Flex
            mx='auto'
            {...props}
          >
            {meleft}
            {mecenter}
            {meright}
          </Flex>
        )
      }
      {
        left && (
          <Flex
            mr='auto'
            {...props}
          >
            {meleft}
            {mecenter}
            {meright}
          </Flex>
        )
      }
      {
        right && (
          <Flex
            ml='auto'
            {...props}
          >
            {meleft}
            {mecenter}
            {meright}
          </Flex>
        )
      }
    </>
  )
}

export default Media
