import React from 'react'
import { Box } from '@chakra-ui/core'
import Title from './title'

const CardDeck = ({ title, topLeft, cardButtom, chidren, ...props }) => {
  return (
    <Box maxW='960px' mx='auto' p='20px' {...props}>
      {/* <Title title={title} /> */}
      <Box d='flex' justifyContent='center'>
        {topLeft}
        {!!title && (<Title title={title} />)}
      </Box>
      <Box>
        {cardButtom}
      </Box>
    </Box>
  )
}

export default CardDeck
