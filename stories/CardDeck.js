import React from 'react'
import { Box } from '@chakra-ui/core'
import CardDeck from '../src/components/cardDeck/index'
import AddButton from '../src/components/cardDeck/AddButton'
import GroupCard from '../src/components/cardDeck/GroupCard'
import Card from '../src/components/cardDeck/Card'

export default { title: 'CardDeck' }

export const CardDeckTest = ({ ...props }) => {
  return (
    <>
      <CardDeck
        title='班级管理'
        topLeft={<AddButton variantColor='red' />}
        cardButtom={
          <GroupCard>
            <Card />
            <Card />
            <Card />
            <Card />
          </GroupCard>
        }
      />
    </>
  )
}
