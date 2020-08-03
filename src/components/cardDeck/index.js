import React, { Children } from 'react'

import Container from '../container'

import GroupCards from './groupCard'
import Fieldset from './fieldset'
import Card from './card'

// 卡片組
const CardDeck = ({ children, ...props }) => {
  // 創建一個 title 的數組
  const title = []
  // 創建一個 groupCard 的數組
  const groupCard = []

  // 把 Children 裏的數據 map 循環出來
  Children.map(children, (c, i) => {
    switch (c.type) {
      // 查找子集為 Fieldset 類型的數據，并且添加到 title 數組裏。
      case Fieldset:
        title.push(c)
        break
      case Card:
        // 查找子集為 Card 類型的數據，并且添加到 groupCard 數組裏。
        groupCard.push(c)
        break
    }
  })
  return (
    <Container pb={4} maxW='960px' {...props}>
      {title}
      <GroupCards>
        {groupCard}
      </GroupCards>
    </Container>
  )
}

export default CardDeck
