import React from 'react'
import {
  DrawerOverlay,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton

} from '@chakra-ui/core'
const DrawerWithBody = ({ title, icon, onClose, isOpen, href, children, ...props }) => {
  return (
    <>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>選項</DrawerHeader>
          <DrawerBody fontSize={{ sm: 'xs', md: 'sm' }}>
            {children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default DrawerWithBody
