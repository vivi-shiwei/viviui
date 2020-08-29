import React, { memo } from 'react'
import {
  Divider
} from '@chakra-ui/core'
const DrawerItemDivider = (props) => {
  return (
    <Divider w='100%' {...props} />
  )
}
export default memo(DrawerItemDivider)
