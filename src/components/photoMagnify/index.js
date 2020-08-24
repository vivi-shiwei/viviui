import React, { useState } from 'react'
import {
  Box,
  Image,
  Modal,
  ModalContent,
  ModalCloseButton,
  IconButton,
  Flex,
  Text
} from '@chakra-ui/core'

const photoMagnify = ({ isOpen, onClose, images = [], indexI = 0, children, ...props }) => {
  const [index, setIndex] = useState(indexI)
  // 左右边界
  if (index < 0) {
    setIndex(0)
  }
  if (index > images.length - 1) {
    setIndex(images.length - 1)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size='full' {...props}>
        <ModalContent h='100%' my={0} background='rgba(255, 255, 255, 0.9)'>
          <ModalCloseButton size='lg' />
          <Flex justifyContent='center' alignItems='center' h='50px'>
            <Text>
              {`照片 (${index + 1}/${images.length})`}
            </Text>
          </Flex>
          <Box p={4} d='flex' h='100%' w='100%'>
            {/* 左邊按鈕 */}
            <Box h='100%' d='flex' alignItems='center' justifyContent='center'>
              <IconButton
                variantColor='teal'
                icon='chevron-left'
                borderRadius={9999}
                onClick={() => { setIndex(index === 0 ? images.length - 1 : index - 1) }}
                visibility={index === 0 ? 'hidden' : 'visible'}
              />
            </Box>

            {/* 中間放圖 */}
            <Box px={4} h='100%' d='flex' alignItems='center' justifyContent='center' flex='1'>
              <Box h='100%' d='flex' alignItems='center' justifyContent='center' flex='1'>
                <Image
                  src={images[index]}
                  maxW='100%'
                  maxH='100%'
                  objectFit='contain'
                  ignoreFallback
                />
              </Box>
            </Box>

            {/* 右邊按鈕 */}
            <Box h='100%' d='flex' alignItems='center' justifyContent='center'>
              <IconButton
                variantColor='teal'
                icon='chevron-right'
                borderRadius={9999}
                onClick={() => { setIndex(index === images.length - 1 ? 0 : index + 1) }}
                visibility={index + 1 === images.length ? 'hidden' : 'visible'}
              />
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}

export default photoMagnify
