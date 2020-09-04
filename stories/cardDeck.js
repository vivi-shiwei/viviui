import React from 'react'
import { Box } from '@chakra-ui/core'

import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'

import Group from '../src/components/cardGroup'
import Card from '../src/components/cardGroup/card'

export default { title: 'Group(vivi hui)' }

export const GroupTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <>
      <Group>
        <NextLink href='/test' passHref>
          {/* <a onClick={action('button-click')}> */}
          <Card title='乙班' />
          {/* </a> */}
        </NextLink>
        <NextLink href='/test' passHref>
          {/* <a onClick={action('button-click')}> */}
          <Card title='乙班' />
          {/* </a> */}
        </NextLink>
        {
          data.map((item, index) => (
            <>
              <NextLink href='/test' key={index} passHref>
                {/* <a onClick={action('button-click')}> */}
                <Card title={item} />
                {/* </a> */}
              </NextLink>
            </>
          ))
        }
      </Group>
      <Group>
        {
          data.map((item, index) => (
            <>
              <NextLink href='/test' key={index} passHref>
                {/* <a onClick={action('button-click')}> */}
                <Card title={item} />
                {/* </a> */}
              </NextLink>
            </>
          ))
        }
      </Group>
    </>
  )
}
export const OneGroup = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <>
      <Card title='甲班' />
    </>
  )
}
