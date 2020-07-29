import React, { memo } from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'

const DrawerItemButton = ({ title, icon, children, ...props }) => {
  return (
    <Button
      as='div'
      bg='none'
      width='100%'
      justifyContent='flex-start'
      _hover={{ ml: '2px', background: '#CEEDFF' }}
      {...props}
    >
      {!!icon && (
        <Box m={0} mr='8px'>
          {<Box as={icon} size='1.5em' />}
        </Box>
      )}
      {title}
      {children}
    </Button>
  )
}
export default memo(DrawerItemButton)
