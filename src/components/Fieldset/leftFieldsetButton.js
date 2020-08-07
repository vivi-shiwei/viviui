import React from 'react'
import { Button } from '@chakra-ui/core'

// 左右兩弧度為 999px 的 Button
const LeftFieldsetButton = (props) => {
  return (
    <Button
      as='div'
      borderWidth='1px'
      rounded='999px'
      minW={{ base: '80px', sm: '110px' }}
      zIndex='1'
      position=' absolute'
      top='0'
      left=' 0'
      {...props}
    />
  )
}

export default LeftFieldsetButton
