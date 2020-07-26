import React from 'react'
import CardDeck from '../src/components/cardDeck/index'
import AddButton from '../src/components/cardDeck/addButton'
import Card from '../src/components/cardDeck/cards'
import Fieldset from '../src/components/cardDeck/fieldset'

export default { title: 'CardDeckGroup' }

export const CardDeckTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  const one = ['甲班']
  const two = ['乙班', '丙班']
  const three = ['甲班', '乙班', '丙班']
  return (
    <>
      <CardDeck
        title={<Fieldset title='班級' topLeft={<AddButton>新增</AddButton>} />}
        topLeft={<AddButton>新增</AddButton>}
        groupCard={
          data.map((item, index) => {
            return <> <Card title={item} />  </>
          })
        }
      />
      <CardDeck
        title='班级'
        topLeft={<AddButton>新增</AddButton>}
        groupCard={
          data.map((item, index) => {
            return <> <Card title={item} />  </>
          })
        }
      >
        <AddButton>新增</AddButton>
      </CardDeck>
    </>
  )
}
