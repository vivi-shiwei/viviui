import React from 'react'
import { Grid, Box } from '@chakra-ui/core'

const GroupCard = ({ children, ...props }) => {
  return (
    <>
      {/* <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={6} m='4rem 10px' justifyContent='center' {...props}>
        {children}
      </Grid> */}
      <Box as='section' textAlign='center' mt={3}>
        {children}
      </Box>
    </>

  )
}

export default GroupCard
