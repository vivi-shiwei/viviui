import React from 'react'
import { OddFeature, GridFooter } from '../src/components/footer'
import { MdAccessibility, MdPalette, MdGrain } from 'react-icons/md'
import {
  Box,
  Heading,
  Flex,
  Text
} from '@chakra-ui/core'

export default { title: 'Footer' }

export const Foot = () => {
  return (
    <OddFeature
      title='大標題'
      subtitle='小標題'
      icon={MdAccessibility}
    >
      內容
    </OddFeature>
  )
}

export const Footnoicon = () => {
  return (
    <OddFeature
      title='大標題'
      subtitle='小標題'
    >
      內容
    </OddFeature>
  )
}

export const Footnotitle = () => {
  return (
    <OddFeature
      subtitle='小標題'
      icon={MdAccessibility}
    >
      內容
    </OddFeature>
  )
}
export const Footnosubtitle = () => {
  return (
    <OddFeature
      title='大標題'
      icon={MdAccessibility}
    >
      內容
    </OddFeature>
  )
}

export const Footer = () => {
  return (
    <GridFooter>
      <OddFeature title='大標題' subtitle='小標題' icon={MdGrain} />
      <OddFeature subtitle='小標題' icon={MdPalette} />
      <OddFeature title='大標題' icon={MdGrain} />
      <OddFeature title='大標題' subtitle='小標題' />
    </GridFooter>
  )
}

export const MoreFooter = () => {
  return (
    <GridFooter>
      <OddFeature title='大標題' subtitle='小標題' icon={MdGrain} />
      <OddFeature subtitle='小標題' icon={MdPalette} />
      <OddFeature title='大標題' subtitle='小標題' icon={MdGrain} />
      <OddFeature subtitle='小標題' icon={MdPalette} />
      <OddFeature title='大標題' icon={MdGrain} />
      <OddFeature title='大標題' subtitle='小標題' />
      <OddFeature subtitle='小標題' icon={MdPalette} />
      <OddFeature title='大標題' icon={MdGrain} />
      <OddFeature title='大標題' subtitle='小標題' />
    </GridFooter>
  )
}
export const TwoFooter = () => {
  return (
    <GridFooter>
      <OddFeature title='大標題' subtitle='小標題' icon={MdGrain} />
      <OddFeature subtitle='小標題' icon={MdPalette} />
    </GridFooter>
  )
}
