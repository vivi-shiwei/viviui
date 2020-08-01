import React from 'react'
import {
  Button
} from '@chakra-ui/core'

import { ModalContext } from './modalContext'

const ModalSelectorOption = (props) => {
  const { value: selectValue, onChange, onClose } = React.useContext(ModalContext)
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
        onChange(props.value)
        if (selectValue !== props.value) {
          onClose()
        }
      }}
      {...props}
    />
  )
}

export default ModalSelectorOption
