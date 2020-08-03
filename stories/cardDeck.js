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
      <CardDeck>
        <Fieldset title='班級' bg='white' left={<RoundedButton>新增</RoundedButton>} />
        <Card title='乙班' />
        <Card title='乙班' />
        {
          data.map((item, index) => (
            <Card key={index} title={item} />
          ))
        }
      </CardDeck>

      <CardDeck>
        <Fieldset title='班級' bg='white' left={<RoundedButton>新增</RoundedButton>} />
        {
          data.map((item, index) => (
            <Card key={index} title={item} />
          ))
        }
      </CardDeck>
      {/* <CardDeck
        title='班级'
        topLeft={<RoundedButton>新增</RoundedButton>}
        groupCard={
          data.map((item, index) => (<Card key={index} title={item} />))
        }
      /> */}
    </>
  )
}
