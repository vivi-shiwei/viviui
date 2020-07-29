import React from 'react'
import { Button, Box } from '@chakra-ui/core'

const ModalSelectorOption = ({ children, ...props }) => {
  return (
    <Box m={2}>
      <Button
        as='div'
        mb={4}
        variant='ghost'
        w='100%'
        justifyContent='flex-start'
        size='lg'
        overflow='hidden'
<<<<<<< HEAD
=======
        // d='block'
>>>>>>> 885ec15af8c65ad46e948c03c1d857e5cbec4151
        whiteSpace='nowrap'
        textOverflow='ellipsis'
        border={{ base: 'none' }}
        textAlign='left'
        cursor='pointer'
        lineHeight='40px'
        {...props}
      >
        {children}
      </Button>
    </Box>

  )
}

export default ModalSelectorOption
