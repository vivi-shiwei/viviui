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
import PhotosGrid from '../src/components/postGroup/photosGrid'

export default {
  title: 'PostGroup(hui)'
}

export const postHeader = () => {
  const data = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597813527234&di=82d265128b9adf3197c66f68a634b16f&imgtype=0&src=http%3A%2F%2Fpic33.photophoto.cn%2F20141030%2F0011024093543268_b.jpg'
    // 'https://f10.baidu.com/it/u=1911995130,2805437140&fm=76',
    // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597813527236&di=a5494e7acd2a67875a6a6f40853d87ed&imgtype=0&src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs11%2FM00%2F2F%2F8F%2FwKgBEFq1tuyAWL_MAHFIKtUcCPo65.jpeg',
    // 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg',
    // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597813641438&di=dba0f784301c7df3daf4f313a8635de8&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3014066488%2C1993301398%26fm%3D214%26gp%3D0.jpg',
    // 'https://t11.baidu.com/it/u=30595192,1654543529&fm=76',
    // 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2494239978,1960683224&fm=15&gp=0.jpg',
    // 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2494239978,1960683224&fm=15&gp=0.jpg'
  ]
  return (
    <Box mt='20px'>
      <PostGroup
        m='0 auto' width={{ base: '100%', sm: '100%', md: '800px' }}
        topLeft={
          <PostCreatorHeader
            link='https://www.baidu.com/'
            name='pengchihui2'
            photo='https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=246460487,3481024636&fm=26&gp=0.jpg'
            time=' 2020-08-20 10:32:55'
          />
        }
        topRight={<PostMenu />}
        postTalent={<PostTalent color='#CD96CD'>充满爱心、追求时髦</PostTalent>}
        postTags={<PostTags color='#D1EEEE'>李海、李逵、张秀</PostTags>}
        postTitle={<PostTitle color='#A2CD5A'>夏威夷夏令营</PostTitle>}
        postContent={<PostContent content='图片标题1 图片标题1 图片标题1' />}
        photosGrid={<PhotosGrid photos={data} />}
      />
    </Box>
  )
}
