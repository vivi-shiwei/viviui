import React from 'react'
import CardDeck from '../src/components/cardDeck/index'
import AddButton from '../src/components/cardDeck/addButton'
import Card from '../src/components/cardDeck/card'

export default { title: 'CardDeckGroup' }

export const CardDeckTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  const one = ['甲班']
  const two = ['乙班', '丙班']
  const three = ['甲班', '乙班', '丙班']
  return (
    <>
      <CardDeck
        title='班级'
        topLeft={<AddButton variantColor='blue'>新增</AddButton>}
        groupCard={
          data.map((item, index) => {
            return <> <Card title={item} color='#000000' backgroundColor='white' h='150px' />  </>
          })
        }
      />
    </>
  )
}
