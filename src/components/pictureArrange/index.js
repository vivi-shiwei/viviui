import React from 'react'
import {
  Box,
  AspectRatioBox
} from '@chakra-ui/core'

const PictureArrange = ({ arrangement, children, ...props }) => { // arrangement 默认横向排列
  return (
    <Box {...props}>
      <Box>
        {!children.length && (
          <AspectRatioBox ratio={1}>
            {children}
          </AspectRatioBox>
        )}
        {children.length === 2 && arrangement && (
          <Box d='flex' justifyContent='space-between'>
            {children.map((c, i) => {
              return (
                <>
                  {i === 0 && (
                    <Box as='article' w={['50%', '50%', '50%', '50%']} height='100%'>
                      <AspectRatioBox ratio={1}>
                        {c}
                      </AspectRatioBox>
                    </Box>
                  )}
                  {i === 1 && (
                    <Box as='article' w={['50%', '50%', '50%', '50%']} ml='2px'>
                      <AspectRatioBox ratio={1}>
                        {c}
                      </AspectRatioBox>
                    </Box>
                  )}
                </>
              )
            })}
          </Box>
        )}

        {children.length === 2 && !arrangement && (
          <Box d='flex' justifyContent='space-between' flexDirection='column'>
            {children.map((c, i) => {
              return (
                <>
                  {i === 0 && (
                    <Box as='article' w={['100%', '100%', '100%', '100%']} height='49%'>
                      <AspectRatioBox ratio={1}>
                        {c}
                      </AspectRatioBox>
                    </Box>
                  )}
                  {i === 1 && (
                    <Box as='article' w={['100%', '100%', '100%', '100%']} mt='2px'>
                      <AspectRatioBox ratio={1} maxH='200px'>
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
export default PictureArrange
