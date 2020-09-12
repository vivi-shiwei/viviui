import React, { Children } from 'react'
import {
  Box,
  Text,
  useColorMode
} from '@chakra-ui/core'
import PostPage from './postPage'
import PostHeader from './postHeader'
import Postparticipast from './postParticipast'
import PostTitle from './postTitle'
import PostBody from './postBody'
import PostPhtos from './postPhtos'
import PostEmbed from './postEmbed'

const PostCard = ({ children, ...props }) => {
  const { colorMode } = useColorMode()

  let header = null
  // let participast = null
  // let title = null
  // let body = null
  // let phtos = null
  // let embed = null

  Children.map(children, (c, i) => {
    const chil = []
    switch (c.type) {
      case PostHeader:
        header = c // 自定義logo
        break
      default:
        chil.push(c)

      // case Postparticipast:
      //   participast = c // Header左邊列表
      //   break
      // case PostTitle:
      //   title = c // Header 中間列表
      //   break
      // case PostBody:
      //   body = c // Header 中間列表
      //   break
      // case PostPhtos:
      //   phtos = c // Header 中間列表
      //   break
      // case PostEmbed:
      //   embed = c // Header 中間列表
      //   break
    }
  })
  return (
    <PostPage
      bg={colorMode === 'light' ? 'white' : '#1A202C'}
      {...props}
    >
      {header}
      {}
      {/* {participast}
      {title}
      {body}
      {phtos}
      {embed}
      {children} */}
    </PostPage>
  )
}

// const PostCard = ({ title, subtitle, postHeaderLeft, postUpperRight, postMenu, tags, talentName, content, creator, postPhotos, children, ...props }) => {
//   const { colorMode } = useColorMode()
//   return (
//     <>
//       <PostPage
//         bg={colorMode === 'light' ? 'white' : '#1A202C'}
//         {...props}
//       >
//         <Box as='header' position='relative'>
//           {/* 右上角 menu, 內有 post modal 作編輯用 */}
//           <PostUpperRight>
//             {postMenu}
//           </PostUpperRight>
//           {/* 發文者頭像和時間 */}
//           {creator}
//           {/* 才能 */}
//           {!!talentName &&
//             <PostTalent>
//               {talentName}
//             </PostTalent>}
//           {/* 標註 */}
//           {tags}
//           {/* 標題 */}
//           <Box mt={3}>
//             <Text fontWeight='bold' textAlign='left' minH='50px' wordBreak='break-word' fontSize='3xl'>
//               {title || '無標題'}
//             </Text>
//           </Box>
//         </Box>
//         {children}
//         {/* 貼文的內文與照片 */}
//         <Box as='article'>
//           {/* 內文的文字 */}
//           {!!content && (
//             <PostContent>
//               {content}
//             </PostContent>
//           )}
//           {/* 照片列表 */}
//           <PhotosGrid>
//             {postPhotos}
//           </PhotosGrid>
//         </Box>
//       </PostPage>
//     </>
//   )
// }
export default PostCard
