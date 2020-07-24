import React from 'react'
import { Container } from '../containerPage'
import GroupCards from './groupCard'

const CardDeck = ({ title, topLeft, groupCard, children, ...props }) => {
  return (
    <Container pb={4} px={0} maxW='960px' {...props}>
      {title}
      <GroupCards>
        {groupCard}
      </GroupCards>
      {children}
    </Container>
  )
}

export default CardDeck
