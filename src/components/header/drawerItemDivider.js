import React from 'react'
import {
  Divider
} from '@chakra-ui/core'
const DrawerItemDivider = ({ title, icon, href, children, ...props }) => {
  return (
    <>
      <Divider w='100%' {...props} />
    </>
  )
}
export default DrawerItemDivider
