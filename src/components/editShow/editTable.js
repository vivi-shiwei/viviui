
import React from 'react'
import {
  Editable,
  IconButton,
  Flex,
  Box,
  EditablePreview,
  EditableInput
} from '@chakra-ui/core'

// 編輯 EditTable
const EditTable = ({ value, inputonChange, ...props }) => {
  return (
    <Editable
      fontSize={{ base: '20px', sm: '20px', md: '24px' }}
      defaultValue={value}
      d='flex'
      isPreviewFocusable={false}
      onChange={inputonChange}
      {...props}
    >
      {({ isEditing, onSubmit, onRequestEdit }) => (
        <>
          {!isEditing && (
            <Flex align='center'>
              <IconButton
                variant='outline'
                size='xs'
                icon='edit'
                onClick={onRequestEdit}
              />
            </Flex>
          )}
          <Box
            p='5px 10px'
          >
            <EditablePreview
              maxW={{ base: '250px', sm: '230px', md: '340px' }}
              alignItems='center'
              whiteSpace='nowrap'
              d='block'
              overflow='hidden'
              textOverflow='ellipsis'
              justifyContent='space-between'
            />
            <EditableInput />
          </Box>
        </>
      )}
    </Editable>

  )
}
export default EditTable
