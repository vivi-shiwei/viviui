import React from 'react'
import {
  Box

} from '@chakra-ui/core'

import PostGroup from '../src/components/postGroup'
import PostHeader from '../src/components/postGroup/postHeader'
import PostMenu from '../src/components/postGroup/postMenu'
import PostTalent from '../src/components/postGroup/postTalent'
import PostTags from '../src/components/postGroup/postTags'
import PostTagsItem from '../src/components/postGroup/postTagsItem'
import PostTitle from '../src/components/postGroup/postTitle'
import PostContent from '../src/components/postGroup/postContent'
import OldPictureGroup from '../src/components/oldPictureGroup'

export default {
  title: 'PostGroup(hui)'
}

const pictures = [
  { type: 'image/jpg', url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3988286801,48626279&fm=26&gp=0.jpg', id: 1 },
  { type: 'image/jpg', url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1947839005,1811220579&fm=26&gp=0.jpg', id: 2 },
  { type: 'image/jpg', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg', id: 3 },
  { type: 'image/jpg', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg', id: 4 },
  { type: 'image/png', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2407081651,3186896498&fm=26&gp=0.jpg', id: 5 },
  { type: 'image/png', url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=325461855,3402280707&fm=26&gp=0.jpg', id: 6 },
  { type: 'image/png', url: 'https://vdposter.bdstatic.com/78e9d4347ddc538256c6eb3bced8e12b.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100', id: 7 }
]
export const PostGroupAll = () => {
  const show = pictures
  const lablesList = ['李海', '李逵', '张秀']
  return (
    <Box mt='20px'>
      <PostGroup
        m='0 auto' width={{ base: '100%', sm: '100%', md: '500px' }}
        topLeft={
          <PostHeader
            link='https://www.baidu.com/'
            name='pengchihui2'
            photo='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg'
            time=' 2020-08-20 10:32:55'
          />
        }
        topRight={<PostMenu />}
        postTalent={<PostTalent>充满爱心、追求时髦、一朵花</PostTalent>}
        postTags={
          <PostTags>
            <PostTagsItem link='https://www.baidu.com/'>小薇</PostTagsItem>
            <PostTagsItem link='https://www.baidu.com/'>紫霞</PostTagsItem>
            <PostTagsItem link='https://www.baidu.com/'>小鬼</PostTagsItem>
            <PostTagsItem link='https://www.baidu.com/'>小西</PostTagsItem>
          </PostTags>
        }
        postTitle={<PostTitle>夏威夷 夏令营</PostTitle>}
        postContent={<PostContent>夏威夷地处太平洋,四面环海,气候宜人,环境优美,有“旅游天堂”之美誉。阳光,海洋,沙滩,火山,还有当地的民俗文化,构成了极富特色的夏威夷风光。</PostContent>}
        photosGroup={<OldPictureGroup photos={show} />}
      />
    </Box>
  )
}

export const TopLeft = () => {
  return (
    <Box mt='20px' m='0 auto' width={{ base: '100%', sm: '100%', md: '500px' }}>
      <PostGroup
        topLeft={
          <PostHeader
            link='https://www.baidu.com/'
            name='pengchihui2'
            photo='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg'
            time=' 2020-08-20 10:32:55'
          />
        }
      />
    </Box>
  )
}

export const TopLR = () => {
  return (
    <Box mt='20px' m='0 auto' width={{ base: '100%', sm: '100%', md: '500px' }}>
      <PostGroup
        topLeft={
          <PostHeader
            link='https://www.baidu.com/'
            name='pengchihui2'
            photo='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg'
            time=' 2020-08-20 10:32:55'
          />
        }
        topRight={<PostMenu color='#EE0000' />}
      />
    </Box>
  )
}
export const postTalent = () => {
  return (
    <Box mt='20px' m='0 auto' width={{ base: '100%', sm: '100%', md: '500px' }}>
      <PostGroup
        postTalent={<PostTalent>充满爱心、追求时髦、一朵花</PostTalent>}
      />
    </Box>
  )
}
export const postTags = () => {
  return (
    <Box mt='20px' m='0 auto' width={{ base: '100%', sm: '100%', md: '500px' }}>
      <PostGroup
        postTags={
          <PostTags color='#7EC0EE'>
            <PostTagsItem link='https://www.baidu.com/'>小薇</PostTagsItem>
            <PostTagsItem link='https://www.baidu.com/'>紫霞</PostTagsItem>
            <PostTagsItem link='https://www.baidu.com/'>小鬼</PostTagsItem>
            <PostTagsItem link='https://www.baidu.com/'>小西</PostTagsItem>
          </PostTags>
        }
      />
    </Box>
  )
}
export const postContent = () => {
  return (
    <Box mt='20px' m='0 auto' width={{ base: '100%', sm: '100%', md: '500px' }}>
      <PostGroup
        postTitle={<PostTitle color='#7A67EE'>夏威夷 夏令营</PostTitle>}
        postContent={<PostContent color='#E066FF'>夏威夷地处太平洋,四面环海,气候宜人,环境优美,有“旅游天堂”之美誉。阳光,海洋,沙滩,火山,还有当地的民俗文化,构成了极富特色的夏威夷风光。</PostContent>}
      />
    </Box>
  )
}

export const photosTwo = () => {
  const show = pictures.slice(0, 2)
  return (
    <Box mt='20px' m='0 auto' width={{ base: '100%', sm: '100%', md: '500px' }}>
      <PostGroup
        photosGroup={<OldPictureGroup photos={show} />}
      />
    </Box>
  )
}
