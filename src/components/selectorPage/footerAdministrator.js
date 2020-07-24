import React from 'react'
import { Box, Link } from '@chakra-ui/core'
import NextLink from 'next/link'
import { GrUserAdmin } from 'react-icons/gr'

const FooterAdministrator = ({ href, icon, children, ...props }) => {
  return (
    <Box pb={50} d={{ base: 'flex', sm: 'flex', md: 'none' }} justifyContent='center'>
      <NextLink href=''>
        <Link as='a' d='flex' alignItems='center'>
          <Box as={GrUserAdmin} mr={2} />{children}
        </Link>
      </NextLink>
    </Box>
  )
}
export default FooterAdministrator
