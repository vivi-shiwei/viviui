import React, { Children } from 'react'
import {
  Box,
  Flex,
  useColorMode
} from '@chakra-ui/core'

import LeftFieldset from './leftFieldset'
import RightFieldset from './rightFieldset'
import FieldsetHeader from './fieldsetHeader'

import Container from '../container'
// 學校專業的 title 底綫模塊
const Fieldset = ({ children, ...props }) => {
  const { colorMode } = useColorMode()
  let left = null
  let right = null
  let title = null
  const chil = []
  console.log(children)
  Children.map(children, (c, i) => {
    switch (c.type) {
      case LeftFieldset:
        left = c // 自定义左边数据
        break
      case RightFieldset:
        right = c // 自定义右边数据
        break
      case FieldsetHeader:
        title = c // 自定义右边数据
        break
      default:
        chil.push(c)
    }
  })
  return (
    <Container
      pb={4}
      maxW='960px'
      {...props}
      bg={colorMode === 'light' ? (props.bg || props.background) : (props.dark || '#1A202C')}
    >
      <Box
        position='relative'
        width='full'
        textAlign='center'
        my='20px'
        bg={colorMode === 'light' ? (props.bg || props.background) : (props.dark || '#1A202C')}
      // {...props}
      >
        {left}
        <Flex justify='center' align='center'>
          <>
            <Box borderBottom={`1px solid ${colorMode === 'light' ? '#aaa6a6' : 'white'}`} w='100%' position='absolute' zIndex='0' />
            {title}
            {chil}
            {/* <Heading
                fontSize={{ base: '20px', sm: '25px', md: '35px' }}
                textAlign='center'
                bg={colorMode === 'light' ? (props.bg || props.background) : (props.dark || '#1A202C')}
                color={colorMode === 'light' ? 'black' : 'white'}
                zIndex='1'
                lineHeight='40px'
                p='0 5px'
              >
                {title}
                {children}
              </Heading> */}
          </>
        </Flex>
        {right}
      </Box>
    </Container>
  )
}

export default Fieldset
