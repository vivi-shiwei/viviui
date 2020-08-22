import React from 'react'
import { Box } from '@chakra-ui/core'
import Container from '../src/components/container'

import OldPictureGroup from '../src/components/oldPictureGroup'
import Other from '../src/components/oldPictureGroup/other'

export default { title: 'OldPictureGroup(hui)' }

export const OldPictureGroup1 = () => {
  const darks = [
    { type: 'image/jpg', url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3988286801,48626279&fm=26&gp=0.jpg', id: 1 },
    { type: 'image/jpg', url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1947839005,1811220579&fm=26&gp=0.jpg', id: 2 },
    { type: 'image/jpg', url: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg', id: 3 },
    { type: 'image/jpg', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg', id: 4 },
    { type: 'image/webg', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2407081651,3186896498&fm=26&gp=0.jpg', id: 5 }
    // { type: 'image/png', url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=325461855,3402280707&fm=26&gp=0.jpg', id: 6 }
    // { type: 'video', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327687920,1542279815&fm=26&gp=0.jpg', id: 7 }
  ]
  return (
    <Box>
      <OldPictureGroup photos={darks} mt='30px' maxW='500px' m='0 auto' backgroundColor='#EE6AA7' />
    </Box>
  )
}

export const Other1 = () => {
  const darks = [
    { type: 'image/jpg', url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3988286801,48626279&fm=26&gp=0.jpg', id: 1 },
    { type: 'image/jpg', url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1947839005,1811220579&fm=26&gp=0.jpg', id: 2 },
    { type: 'image/jpg', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg', id: 3 },
    { type: 'image/jpg', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg', id: 4 },
    { type: 'image/png', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2407081651,3186896498&fm=26&gp=0.jpg', id: 5 },
    { type: 'image/png', url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=325461855,3402280707&fm=26&gp=0.jpg', id: 6 },
    { type: 'image/png', url: 'https://vdposter.bdstatic.com/78e9d4347ddc538256c6eb3bced8e12b.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100', id: 7 }
  ]
  const vedios = [
    { type: 'video', url: 'https://macau-school.s3.ap-northeast-1.amazonaws.com/10000000-0000-0000-0000-000000000003/posts/YljR73PiRi23TLuoINZk_%E7%86%8A%E7%8C%AB.mp4', id: 1 },
    { type: 'video', url: 'https://macau-school.s3.ap-northeast-1.amazonaws.com/10000000-0000-0000-0000-000000000003/posts/FNz8mxqfSCGOlz5IH9Hf_%E9%9F%B3%E8%B0%83%E6%97%8B%E5%BE%8B.mp4', id: 2 },
    { type: 'video', url: 'https://macau-school.s3.ap-northeast-1.amazonaws.com/10000000-0000-0000-0000-000000000003/posts/hDUwzqMATBGweejDkUeu_%E6%80%A5%E6%80%A5%E6%A3%92.mp4', id: 3 },
    { type: 'video', url: 'https://macau-school.s3.ap-northeast-1.amazonaws.com/10000000-0000-0000-0000-000000000003/posts/hDUwzqMATBGweejDkUeu_%E6%80%A5%E6%80%A5%E6%A3%92.mp4', id: 4 },
    { type: 'video', url: 'https://macau-school.s3.ap-northeast-1.amazonaws.com/10000000-0000-0000-0000-000000000003/posts/XIEBbL3QzSac31EabKKJ_%E6%B8%B8%E6%88%8F1.mp4', id: 5 },
    { type: 'video', url: 'https://macau-school.s3.ap-northeast-1.amazonaws.com/10000000-0000-0000-0000-000000000003/posts/rlPsCRu7SUildoo9UXK0_%E7%81%8C%E6%BA%89%E6%89%8B%E6%9C%BA%E7%BC%96%E7%A8%8B.mp4', id: 6 }
    // { type: 'video', url: 'https://macau-school.s3.ap-northeast-1.amazonaws.com/10000000-0000-0000-0000-000000000003/posts/efbBkSkGSRZHLvFkAwzH_%E9%9F%B3%E8%B0%83%E6%97%8B%E5%BE%8B.mp4', id: 7 }
  ]
  return (
    <Box m='0 auto'>
      <Other photos={vedios} maxW='800px' m='0 auto' />
    </Box>
  )
}