import React, { memo } from 'react'
import {
  Box,
  Button,
  Icon
} from '@chakra-ui/core'
const HeaderButton = ({ title, icon, href, children, ...props }) => {
  return (
    <>
      <Button
        align='center'
        fontSize={{ base: 'xs', sm: 'md', md: 'lg' }}
        px={{ base: 1, sm: 4 }}
        display={{ base: 'none', sm: 'none', md: 'flex' }}
        variantColor='gray'
        variant='ghost'
        color='gray.500'
        {...props}
      >
        {!!icon && (
          <Box m={0} ml={{ base: 0, md: -1 }} mr={{ base: 0, md: 1 }}>
            {<Box as={icon} size='1.5em' /> || <Icon name={icon} />}
          </Box>
        )}
        {title}
      </Button>
      {children}
    </>
  )
}
export default memo(HeaderButton)
