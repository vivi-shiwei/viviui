import React from 'react'
import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/core'

import { ModalContext } from './modalContext'

const ModalSelector = ({
  left, // 傳入左邊的數據
  value, // 傳入中間顯示的數據
  right, // 傳入右邊的數據
  modalTitle, // 傳入 modal 的標題
  onChange, // 傳入 onChange 事件
  children, // 傳入彈出 modal 裏的數據
  ...props // 傳入左邊的數據
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box display='flex' justifyContent='center' mt='10px' {...props}>
      {left}
      <Button
        as='div'
        maxW='400px'
        lineHeight='40px'
        width='35%'
        textAlign='center'
        mx={3}
        borderColor='#CBD5E0'
        variant='outline'
        fontSize={{ base: '14px', md: '16px' }}
        overflow='hidden'
        d='block'
        whiteSpace='nowrap'
        textOverflow='ellipsis'
        onClick={onOpen}
      >
        {value}
      </Button>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior='inside'
        >
          <ModalOverlay />
          <ModalContent>
            {!!modalTitle && <ModalHeader>{modalTitle}</ModalHeader>}
            <ModalCloseButton />
            <ModalBody>

              {/* {Children.map(children, (c, i) => {
                return cloneElement(c, {
                  // 循環給每一個 children 都給一個為 parent 的值
                  onChange: onChange,
                  onClose: onClose,
                  item: i,
                  selectValue: value
                })
              })} */}
              <ModalContext.Provider
                value={{
                  value, // 給 Context 組件包住的兒子賦予 value 值
                  onChange, // 給 Context 組件包住的兒子賦予 onChange 值
                  onClose// 給 Context 組件包住的兒子賦予 onClose 值，關閉
                }}
              >
                {children}
              </ModalContext.Provider>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      {right}
    </Box>
  )
}

export default ModalSelector
