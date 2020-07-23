import React from 'react'
import {
  Image
} from '@chakra-ui/core'

const PostTags = ({ imageURL, children, ...props }) => {
  return (
    // <AspectRatioBox ratio={1}>
    //   <Image src={imageURL} alt='naruto' objectFit='cover' />
    // </AspectRatioBox>
    <Image src={imageURL} objectFit='cover' />
  )
}

export default PostTags
