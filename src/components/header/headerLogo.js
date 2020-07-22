import React, { memo } from 'react'
import {
  Flex,
  Box
} from '@chakra-ui/core'
import NextLink from 'next/link'
const HeaderLogo = ({ icon, href, children, ...props }) => {
  return (
    <Flex
      justify='flex-start'
      flex='-1'
      {...props}
    >
      {(href && icon &&
        <NextLink href={href || '/'} passHref>
          <Box
            as='a'
            d='block'
          >
            {icon}
            {children}
          </Box>
        </NextLink>
      ) || (icon)}
    </Flex>
  )
}
export default memo(HeaderLogo)
