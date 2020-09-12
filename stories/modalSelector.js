import React, { useState } from 'react'
import NextLink from 'next/link'
import { IconButton, Button } from '@chakra-ui/core'
import { action } from '@storybook/addon-actions'

import ModalSelector from '../src/components/modalSelector/index'
import ModalSelectorOption from '../src/components/modalSelector/modalSelectorOption'
import Media from '../src/components/media'
import MediaCenter from '../src/components/media/mediaContent'
import MediaLeft from '../src/components/media/mediaLeft'
import MediaRight from '../src/components/media/mediaRight'

export default { title: 'Media(vivi)' }

export const CenterMedia = () => {
  const [values, setValues] = useState('cdsj6 2019/2020 Dashboard')

  return (
    <Media maxW='500px' center>
      <MediaLeft>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Button>新增</Button>
          </a>
        </NextLink>
      </MediaLeft>
      <MediaCenter>
        <ModalSelector
          w='100%'
          modalTitle='Dashboard 選擇'
          value={values}
          onChange={setValues}
        >
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2019/2020 Dashboard'>cdsj6 2019/2020 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>cdsj6 2020/2021 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>cdsj6 2021/2022 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
        </ModalSelector>
      </MediaCenter>
      <MediaRight>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <IconButton icon='edit' />
          </a>
        </NextLink>
      </MediaRight>
    </Media>
  )
}

export const LeftMedia = () => {
  const [values, setValues] = useState('cdsj6 2019/2020 Dashboard')

  return (
    <Media maxW='500px' left>
      <MediaLeft>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Button>新增</Button>
          </a>
        </NextLink>
      </MediaLeft>
      <MediaCenter>
        <ModalSelector
          w='100%'
          modalTitle='Dashboard 選擇'
          value={values}
          onChange={setValues}
        >
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2019/2020 Dashboard'>cdsj6 2019/2020 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>cdsj6 2020/2021 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>cdsj6 2021/2022 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
        </ModalSelector>
      </MediaCenter>
      <MediaRight>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <IconButton icon='edit' />
          </a>
        </NextLink>
      </MediaRight>
    </Media>
  )
}

export const RightMedia = () => {
  const [values, setValues] = useState('cdsj6 2019/2020 Dashboard')

  return (
    <Media maxW='500px' right>
      <MediaLeft>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Button>新增</Button>
          </a>
        </NextLink>
      </MediaLeft>
      <MediaCenter>
        <ModalSelector
          w='100%'
          modalTitle='Dashboard 選擇'
          value={values}
          onChange={setValues}
        >
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2019/2020 Dashboard'>cdsj6 2019/2020 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>cdsj6 2020/2021 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>cdsj6 2021/2022 Dashboard</ModalSelectorOption>
            </a>
          </NextLink>
        </ModalSelector>
      </MediaCenter>
      <MediaRight>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <IconButton icon='edit' />
          </a>
        </NextLink>
      </MediaRight>
    </Media>
  )
}
