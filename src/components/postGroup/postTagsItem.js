import React from 'react'
import {
  Link
} from '@chakra-ui/core'
import NextLink from 'next/link'

const PostTagsItem = ({ link, children, ...props }) => {
  return (
    <>
      <NextLink href={link} as={link} passHref>
        <Link fontSize={{ base: '16px', sm: '16px', md: '18px' }}>
          {children}
        </Link>
      </NextLink>
    </>
  )
}

export default PostTagsItem
