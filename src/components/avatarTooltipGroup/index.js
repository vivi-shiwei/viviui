import React from 'react'
import {
  Box
} from '@chakra-ui/core'

// import Avatars from './avatars'
// import EditButton from './editButton'

// Avatar 加 Tooltip
const Avatar = (props) => {
  return (
    <Box as='div' overflow='hidden' whiteSpace='nowrap' pr={4} {...props} />
  )
}

export default Avatar
