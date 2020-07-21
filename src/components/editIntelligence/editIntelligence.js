
import React from 'react'
import {
  Editable,
  IconButton,
  Flex
} from '@chakra-ui/core'

import Edittable from './edittable'

const editIntelligence = ({ value, ...props }) => {
  return (
    <Editable
      fontSize={{ base: '14px', sm: '14px', md: '24px' }}
      color='green.600'
      isPreviewFocusable={false}
      defaultValue={value}
      d='flex'
      {...props}
    >
      {({ isEditing, onSubmit, onRequestEdit }) => (
        <>
          <Edittable />
          {!isEditing && (
            <Flex align='center'>
              <IconButton
                variantColor='green.600' variant='outline'
                ml={5} size='xs' icon='edit' onClick={onRequestEdit}
              />
            </Flex>
          )}
        </>
      )}
    </Editable>

  )
}
export default editIntelligence
