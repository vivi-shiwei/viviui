import React from 'react'
import { Grid } from '@chakra-ui/core'
import { Container } from '../containerPage'
import Cards from './Card'

const GroupCard = ({ data, children, ...props }) => {
  return (
    <>
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={6} m='4rem 10px' {...props}>
<<<<<<< HEAD
        {data.map((items, index) = >
           return<Cards title={items} />
=======
        {data.map((item, index) => {
          return <><Cards title={item} /></>
        }
>>>>>>> f8235c7ee443198a979c76cd0fe94636b4389cff
        )}
      </Grid>
    </>

  )
}

export default GroupCard
