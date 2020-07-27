import React from 'react'
import {
  Grid
} from '@chakra-ui/core'
import HeaderContainer from '../container'

const FeatureGrid = ({
  children, // 它的子孫
  gap, // 傳入grid兒子之間的距離
  ...props// 傳入chakra能接受的樣式到Box裏
}) => {
  return (
    <HeaderContainer {...props}>
      {
        (children.length > 4) && (
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
            gap={gap || 8}
            px={{ md: 12 }}
          >
            {children}
          </Grid>
        )
      }
      {
        (children.length <= 4) && (
          <Grid
            templateColumns={{ sm: 'repeat(1, 1fr)', md: `repeat(${(children.length)}, 1fr)` }}
            gap={gap || 8}
            px={{ md: 12 }}
          >
            {children}
          </Grid>
        )
      }

    </HeaderContainer>
  )
}
export default FeatureGrid
