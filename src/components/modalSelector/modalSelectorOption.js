import React, { useContext } from 'react'
import {
  Button
} from '@chakra-ui/core'

import { ModalContext } from './modalContext'

const ModalSelectorOption = (props) => {
  // 從 Context 組件取出裏面的值
  const { value: selectValue, onChange, onClose } = useContext(ModalContext)
  return (
    <Button
      as='div'
      mb={4}
      variant='ghost'
      w='100%'
      justifyContent='flex-start'
      size='lg'
      overflow='hidden'
      whiteSpace='nowrap'
      textOverflow='ellipsis'
      border={{ base: 'none' }}
      textAlign='left'
      cursor='pointer'
      lineHeight='40px'
      isDisabled={selectValue === props.value}
      onClick={() => {
        // 改變哦那 Change 裏的值
        onChange(props.value)
        // 判斷從 Context 組件取出的值與點擊 Button 后的值是否一樣，不一樣就執行從 Context 拿出的方法去關閉 modal
        if (selectValue !== props.value) {
          onClose()
        }
      }}
      {...props}
    />
  )
}

export default ModalSelectorOption
