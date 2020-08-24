import React from 'react'
import { Box } from '@chakra-ui/core'

import PostCardTwo from '../src/components/postCardTwo'
import Pictures from '../src/components/postCardTwo/pictures'

import MyImage from '../static/QQ20200518181405.jpg'
import MyImage6 from '../static/timg.jpg'

export default { title: 'PostCardTwo(hui)' }

export const PictureAll = () => {
  const darks = [
    { type: 'image/jpg', url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3988286801,48626279&fm=26&gp=0.jpg', id: 1 },
    { type: 'image/jpg', url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1947839005,1811220579&fm=26&gp=0.jpg', id: 2 },
    { type: 'image/jpg', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg', id: 3 },
    { type: 'image/jpg', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg', id: 4 },
    { type: 'image/png', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2407081651,3186896498&fm=26&gp=0.jpg', id: 5 },
    { type: 'image/png', url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=325461855,3402280707&fm=26&gp=0.jpg', id: 6 },
    { type: 'image/png', url: 'https://vdposter.bdstatic.com/78e9d4347ddc538256c6eb3bced8e12b.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100', id: 7 }
  ]

  return (
    <Box
      width={{ base: '100%', md: '655px' }}
      mx='auto'
    >
      <Box
        p='12px'
        border={{ sm: '1px solid #b7b7b7' }}
      >
        <Box>dfdsgdg</Box>
        <PostCardTwo>
          <Pictures imageURL={MyImage} />
          <Pictures imageURL={MyImage6} />
        </PostCardTwo>
      </Box>
    </Box>
  )
}
