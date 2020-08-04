import React from 'react'
import {
  Box,
  Button,
  Input,
  Icon
} from '@chakra-ui/core'
import { FaUpload } from 'react-icons/fa'

const FileUploadButton = ({ icon, disabled = false, children, props }) => {
  return (
    <Box>
      <Button variantColor='teal' disabled={disabled} position='relative' width={{ base: '100%', sm: '100%' }} {...props}>
        <Box as={icon} mr={2} />
        {!!children && (<Box as='span'> {children}</Box>)}
        {!children && (<Box as='span'>選擇 CSV 文檔</Box>)}
        <Input
          position='absolute'
          top='0px'
          bottom='0px'
          left='0px'
          right='0px'
          opacity='0'
          type='file'
          name='resume'
          accept='.csv'
          cursor='pointer'

        />
      </Button>
    </Box>
  )
}

export default FileUploadButton
