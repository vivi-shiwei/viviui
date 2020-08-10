import React from 'react'
import { Box } from '@chakra-ui/core'

import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'

import Group from '../src/components/group'
import LeftGroupButton from '../src/components/Fieldset/leftFieldsetButton'
import Card from '../src/components/group/card'
import Fieldset from '../src/components/Fieldset'

export default { title: 'Group(vivi hui)' }

export const GroupTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <>
      <Fieldset title='班級' bg='white' left={<LeftGroupButton>新增</LeftGroupButton>} />
      <Group>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Card title='乙班' />
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Card title='乙班' />
          </a>
        </NextLink>
        {
          data.map((item, index) => (
            <>
              <NextLink href='/test' passHref>
                <a onClick={action('button-click')}>
                  <Card key={index} title={item} />
                </a>
              </NextLink>
            </>
          ))
        }
      </Group>
      <Fieldset title='班級' bg='white' left={<LeftGroupButton>新增</LeftGroupButton>} />
      <Group>
        {
          data.map((item, index) => (
            <>
              <NextLink href='/test' passHref>
                <a onClick={action('button-click')}>
                  <Card key={index} title={item} />
                </a>
              </NextLink>
            </>
          ))
        }
      </Group>
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
