import React, { memo, forwardRef } from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'

const DrawerItemButton = forwardRef(({ title, icon, children, ...props }, ref) => {
  return (
    <Button
      as='div'
      bg='none'
      width='100%'
      justifyContent='flex-start'
      _hover={{ ml: '2px', background: '#CEEDFF' }}
      forwardedRef={ref}
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
})
export default memo(DrawerItemButton)
