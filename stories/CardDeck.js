import React from 'react'
import { Box } from '@chakra-ui/core'
import CardDeck from '../src/components/cardDeck/index'
import AddButton from '../src/components/cardDeck/AddButton'
import GroupCard from '../src/components/cardDeck/GroupCard'

export default { title: 'CardDeck' }

export const CardDeckTest = ({ ...props }) => {
  const data = ['甲班', '乙班', '丙班', '意甲班', '提升班']
  return (
    <>
      <CardDeck
        title='班级管理'
        topLeft={<AddButton variantColor='red' />}
        cardButtom={
          <GroupCard data={data} />
        }
      />
    </>
  )
}
