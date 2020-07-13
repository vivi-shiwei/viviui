import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/core'
import { Container } from './containerPage'

const Testpages = ({ logo, text, ...props }) => {
  return (
    <Container {...props}>
      <Flex size='100%' px={{ base: 0, sm: 2, md: 4 }} align='center' justify='space-between'>
        {(!!logo) && (
          <Box alignItems='center'>
            {!!logo && <Box>{logo}</Box>}
          </Box>
        )}
        <Box d='flex' justifyContent='center' mx='auto' w='300px' textAlign='center'>{text}</Box>
      </Flex>
    </Container>
  )
}

export default Testpages
