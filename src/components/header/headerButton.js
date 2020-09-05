import React, { memo } from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'
const HeaderButton = React.forwardRef((props, ref) => {
  return (
    <Button
      as='div'
      align='center'
      fontSize={{ base: 'xs', sm: 'md', md: 'lg' }}
      mx={{ base: 1, sm: 2 }}
      display={{ base: 'none', sm: 'none', md: 'flex' }}
      variant='ghost'
      color='gray.500'
      forwardedRef={ref}
      _focus={{
        boxShadow:
          'none'
      }}
      {...props}
    >
      {!!props.icon && (
        <Box m={0} ml={{ base: 0, md: 1 }} mr={{ base: 0, md: 1 }}>
          {<Box as={props.icon} size='1.5em' />}
        </Box>
      )}
      {props.title}
      {props.children}
    </Button>
  )
})
export default memo(HeaderButton)
