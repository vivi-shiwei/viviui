import React from 'react'
import { Box } from '@chakra-ui/core'
import Title from './title'
import { Container } from '../containerPage'
import GroupCard from './groupCard'

const CardDeck = ({ title, topLeft, groupCard, children, ...props }) => {
  return (
    <Container p='20px' {...props}>
      <Box d='flex' justifyContent='center'>
        {topLeft}
        {!!title && (<Title title={title} />)}
      </Box>
      <Box>
        <GroupCard>
          {groupCard}
        </GroupCard>
      </Box>
      {children}
    </Container>
  )
}

export default CardDeck
