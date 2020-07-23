import React from 'react'
import { Grid } from '@chakra-ui/core'
import { Container } from '../containerPage'
import Cards from './Card'

const GroupCard = ({ data, children, ...props }) => {
  return (
    <>
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={6} m='4rem 10px' {...props}>
        {data.map((item, index) => {
          return <><Cards title={item} /></>
        }
        )}
      </Grid>
    </>

  )
}

export default GroupCard
