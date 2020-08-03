import React, { memo } from 'react'
import {
  Heading
} from '@chakra-ui/core'

const addUser = ({ heading, describeTable, children, ...props }) => {
  return (
    <>
      <Heading
        as='h2'
        textAlign='center'
        size='lg'
        overflow='hidden'
        textOverflow='ellipsis'
        whiteSpace='nowrap'
      > {heading}
      </Heading>
      {describeTable}
    </>
  )
}

export default memo(addUser)
