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
  const OddFeature = ({ title, icon, subtitle, ...props }) => {
    return (
      <Box {...props}>
        {!!icon && (
          <Flex
            rounded='full'
            size={12}
            bg='teal.500'
            align='center'
            justify='center'
          >
            <Box size={6} color='white' as={icon} />
          </Flex>
        )}
        {!!title && (
          <Heading as='h2' size='md' fontWeight='semibold' mt='1em' mb='0.5em'>
            {title}
          </Heading>
        )}
        {!!subtitle && (
          <Text>{subtitle}</Text>
        )}
      </Box>
    )
  }
  return (
    <GridFooter num='4'>
      <OddFeature title='大標題' subtitle='小標題' icon={MdGrain} />
      <OddFeature subtitle='小標題' icon={MdPalette} />
      <OddFeature title='大標題' icon={MdGrain} />
      <OddFeature title='大標題' subtitle='小標題' />
    </GridFooter>
  )
}

export const MoreFooter = () => {
  const OddFeature = ({ title, icon, subtitle, ...props }) => {
    return (
      <Box {...props}>
        {!!icon && (
          <Flex
            rounded='full'
            size={12}
            bg='teal.500'
            align='center'
            justify='center'
          >
            <Box size={6} color='white' as={icon} />
          </Flex>
        )}
        {!!title && (
          <Heading as='h2' size='md' fontWeight='semibold' mt='1em' mb='0.5em'>
            {title}
          </Heading>
        )}
        {!!subtitle && (
          <Text>{subtitle}</Text>
        )}
      </Box>
    )
  }
  return (
    <GridFooter num='4'>
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
