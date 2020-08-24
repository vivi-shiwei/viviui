import { useState } from 'react'

import {
  Box,
  Image,
  Icon,
  Flex,
  Text,
  Button
} from '@chakra-ui/core'

import { getImgixUrl } from 'lib/imgix'

const ImageViewer = ({ images = [], i, schooluserId = null }) => {
  const [index, setIndex] = useState(i)

  if (index > images.length - 1) {
    setIndex(images.length - 1)
  }
  if (index < 0) {
    setIndex(0)
  }

  return (
    <Box>
      {!!images && (
        <>
          <Flex justifyContent='center' alignItems='center' h='50px'>
            <Text>
              {`照片 (${index + 1}/${images.length})`}
            </Text>
          </Flex>
          <Box position='relative'>
            {
              images.length > 1 && (
                <Button
                  h={{ base: '40px', sm: '50px' }}
                  w={{ base: '40px', sm: '50px' }}
                  borderRadius='50%'
                  _hover={{
                    backgroundColor: '#8b8b8bd1'
                  }}
                  _focus={{
                    boxShadow: 'none'
                  }}
                  _active={{
                    backgroundColor: '#8b8b8bba'
                  }}
                  backgroundColor='#8b8b8bba'
                  position='absolute' top='40%' left='0'
                >

                  <Icon
                    aria-label='上一張'
                    size={{ base: '20px', sm: '40px' }}
                    name='chevron-left'
                    color='white'
                    onClick={() => { setIndex(index === 0 ? images.length - 1 : index - 1) }}
                  />
                </Button>
              )
            }

            {
              images.length > 1 && (
                <Button
                  h={{ base: '40px', sm: '50px' }}
                  w={{ base: '40px', sm: '50px' }}
                  borderRadius='50%'
                  _hover={{
                    backgroundColor: '#8b8b8bd1'
                  }}
                  _focus={{
                    boxShadow: 'none'
                  }}
                  _active={{
                    backgroundColor: '#8b8b8bba'
                  }}
                  backgroundColor='#8b8b8bba'
                  position='absolute' top='40%' right='0'
                >
                  <Icon
                    aria-label='下一張'
                    size={{ base: '20px', sm: '40px' }}
                    name='chevron-right'
                    color='white'
                    onClick={() => { setIndex(index === images.length - 1 ? 0 : index + 1) }}
                  />
                </Button>
              )
            }

            <Image
              // src={images[index].url}
              src={getImgixUrl(images[index].url, '?w=800')}
              fallbackSrc='/school/static/loading.svg'
              size='100%'
              objectFit='cover'
              cursor='pointer'
              onClick={() => { setIndex(index === images.length - 1 ? 0 : index + 1) }}
            />
          </Box>
        </>
      )}

    </Box>
  )
}

export default ImageViewer
