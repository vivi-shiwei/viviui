import React from 'react'
import {
  Heading
} from '@chakra-ui/core'

const HeaderPage = (props) => {
  return (
    <Heading
      as='div'
      textAlign='center'
      overflow='hidden'
      textOverflow='ellipsis'
      whiteSpace='nowrap'
      {...props}
    />
  )
}

export default HeaderPage
