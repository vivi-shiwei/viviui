import React from 'react'
import CardDeck from '../src/components/cardDeck/index'
import RoundedButton from '../src/components/cardDeck/roundedButton'
import Card from '../src/components/cardDeck/card'
import Fieldset from '../src/components/cardDeck/fieldset'

export default { title: 'CardDeckGroup' }

export const CardDeckGroupTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <>
      <CardDeck
        title={<Fieldset title='班級' topLeft={<RoundedButton>新增</RoundedButton>} />}
        groupCard={
          data.map((item, index) => (
            <Card key={index} title={item} />
          ))
        }
      />
      <CardDeck
        title='班级'
        topLeft={<RoundedButton>新增</RoundedButton>}
        groupCard={
          data.map((item, index) => (<Card key={index} title={item} />))
        }
      />
    </>
  )
}
