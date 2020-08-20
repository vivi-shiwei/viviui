import React from 'react'
import {
  Link
} from '@chakra-ui/core'
import NextLink from 'next/link'

const PostTagsItem = ({ link, children, ...props }) => {
  return (
    <>
      <NextLink href={link} as={link} passHref>
        <Link fontSize='lg'>
          {children}
        </Link>
      </NextLink>
    </>
  )
}

export default PostTagsItem
