import React from 'react'
import {
  Box,
  Image
} from '@chakra-ui/core'

const OtherImg = ({ imageURL, children, ...props }) => {
  return (
    <Box as='div' className='imgs' {...props}>
      <Box className='img-item'>
        <Image
          size='100%'
          objectFit='cover'
          src={imageURL}
        />
      </Box>
    </Box>
  )
}

export default OtherImg
