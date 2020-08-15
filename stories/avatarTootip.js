import React from 'react'

import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'

import { Button } from '@chakra-ui/core'

import AvatarTooltip from '../src/components/avatarTooltip'
import EditButton from '../src/components/avatarTooltip/editButton'
import ToolTip from '../src/components/avatarTooltipGroup/toolTips'
import Avatars from '../src/components/avatarTooltipGroup/avatars'
import Row from '../src/components/avatarTooltipGroup'

import MyImage from '../static/QQ20200518181405.jpg'

export default { title: 'AvatarTootip(vivi)' }

export const ClsMember = () => {
  return (
    <AvatarTooltip
      right={<EditButton>编辑成员</EditButton>}
      left={
        <Row>
          <ToolTip name='vivi2'>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <Avatars profilePhotoSrc={MyImage} />
              </a>
            </NextLink>
          </ToolTip>
          <ToolTip name='vivi2'>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <Avatars profilePhotoSrc={MyImage} />
              </a>
            </NextLink>
          </ToolTip>
          <ToolTip name='vivi2'>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <Avatars />
              </a>
            </NextLink>
          </ToolTip>
          <ToolTip name='vivi2'>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <Avatars profilePhotoSrc={MyImage} />
              </a>
            </NextLink>
          </ToolTip>
        </Row>
      }
    />
  )
}

export const Avatart = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <Row>
      <ToolTip name='vivi2'>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Avatars profilePhotoSrc={MyImage} />
          </a>
        </NextLink>
      </ToolTip>
      <ToolTip name='vivi2'>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Avatars profilePhotoSrc={MyImage} />
          </a>
        </NextLink>
      </ToolTip>
      <ToolTip name='vivi2'>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Avatars />
          </a>
        </NextLink>
      </ToolTip>
      <NextLink href='/test' passHref>
        <a onClick={action('button-click')}>
          <Avatars profilePhotoSrc={MyImage} />
        </a>
      </NextLink>
      <ToolTip name='vivi2'>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Avatars profilePhotoSrc={MyImage} />
          </a>
        </NextLink>
      </ToolTip>
      <ToolTip name='vivi2'>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Avatars profilePhotoSrc={MyImage} />
          </a>
        </NextLink>
      </ToolTip>
      <ToolTip name='vivi2'>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Avatars profilePhotoSrc={MyImage} />
          </a>
        </NextLink>
      </ToolTip>
      <ToolTip name='vivi2'>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Avatars profilePhotoSrc={MyImage} />
          </a>
        </NextLink>
      </ToolTip>
      <ToolTip name='vivi2'>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Avatars profilePhotoSrc={MyImage} />
          </a>
        </NextLink>
      </ToolTip>
      <ToolTip name='vivi2'>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Avatars profilePhotoSrc={MyImage} />
          </a>
        </NextLink>
      </ToolTip>
      <ToolTip name='vivi2'>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <Avatars profilePhotoSrc={MyImage} />
          </a>
        </NextLink>
      </ToolTip>
    </Row>
  )
}

export const buttonTip = () => {
  return (
    <ToolTip name='vivi2'>
      <Button
        variantColor='cyan'
        mx={2}
      >
        建立全校／班級貼文
      </Button>
    </ToolTip>
  )
}
