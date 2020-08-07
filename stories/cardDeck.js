import React from 'react'
import CardDeck from '../src/components/group/index'
import LeftGroupButton from '../src/components/Fieldset/leftFieldsetButton'
import Card from '../src/components/group/card'
import Fieldset from '../src/components/Fieldset'

export default { title: 'CardDeckGroup(vivi hui)' }

export const CardDeckGroupTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <>
      <Fieldset title='班級' bg='white' left={<LeftGroupButton>新增</LeftGroupButton>} />
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
        <Fieldset title='班級' bg='white' left={<LeftGroupButton>新增</LeftGroupButton>} />
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
