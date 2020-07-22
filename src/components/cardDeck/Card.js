import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/core'

const Card = ({ ...props }) => {
  return (
    <>
      <Box
        width='100%' h='200px'
        color='#1a202c'
        background='#ffffff'
        p='20px'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        {...props}
      >
        <Heading as='h3' size='md'>初一甲班</Heading>
      </Box>
    </>
  )
}

export default Card
