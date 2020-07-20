import React, { memo } from 'react'
import {
  DrawerHeader
} from '@chakra-ui/core'
const DrawerItemHeader = ({ title, icon, href, children, ...props }) => {
  return (
    <>
      <DrawerHeader {...props}>{children}</DrawerHeader>
    </>
  )
}
export default memo(DrawerItemHeader)
