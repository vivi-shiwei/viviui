import React from 'react'
import { Button } from '@chakra-ui/core'

const CenterSelector = ({ children, ...props }) => {
  return (
    <Button
      as='div'
      maxW='400px'
      w='100%'
      lineHeight='40px'
      textAlign='center'
      mx={3}
      borderColor='#CBD5E0'
      variant='outline'
      fontSize={{ base: '14px', md: '16px' }}
      overflow='hidden'
      d='block'
      whiteSpace='nowrap'
      textOverflow='ellipsis'
      {...props}
    />
  )
}
export default CenterSelector
