import React from 'react'
import {
  Link,
  Text
} from '@chakra-ui/core'
import NextLink from 'next/link'

const PostTagsItem = ({ link, children, ...props }) => {
  return (
    <>
      <NextLink href={link} as={link} passHref>
        <Link fontSize='lg'>
          {children}
          <Text as='span'>、</Text>
        </Link>
      </NextLink>
    </>
  )
}

export default PostTagsItem
