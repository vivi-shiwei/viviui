import React from 'react'
import CardDeck from '../src/components/card/index'
import AddButton from '../src/components/card/addButton'
import Card from '../src/components/card/cards'
import Fieldset from '../src/components/card/fieldset'

export default { title: 'CardDeckGroup' }

export const CardDeckTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <>
      <CardDeck
        title={<Fieldset title='班級' topLeft={<AddButton>新增</AddButton>} />}
        topLeft={<AddButton>新增</AddButton>}
        groupCard={
          data.map((item, index) => {
            return <> <Card title={item} color='#000000' backgroundColor='white' h='150px' />  </>
          })
        }
      />
      <CardDeck
        title='班级'
        topLeft={<AddButton>新增</AddButton>}
        groupCard={
          data.map((item, index) => {
            return <> <Card title={item} color='#000000' backgroundColor='white' h='150px' />  </>
          })
        }
      />
    </>
  )
}
