import React from 'react'
import { Box, Heading } from '@chakra-ui/core'

const Card = ({ title, children, ...props }) => {
  return (
    <>
      <Box
        width='100%'
        minH='150px'
        p='20px'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        {...props}
      >
        <Heading as='h3' size='md'>{title}</Heading>
      </Box>
      {children}
    </>
  )
}

export default Card
