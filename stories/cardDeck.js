import React from 'react'
import CardDeck from '../src/components/group/index'
import RoundedButton from '../src/components/group/leftGroupButton'
import Card from '../src/components/group/card'
import Fieldset from '../src/components/Fieldset'

export default { title: 'CardDeckGroup(vivi hui)' }

export const CardDeckGroupTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <>
      <Fieldset title='班級' bg='white' left={<RoundedButton>新增</RoundedButton>} />
      <CardDeck>
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
