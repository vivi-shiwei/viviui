import React, { useContext } from 'react'
import {
  Button
} from '@chakra-ui/core'
import { UserContext } from './appContext'

const ModalSelectorOption = (props) => {
  const { user, setUser } = useContext(UserContext)
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
      onClick={() => {
        setUser({ ...user, value: props.value })
        user.onClose()
      }}
      {...props}
    />
  )
}

export default ModalSelectorOption
