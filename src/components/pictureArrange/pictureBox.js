import React from 'react'
import {
  Box,
  AspectRatioBox
} from '@chakra-ui/core'

const PictureBox = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <Box mt='10px' mx={{ base: 'auto', sm: '-13px' }}>
        {children.length === 1 && (
          children
        )}
        {children.length === 2 && (
          <Box d='flex' maxW='655px' maxH='655px'>
            {children.map((c, i) => {
              return (
                <>
                  {i === 0 && (
                    <Box as='article' w={['50%', '50%', '50%', '50%']} h='50%' m='0 1px 0 0' border='1px solid #b7b7b7'>
                      <AspectRatioBox h='50%' ratio={1}>
                        {c}
                      </AspectRatioBox>
                    </Box>
                  )}
                  {i === 1 && (
                    <Box as='article' w={['50%', '50%', '50%', '50%']} h='50%' m='0 0 0 1px' border='1px solid #b7b7b7'>
                      <AspectRatioBox h='50%' ratio={1}>
                        {c}
                      </AspectRatioBox>
                    </Box>
                  )}
                </>
              )
            })}
          </Box>
        )}

        {children.length === 3 && (
          <Box d='flex' flexWrap='wrap' maxW='655px' maxH='655px'>
            {children.map((c, i) => {
              return (
                <>
                  {i === 0 && (
                    <Box as='article' width={{ base: '100%', md: '653px' }} h='50%' border='1px solid #b7b7b7'>
                      <AspectRatioBox width={{ base: '100%', md: '653px' }} h='50%' ratio={4 / 2}>
                        {c}
                      </AspectRatioBox>
                    </Box>
                  )}
                  {i === 1 && (
                    <Box as='article' w={['50%', '50%', '49.8%', '49.8%']} h='50%' m='0 1px 0 0' border='1px solid #b7b7b7'>
                      <AspectRatioBox h='50%' ratio={1}>
                        {c}
                      </AspectRatioBox>
                    </Box>
                  )}
                  {i === 2 && (
                    <Box as='article' w={['50%', '50%', '49.8%', '49.8%']} h='50%' m='0 0 0 1px' border='1px solid #b7b7b7'>
                      <AspectRatioBox h='50%' ratio={1}>
                        {c}
                      </AspectRatioBox>
                    </Box>
                  )}
                </>
              )
            })}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default PictureBox
