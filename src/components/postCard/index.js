import React from 'react'
import {
  Box,
  Text,
  useColorMode
} from '@chakra-ui/core'
import { PostPage } from './postPage'
import PostUpperRight from './PostUpperRight'
import PostTalent from './postTalent'
import PostContent from './postContent'
import PhotosGrid from './photosGrid'

const PostCard = ({ title, subtitle, postHeaderLeft, postUpperRight, postMenu, tags, talentName, content, creator, postPhotos, children, ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <PostPage
        bg={colorMode === 'light' ? 'white' : '#1A202C'}
        {...props}
      >
        <Box as='header' position='relative'>
          {/* 右上角 menu, 內有 post modal 作編輯用 */}
          <PostUpperRight>
            {postMenu}
          </PostUpperRight>
          {/* 發文者頭像和時間 */}
          {creator}
          {/* 才能 */}
          {!!talentName &&
            <PostTalent>
              {talentName}
            </PostTalent>}
          {/* 標註 */}
          {tags}
          {/* 標題 */}
          <Box mt={3}>
            <Text fontWeight='bold' textAlign='left' minH='50px' wordBreak='break-word' fontSize='3xl'>
              {title || '無標題'}
            </Text>
          </Box>
        </Box>
        {children}
        {/* 貼文的內文與照片 */}
        <Box as='article'>
          {/* 內文的文字 */}
          {!!content && (
            <PostContent>
              {content}
            </PostContent>
          )}
          {/* 照片列表 */}
          <PhotosGrid>
            {postPhotos}
          </PhotosGrid>
        </Box>
      </PostPage>
    </>
  )
}
export default PostCard
