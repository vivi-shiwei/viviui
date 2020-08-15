import React from 'react'
import {
  Box
} from '@chakra-ui/core'

import Container from '../container'

const AvatarTooltip = ({ left, right, children, ...props }) => {
  return (
    <Container {...props}>
      <Box as='header' textAlign='center'>
        <Box as='section' maxW='100%' mt='20px' d='flex' justifyContent='center'>
          {left}
          <Box as='div'>
            {right}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default AvatarTooltip
