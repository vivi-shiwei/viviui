import React, { memo } from 'react'
import {
  Box,
  Button,
  PseudoBox
} from '@chakra-ui/core'
const HeaderButton = React.forwardRef(({ title, icon, children, ...props }, ref) => {
  return (
    <PseudoBox
      // as='button'
      align='center'
      fontSize={{ base: 'xs', sm: 'md', md: 'lg' }}
      px={2}
      py={1}
      mx={{ base: 1, sm: 2 }}
      display={{ base: 'none', sm: 'none', md: 'flex' }}
      // variant='ghost'
      color='gray.500'
      _hover={{ bg: '#EDF2F7' }}
      forwardedRef={ref}
      _active={{
        background: '#E2E8F0'
      }}
      _focus={{ background: 'none', color: 'black' }}
      {...props}
    >
      {!!icon && (
        <Box m={0} ml={{ base: 0, md: 1 }} mr={{ base: 0, md: 1 }}>
          {<Box as={icon} size='1.5em' />}
        </Box>
      )}
      {title}
      {children}
    </PseudoBox>
  )
})
export default memo(HeaderButton)
