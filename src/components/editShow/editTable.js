
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
      color={props.color || 'green.600'}
      isPreviewFocusable={false}
      value={value}
      d='flex'
      {...props}
    >
      {({ isEditing, onSubmit, onRequestEdit }) => (
        <>
          {!isEditing && (
            <Flex align='center'>
              <IconButton
                variantColor={props.color || 'green.600'}
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
            <EditableInput onChange={inputonChange} />
          </Box>
        </>
      )}
    </Editable>

  )
}
export default EditTable
