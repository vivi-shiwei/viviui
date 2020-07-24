import React from 'react'
import { Box, Link } from '@chakra-ui/core'
import NextLink from 'next/link'
import { GrUserAdmin } from 'react-icons/gr'

const TopAdministrator = ({ children, ...props }) => {
  return (
    <>
      <Box d={{ base: 'none', sm: 'none', md: 'flex' }} justifyContent='flex-end'>
        <NextLink href=''>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />{children}
          </Link>
        </NextLink>
      </Box>
    </>
  )
}
export default TopAdministrator
