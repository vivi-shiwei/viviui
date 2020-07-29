import React from 'react'
import HeaderContainer from '../container'
import GroupCards from './groupCard'

const CardDeck = ({ title, topLeft, groupCard, children, ...props }) => {
  return (
    <HeaderContainer pb={4} px={0} maxW='960px' {...props}>
      {title}
      <GroupCards>
        {groupCard}
      </GroupCards>
      {children}
    </HeaderContainer>
  )
}

export default CardDeck
