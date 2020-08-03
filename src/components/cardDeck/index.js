import React, { Children } from 'react'

import HeaderContainer from '../container'

import GroupCards from './groupCard'
import Fieldset from './fieldset'
import Card from './card'

const CardDeck = ({ children, ...props }) => {
  const title = []
  const groupCard = []

  Children.map(children, (c, i) => {
    switch (c.type) {
      case Fieldset:
        title.push(c)
        break
      case Card:
        groupCard.push(c)
        break
    }
  })
  return (
    <HeaderContainer pb={4} px={0} maxW='960px' {...props}>
      {title}
      <GroupCards>
        {groupCard}
      </GroupCards>
    </HeaderContainer>
  )
}

export default CardDeck
