import React from 'react'
import { Button, Box } from '@chakra-ui/core'

const ModalSelectorOption = ({ children, ...props }) => {
  return (
    <Box m={2}>
      <Button
        bg={props.bg || props.background}
        mb={4}
        variant='ghost'
        w='100%'
        justifyContent='flex-start'
        size='lg'
        overflow='hidden'
        d='block'
        whiteSpace='nowrap'
        textOverflow='ellipsis'
        border={{ base: 'none' }}
        textAlign='left'
        cursor='pointer'
        {...props}
      >
        {children}
      </Button>
    </Box>

  )
}

export default ModalSelectorOption
