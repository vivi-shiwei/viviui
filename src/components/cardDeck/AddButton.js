import React from 'react'
import { Button } from '@chakra-ui/core'

const CardDeck = ({ chidren, ...props }) => {
  return (
    <Button backgroundColor={{ base: '#63B3ED', md: '#FF6600' }} color='white' rounded='15px' size='md' width={{ base: '80px', md: '100px' }} {...props}> 新增 </Button>
  )
}

export default CardDeck
