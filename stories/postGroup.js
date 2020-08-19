import React from 'react'
import {
  Box

} from '@chakra-ui/core'

import PostGroup from '../src/components/postGroup'
import PostCreatorHeader from '../src/components/postGroup/postCreatorHeader'
import PostMenu from '../src/components/postGroup/postMenu'
import PostTalent from '../src/components/postGroup/postTalent'
import PostTags from '../src/components/postGroup/postTags'
import PostTitle from '../src/components/postGroup/postTitle'
import PostContent from '../src/components/postGroup/postContent'
// import PhotosGrid from '../src/components/postGroup/photosGrid'

export default {
  title: 'PostGroup(hui)'
}

export const postHeader = () => {
  return (
    <Box>
      <PostGroup
        m='0 auto' width={{ base: '100%', md: '655px' }}
        topLeft={<PostCreatorHeader />}
        topRight={<PostMenu />}
        postTalent={<PostTalent />}
        postTags={<PostTags />}
        postTitle={<PostTitle />}
        postContent={<PostContent content='图片标题1 图片标题1 图片标题1' />}
      // photosGrid={<PhotosGrid />}
      />
    </Box>
  )
}
