import React from 'react'
import { Button } from '@chakra-ui/core'

const CenterSelector = ({ children, ...props }) => {
  return (
    <Button
      maxW='400px'
      w='100%'
      mx={3}
      borderColor='#CBD5E0'
      variant='outline'
      fontSize={{ base: '12px', md: '16px' }}
      overflow='hidden'
      d='block'
      whiteSpace='nowrap'
      textOverflow='ellipsis'
      {...props}
    >
      {children}
    </Button>
  )
}
export default CenterSelector
