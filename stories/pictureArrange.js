import React from 'react'
import {
  Box,
  Grid,
  Image,
  Flex,
  AspectRatioBox
} from '@chakra-ui/core'

import PictureArrange from '../src/components/pictureArrange'
import RatioImg from '../src/components/pictureArrange/ratioImg'

export default { title: 'PictureArrange(hui)' }

export const PictureArrangeTest = () => {
  //  arrangement  vertical 竖向  crosswise 横向  around左右  up and down

  const data = [
    'https://bit.ly/naruto-sage',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3577724933,2542589702&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1807148865,1658709432&fm=15&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3397481050,2163864623&fm=15&gp=0.jpg'
  ]
  return (
    <Box>
      <PictureArrange arrangement='' m='0 auto' maxW='400px' maxH='400px'>
        <RatioImg src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597813527234&di=82d265128b9adf3197c66f68a634b16f&imgtype=0&src=http%3A%2F%2Fpic33.photophoto.cn%2F20141030%2F0011024093543268_b.jpg' />
        <RatioImg src='https://f10.baidu.com/it/u=1911995130,2805437140&fm=76' />
        <RatioImg src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597813527236&di=a5494e7acd2a67875a6a6f40853d87ed&imgtype=0&src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs11%2FM00%2F2F%2F8F%2FwKgBEFq1tuyAWL_MAHFIKtUcCPo65.jpeg' />
        <RatioImg src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597813641438&di=dba0f784301c7df3daf4f313a8635de8&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3014066488%2C1993301398%26fm%3D214%26gp%3D0.jpg' />
        <RatioImg src='https://t11.baidu.com/it/u=30595192,1654543529&fm=76' />
        <RatioImg src='https://tp.85814.com/d/file/shutu/2018chengshilvyou/siluowenniya_chaoda_jiankangxiuxianzhongxinygus2hbmkd3.jpg!800' />
      </PictureArrange>
    </Box>
  )
}
