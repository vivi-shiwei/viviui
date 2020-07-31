import React from 'react'
import {
  Box,
  Divider
} from '@chakra-ui/core'

import WbgPage from './wbgPage'

const WhiteBoard = ({ title, backurl, nodivider = false, children, ...props }) => {
  return (
    <WbgPage backurl={backurl} {...props}>
      {!!title && (
        <>
          <Box as='header' pt={4} px={16}>
            {title}
          </Box>
          {!nodivider && <Divider my={6} d={{ base: 'none', md: 'flex' }} />}
        </>
      )}
      {children}
    </WbgPage>
  )
}

export default WhiteBoard
