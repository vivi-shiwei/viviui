import React from 'react'
import {
  Box,
  Button,
  Icon
} from '@chakra-ui/core'
import NextLink from 'next/link'
const HeaderButton = ({ title, icon, href, children, ...props }) => {
  return (
    <>
      <NextLink
        href={href || '/'}
        passHref
      >
        <Button
          as='a'
          align='center'
          fontSize={{ base: 'xs', sm: 'md', md: 'lg' }}
          px={{ base: 1, sm: 4 }}
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
      </NextLink>
    </>
  )
}
export default HeaderButton
