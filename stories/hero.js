import React from 'react'
import Hero from '../src/components/home/heroPage'
import {
  Box,
  Heading,
  Button
} from '@chakra-ui/core'

export default {
  title: 'Hero'
}

export const hero = () => {
  return (
    <Hero
      title='這是大標題（title）'
      subtitle='這是小標題（subtitle）'
    >
      這是內容，（children）
    </Hero>
  )
}

export const heroWithoutTitle = () => {
  return (
    <Hero
      subtitle='小標題'
    >
      內容
    </Hero>
  )
}

export const heroWithoutSubtitle = () => {
  return (
    <Hero
      title='大標題'
    >
      內容
    </Hero>
  )
}

export const heroWithContentOnly = () => {
  return (
    <Hero>
      內容
    </Hero>
  )
}

export const heroWithoutBorder = () => {
  return (
    <Hero noBottomBorder>
      內容(children),自定義内容。在窗口中居中
    </Hero>
  )
}

export const heroWithCustomStyles = () => {
  return (
    <Hero background='red' p={4}>
      內容
    </Hero>
  )
}

export const heroWithCustomTitle = () => {
  const title = (
    <Box background='blue'>
      這是自定義的 Title component
    </Box>
  )

  return (
    <Hero
      title={title}
    />
  )
}

export const heroWithCustomSubtitle = () => {
  const subtitle = (
    <Box background='blue'>
      這是自定義的 subtitle component
    </Box>
  )

  return (
    <Hero
      subtitle={subtitle}
    />
  )
}

export const heroWithCustomContent = () => {
  return (
    <Hero>
      <Heading as='h1' size='lg'>
        haha
      </Heading>
    </Hero>
  )
}

export const heroWithCustomContent2 = () => {
  return (
    <Hero>
      <Button size='lg' as='a' variantColor='teal' m={2}>
        Get Started
      </Button>
      <Button as='a' size='lg' m={2}>
        GitHub
      </Button>
    </Hero>
  )
}

export const heroWithButtons = () => {
  return (
    <Hero
      title='這是大標題（title）'
      subtitle='這是小標題（subtitle）'
      leftButton={
        <Button size='lg' as='a' variantColor='teal' m={2}>
          Get Started
        </Button>
      }
      rightButton={
        <Button as='a' size='lg' m={2}>
          GitHub
        </Button>
      }
    />
  )
}
