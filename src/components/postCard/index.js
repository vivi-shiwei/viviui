import React from 'react'
import {
  Box
} from '@chakra-ui/core'
import { PostPage } from './postPage'
import PostUpperRight from './PostUpperRight'
import PostTags from './postTags'

const PostCard = ({ title, subtitle, postHeaderLeft, postUpperRight, postMenu, tags, creator, postPhotos, children, ...props }) => {
  return (
    <>
      <PostPage
        bg='white'
        {...props}
      >
        <Box as='header' position='relative'>
          {/* 右上角 menu, 內有 post modal 作編輯用 */}
          <PostUpperRight>
            {postUpperRight}
            {postMenu}
          </PostUpperRight>
          {/* 發文者頭像和時間 */}
          {creator}
          {/* 才能 */}
          {/* <PostTalent post={post} /> */}
          {/* 標註 */}
          <PostTags>
            {tags}
          </PostTags>
          {/* 標題 */}
          {/* <Box mt={3}>
            <Text fontWeight='bold' textAlign='left' minH='50px' wordBreak='break-word' fontSize='3xl'>
              {post.title || '無標題'}
            </Text>
          </Box> */}
        </Box>
        {children}
        {/* 貼文的內文與照片 */}
        {/* <Box as='article'> */}
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
      </PostPage>
      {/* <Box {...props}>
        {!!title && (
          <Container py={4}>
            <Flex justifyContent='center'>
              <Heading fontSize='1.6rem'>
                {title}
              </Heading>
            </Flex>
          </Container>
        )}
        {!!subtitle && (
          <Container mb={10}>
            <Box d='flex' justifyContent='center'>
              {subtitle}
            </Box>
          </Container>

        )}
        {children}
      </Box> */}
    </>
  )
}
export default PostCard
