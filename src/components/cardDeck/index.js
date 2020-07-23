import React from 'react'
import { Box } from '@chakra-ui/core'
import Title from './title'
import { Container } from '../containerPage'

const CardDeck = ({ title, topLeft, cardButtom, chidren, ...props }) => {
  return (
    <Container p='20px' {...props}>
      <Box d='flex' justifyContent='center'>
        {topLeft}
        {!!title && (<Title title={title} />)}
      </Box>
      <Box>
        {cardButtom}
      </Box>
    </Container>
  )
}

export default CardDeck
