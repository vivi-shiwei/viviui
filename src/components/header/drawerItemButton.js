import React from 'react'
import {
  Box,
  Button,
  Icon
} from '@chakra-ui/core'
import NextLink from 'next/link'
const DrawerItemButton = ({ title, icon, href, children, ...props }) => {
  return (
    <Button
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
          {<Box as={icon} size='1.5em' /> || <Icon name={icon} />}
        </Box>
      )}
      {children}
    </Button>
  )
}
export default DrawerItemButton
