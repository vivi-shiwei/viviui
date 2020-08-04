
import React from 'react'
import {
  Editable,
  IconButton,
  Flex,
  Box,
  EditablePreview,
  EditableInput
} from '@chakra-ui/core'

// 編輯table
const EditTable = ({ value, ...props }) => {
  return (
    <Editable
      fontSize={{ base: '16px', sm: '20px', md: '24px' }}
      color={props.color || 'green.600'}
      isPreviewFocusable={false}
      defaultValue={value}
      d='flex'
      justifyContent='space-between'
      {...props}
    >
      {({ isEditing, onSubmit, onRequestEdit }) => (
        <>
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
          {!isEditing && (
            <Flex align='center'>
              <IconButton
                variantColor={props.color || 'green.600'}
                variant='outline'
                ml={5}
                size='xs'
                icon='edit'
                onClick={onRequestEdit}
              />
            </Flex>
          )}
        </>
      )}
    </Editable>

  )
}
export default EditTable
