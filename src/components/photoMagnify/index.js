import React from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'

const AmplificationPicture = ({ children, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button>放大图片</Button>
      <Box>789</Box>
    </>
  )
}

export default AmplificationPicture
