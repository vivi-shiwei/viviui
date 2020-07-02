import React from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'
import ClsPage from '../src/components/clsPage'
import { PostCard } from '../src/components/feedPage'

export default {
  title: 'ClsPage'
}
export const Cls = () => {
  return (
    <ClsPage
      title='Form 1A'
      clsImage={
        <Box as='section' maxW='94%' mt='20px' mb='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
      button={
        <Button
          variant='outline'
          variantColor='blue'
        >
          九大智能分析
        </Button>
      }
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
        title='貼文'
      />
    </ClsPage>
  )
}
