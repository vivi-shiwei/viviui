import React from 'react'
import { Box } from '@chakra-ui/core'

import FullscreenViewContainer from './fullscreenViewContainer'
import CloseLink from './closeLink'

const FullscreenView = ({ closePath, children, ...props }) => {
  return (
    <FullscreenViewContainer>
      {!!closePath && (
        <CloseLink href={closePath} />
      )}
      <Box
        w='100%'
        maxW='1088px'
        d='flex'
        alignItems='center'
        flexDirection='column'
        py='32px'
        px='16px'
        flex='1 0 auto'
        justifyContent='center'
      >
        {children}
      </Box>
    </FullscreenViewContainer>
  )
}

export default FullscreenView
