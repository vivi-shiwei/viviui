import React from 'react'
import { Grid } from '@chakra-ui/core'
import Cards from './card'

const GroupCard = ({ data, children, ...props }) => {
  return (
    <>
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={6} m='4rem 10px' {...props}>
        {!!data && data.map((item, index) => {
          return <><Cards title={item} /></>
        }
        )}
        {children}
      </Grid>
    </>

  )
}


export default GroupCard
