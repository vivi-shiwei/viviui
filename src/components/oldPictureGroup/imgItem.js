import React from 'react'
import {
  Box,
  Image
} from '@chakra-ui/core'

const ImgItem = ({ url, children, ...props }) => {
  return (
    <>
      <Box as='div' className='imgs'>
        <Box className='img-item'>
          <Image
            size='100%'
            objectFit='cover'
            src={url}
          />
        </Box>
      </Box>
    </>
  )
}

export default ImgItem
