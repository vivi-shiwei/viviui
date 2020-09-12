import React, { Children } from 'react'
import {
  Box,
  Divider,
  useColorMode
} from '@chakra-ui/core'

import WbgPage from './wbgPage'
import PageHeader from './pageHeader'
import PageBody from './pageBody'
import PageFooter from './pageFooter'

const Page = ({ children, ...props }) => {
  const { colorMode } = useColorMode()

  let header = null
  let body = null
  let footer = null

  Children.map(children, (c, i) => {
    switch (c.type) {
      case PageHeader:
        header = c
        break
      case PageBody:
        body = c
        break
      case PageFooter:
        footer = c
        break
    }
  })

  return (
    <Box as='main' {...props}>
      <Box
        as='div'
        w={{ base: '100%', md: '90%' }}
        mt='2px'
        mx='auto'
        bg={colorMode === 'light' ? (props.bg || props.background || 'white') : (props.dark || '#1A202C')}
        minH='100vh'
        maxWidth='928px'
        borderRadius='4px 4px 0 0'
        position='relative'
        boxShadow={{
          base: '',
          sm: '',
          md: colorMode === 'light' ? '0 -1px 10px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #f3ece8' : '0 -1px 10px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #2D3748'
        }}
      >
        {header}
        {body}
        {footer}
      </Box>
    </Box>
  )
}

// const Page = ({ title, nodivider = false, children, ...props }) => {
//   let headerPage = null
//   const chil = []

//   Children.map(children, (c, i) => {
//     switch (c.type) {
//       case PageHeader:
//         if (!headerPage) headerPage = []
//         headerPage.push(c) // 頭部
//         break
//       default:
//         chil.push(c)// 頭部以外的 children
//     }
//   })

//   return (
//     <WbgPage title={title} headerPage={headerPage} nodivider={nodivider} {...props}>
//       {chil}
//     </WbgPage>
//   )
// }

export default Page
