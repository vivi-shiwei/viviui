import React from 'react'
import {
  Image
} from '@chakra-ui/core'

const RatioImg = ({ imageURL, children, ...props }) => {
  return (
    <Image src={imageURL} objectFit='cover' {...props} />
  )
}
export default RatioImg
