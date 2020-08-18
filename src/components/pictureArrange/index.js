import React from 'react'
import {
  Box,
  AspectRatioBox,
  Flex,
  Image
} from '@chakra-ui/core'

const PictureArrange = ({ arrangement, children, ...props }) => { // arrangement 默认横向排列
  return (
    <Box {...props}>
      <Box>
        {!children.length && (
          <AspectRatioBox ratio={1} maxW='400px' maxH='400px'>
            {children}
          </AspectRatioBox>
        )}
        {children.length === 2 && arrangement && (
          <Box d='flex' justifyContent='space-between' maxW='400px' maxH='400px'>
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
          <Box d='flex' justifyContent='space-between' flexDirection='column' maxW='400px' maxH='400px'>
            {children.map((c, i) => {
              return (
                <>
                  {i === 0 && (
                    <Box as='article' w={['100%', '100%', '100%', '100%']} height='49%'>
                      <AspectRatioBox ratio={4 / 2}>
                        {c}
                      </AspectRatioBox>
                    </Box>
                  )}
                  {i === 1 && (
                    <Box as='article' w={['100%', '100%', '100%', '100%']} mt='2px'>
                      <AspectRatioBox ratio={4 / 2}>
                        {c}
                      </AspectRatioBox>

                    </Box>
                  )}
                </>
              )
            })}
          </Box>
        )}

        {children.length === 3 && arrangement && (
          <Flex justifyContent='space-between' maxW='400px' maxH='400px'>
            <AspectRatioBox width='49.7%' ratio={2 / 4}>
              {children[0]}
            </AspectRatioBox>
            <Flex justifyContent='space-between' flexDirection='column' width='49.2%'>
              <AspectRatioBox width='100%' ratio={1}>
                {children[1]}
              </AspectRatioBox>
              <AspectRatioBox width='100%' ratio={1}>
                {children[2]}
              </AspectRatioBox>
            </Flex>
          </Flex>
        )}

        {children.length === 3 && !arrangement && (
          <Flex jjustifyContent='space-between' flexDirection='column' width='full'>
            <AspectRatioBox width='full' ratio={4 / 2}>
              {children[0]}
            </AspectRatioBox>
            <Flex justifyContent='space-between' flexDirection='row' width='full' mt='3px'>
              <AspectRatioBox width='full' ratio={1}>
                {children[1]}
              </AspectRatioBox>
              <AspectRatioBox width='full' ratio={1} ml='3px'>
                {children[2]}
              </AspectRatioBox>
            </Flex>
          </Flex>
        )}
        {children.length === 4 && arrangement && (
          <Flex jjustifyContent='space-between' flexDirection='row' width='full'>
            <AspectRatioBox width='full' ratio={1}>
              {children[0]}
            </AspectRatioBox>
            <Flex justifyContent='space-between' flexDirection='column' width='50%' ml='5px'>
              <AspectRatioBox width='full' ratio={1}>
                {children[1]}
              </AspectRatioBox>
              <AspectRatioBox width='full' ratio={1} mt='5px'>
                {children[2]}
              </AspectRatioBox>
              <AspectRatioBox width='full' ratio={1} mt='5px'>
                {children[3]}
              </AspectRatioBox>
            </Flex>
          </Flex>
        )}
        {children.length === 4 && !arrangement && (
          <Flex jjustifyContent='space-between' flexDirection='column' width='full'>
            <AspectRatioBox width='full' ratio={5 / 3}>
              {children[0]}
            </AspectRatioBox>
            <Flex justifyContent='space-between' flexDirection='row' width='full' mt='5px'>
              <AspectRatioBox width='full' ratio={1}>
                {children[1]}
              </AspectRatioBox>
              <AspectRatioBox width='full' ratio={1} ml='5px'>
                {children[2]}
              </AspectRatioBox>
              <AspectRatioBox width='full' ratio={1} ml='5px'>
                {children[3]}
              </AspectRatioBox>
            </Flex>
          </Flex>
        )}

        {children.length === 5 && (
          <Flex justifyContent='space-between' flexDirection='row' width='full'>
            <Flex justifyContent='space-between' flexDirection='column' width='50%' height='50%'>
              <AspectRatioBox width='full' ratio={1}>
                {children[0]}
              </AspectRatioBox>
              <AspectRatioBox width='full' ratio={1} mt='5px'>
                {children[1]}
              </AspectRatioBox>
            </Flex>
            <Flex justifyContent='space-between' flexDirection='column' width='50%' maxH='full' ml='5px'>
              <AspectRatioBox width='100%' ratio={1}>
                {children[2]}
              </AspectRatioBox>
              <AspectRatioBox width='100%' ratio={1} mt='5px'>
                {children[3]}
              </AspectRatioBox>
              <AspectRatioBox width='100%' ratio={1} mt='5px'>
                {children[4]}
              </AspectRatioBox>
            </Flex>
          </Flex>
        )}

      </Box>

    </Box>
  )
}
export default PictureArrange
