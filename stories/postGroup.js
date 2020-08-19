import React from 'react'
import {
  Box

} from '@chakra-ui/core'

import PostGroup from '../src/components/postGroup'
import PostCreatorHeader from '../src/components/postGroup/postCreatorHeader'
import PostMenu from '../src/components/postGroup/postMenu'
import PostTalent from '../src/components/postGroup/postTalent'

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
        PostTags
      />
      {/* 右上角 menu, 內有 post modal 作編輯用 */}
      {/* <PostMenu post={post} view={view} /> */}
      {/* 發文者頭像和時間 */}
      {/* <PostCreatorHeader post={post} /> */}
      {/* 才能 */}
      {/* <PostTalent post={post} /> */}
      {/* 標註 */}
      {/* <PostTags post={post} /> */}
      {/* 標題 */}
      {/* <Box mt={3}>
          <Text fontWeight='bold' textAlign='left' minH='50px' wordBreak='break-word' fontSize='3xl'>
            {post.title || '無標題'}
          </Text>
        </Box> */}

      {/* 貼文的內文與照片 */}

      {/* 內文的文字 */}
      {/* <PostContent
              content={post.content || ''}
              contentBlocks={post.contentBlocks || {}}
              showEmbed={!photos || !photos.length}
            /> */}

      {/* 照片列表 */}
      {/* {photoCount > 0 && (
              <PhotosGrid
                post={post}
                photoCount={photoCount}
                photos={photos}
                onOpenPhotoViewModal={onOpenPhotoViewModal}
              />
            )}
          </Box> */}
    </Box>
  )
}
