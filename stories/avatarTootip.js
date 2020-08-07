import React from 'react'
import { Box, Flex, Link } from '@chakra-ui/core'

import NextLink from 'next/link'

import AvatarTooltip from '../src/components/avatarTooltip'
import EditButton from '../src/components/avatarTooltip/editButton'
import ToolTip from '../src/components/avatarTooltipGroup/toolTips'
import Avatars from '../src/components/avatarTooltipGroup/avatars'
import Row from '../src/components/avatarTooltipGroup'

import MyImage from '../static/QQ20200518181405.jpg'
import MyImage6 from '../static/timg.jpg'

export default { title: 'AvatarTootip(vivi)' }

export const ClsMember = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <AvatarTooltip
      right={<EditButton>编辑成员</EditButton>}
      left={
        <Row>
          <ToolTip name='vivi2'>
            <Avatars profilePhoto={MyImage} />
          </ToolTip>
          <ToolTip name='vivi2'>
            <Avatars profilePhoto={MyImage} />
          </ToolTip>
          <ToolTip name='vivi2'>
            <Avatars />
          </ToolTip>
          <ToolTip name='vivi2'>
            <Avatars profilePhoto={MyImage} />
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
        <Avatars profilePhoto={MyImage} />
      </ToolTip>
      <ToolTip name='vivi2'>
        <Avatars profilePhoto={MyImage} />
      </ToolTip>
      <ToolTip name='vivi2'>
        <Avatars />
      </ToolTip>
      <Avatars profilePhoto={MyImage} />
      <ToolTip name='vivi2'>
        <Avatars profilePhoto={MyImage} />
      </ToolTip>
      <ToolTip name='vivi2'>
        <Avatars profilePhoto={MyImage} />
      </ToolTip>
      <ToolTip name='vivi2'>
        <Avatars profilePhoto={MyImage} />
      </ToolTip>
      <ToolTip name='vivi2'>
        <Avatars profilePhoto={MyImage} />
      </ToolTip>
      <ToolTip name='vivi2'>
        <Avatars profilePhoto={MyImage} />
      </ToolTip>
      <ToolTip name='vivi2'>
        <Avatars profilePhoto={MyImage} />
      </ToolTip>
      <ToolTip name='vivi2'>
        <Avatars profilePhoto={MyImage} />
      </ToolTip>
    </Row>
  )
}
