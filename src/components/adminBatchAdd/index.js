import React from 'react'
import HeaderContainer from '../container'
import { Heading, Box } from '@chakra-ui/core'

const AddminBatchAdd = ({ title, body, children, ...props }) => {
  return (
    <HeaderContainer pb={4} px={0} maxW='960px' {...props}>

      <Box d='flex' textAlign='center' flexDirection='column' mt={5}>
        {body}
      </Box>
    </HeaderContainer>
  )
}

export default AddminBatchAdd
