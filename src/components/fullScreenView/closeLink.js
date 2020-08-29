import React from 'react'
import {
  Link,
  CloseButton
} from '@chakra-ui/core'

// 右上角的叉掉按鈕。
const CloseLink = (props) => {
  return (
    <Link
      pos='absolute'
      top='8px'
      right='8px'
      cursor='pointer'
      {...props}
    >
      <CloseButton />
    </Link>
  )
}

export default CloseLink
