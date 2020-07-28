import React, { memo } from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'

const DrawerItemButton = ({ title, icon, href, children, ...props }) => {
  return (
    <Button
      as='div'
      variantColor='black'
      border='none'
      variant='outline'
      width='100%'
      justifyContent='flex-start'
      _hover={{ ml: '2px' }}
      _focus={{
        bg: 'teal'
      }}
      {...props}
    >
      {!!icon && (
        <Box m={0} mr='8px'>
          {<Box as={icon} size='1.5em' />}
        </Box>
      )}
      {children}
    </Button>
  )
}
export default memo(DrawerItemButton)
