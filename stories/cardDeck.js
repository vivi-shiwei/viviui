import React from 'react'
import CardDeck from '../src/components/cardDeck/index'
import AddButton from '../src/components/cardDeck/roundedButton'
import Card from '../src/components/cardDeck/card'
import Fieldset from '../src/components/cardDeck/fieldset'

export default { title: 'CardDeckGroup' }

export const CardDeckGroupTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']

  return (
    <CardDeck
      bg='#EBF8FF'
      title={<Fieldset title='班級' topLeft={<AddButton>新增</AddButton>} bg='#EBF8FF' />}
      groupCard={
        data.map((item, index) => (
          <Card key={index} title={item} />
        ))
      }
    />
  )
}
export const CardDeckOneButtonTest = () => {
  return (
    <CardDeck
      bg='#EBF8FF'
      title={<Fieldset title='班級' topLeft={<AddButton>新增</AddButton>} bg='#EBF8FF' />}
      groupCard={
        <Card title='戊班' />
      }
    />
  )
}
export const CardDeckOneNoButtonTest = () => {
  return (
    <CardDeck
      bg='#EBF8FF'
      title={<Fieldset title='中學第六校' bg='#EBF8FF' />}
      groupCard={
        <>
          <Card title='相薄' />
          <Card title='智能統計分析' />
        </>
      }
    />
  )
}
