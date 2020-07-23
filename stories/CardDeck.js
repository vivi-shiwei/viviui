import React from 'react'
import CardDeck from '../src/components/cardDeck/index'
import AddButton from '../src/components/cardDeck/addButton'
import Card from '../src/components/cardDeck/card'

export default { title: 'CardDeck' }

export const CardDeckTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <>
      <CardDeck
        title='班级'
        topLeft={<AddButton backgroundColor={{ base: '#63B3ED', md: '#FFCCCC' }} color='white' />}
        groupCard={
          data.map((item, index) => {
            return <> <Card title={item} color='#000000' backgroundColor='white' h='150px' />  </>
          })
        }

      />
    </>
  )
}
