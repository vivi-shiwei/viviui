import React from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'
import NextLink from 'next/link'
const HeaderButton = ({ title, icon, href, children, ...props }) => {
  return (
    <>
      {(!!icon || !!title) && (
        <NextLink
          href={href}
          passHref
          {...props}
        >
          <Button
            ref={href}
            as='a'
            align='center'
            fontSize={{ base: 'xs', sm: 'md', md: 'lg' }}
            px={{ base: 1, sm: 4 }}
            variantColor='gray'
            variant='ghost'
            color='gray.500'
          >
            {!!icon && (
              <Box m={0} color='currentColor' ml={{ base: 0, md: -1 }} mr={{ base: 0, md: 1 }}>
                <Box as={icon} size='1.5em' />
              </Box>
            )}
            {title}
          </Button>
        </NextLink>
      )}
      {children}
    </>
  )
}
export default HeaderButton
