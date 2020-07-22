import React from 'react'
import {
  Grid,
  Divider
} from '@chakra-ui/core'
import { Container } from '../containerPage'

const FeatureGrid = ({ children, gap, ...props }) => {
  return (
    <Container {...props}>
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

    </Container>
  )
}
export default FeatureGrid
