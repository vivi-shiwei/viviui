import React from 'react'
import {
  Box
} from '@chakra-ui/core'

import PictureArrange from '../src/components/pictureArrange'
import RatioImg from '../src/components/pictureArrange/ratioImg'

export default { title: 'PictureArrange(hui)' }

export const MapOnePicture = () => {
  //  arrangement  vertical 竖向  crosswise 横向  around左右  up and down
  const data = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597813527234&di=82d265128b9adf3197c66f68a634b16f&imgtype=0&src=http%3A%2F%2Fpic33.photophoto.cn%2F20141030%2F0011024093543268_b.jpg'
  ]
  return (
    <Box>
      <PictureArrange arrangement='' m='0 auto' maxW='400px' maxH='400px'>
        {data.map((item, index) => {
          return <RatioImg src={item} />
        })}
      </PictureArrange>
    </Box>
  )
}
export const MapMorePicture = () => {
  //  arrangement  vertical 竖向  crosswise 横向  around左右  up and down
  const data = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597813527234&di=82d265128b9adf3197c66f68a634b16f&imgtype=0&src=http%3A%2F%2Fpic33.photophoto.cn%2F20141030%2F0011024093543268_b.jpg',
    'https://f10.baidu.com/it/u=1911995130,2805437140&fm=76',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597813527236&di=a5494e7acd2a67875a6a6f40853d87ed&imgtype=0&src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs11%2FM00%2F2F%2F8F%2FwKgBEFq1tuyAWL_MAHFIKtUcCPo65.jpeg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597813641438&di=dba0f784301c7df3daf4f313a8635de8&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3014066488%2C1993301398%26fm%3D214%26gp%3D0.jpg',
    'https://t11.baidu.com/it/u=30595192,1654543529&fm=76',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2494239978,1960683224&fm=15&gp=0.jpg'
  ]
  return (
    <Box>
      <PictureArrange arrangement='' m='0 auto' maxW='400px' maxH='400px'>
        {data.map((item, index) => {
          return <RatioImg src={item} />
        })}
      </PictureArrange>
    </Box>
  )
}

export const OnePicture = () => {
  return (
    <Box>
      <PictureArrange m='0 auto' maxW='400px'>
        <RatioImg src='https://t11.baidu.com/it/u=30595192,1654543529&fm=76' />
      </PictureArrange>
    </Box>
  )
}
export const TwoPicture1 = () => {
  return (
    <Box>
      <PictureArrange arrangement m='0 auto' maxW='400px'>
        <RatioImg src='https://t11.baidu.com/it/u=30595192,1654543529&fm=76' />
        <RatioImg src='https://t11.baidu.com/it/u=30595192,1654543529&fm=76' />
      </PictureArrange>
    </Box>
  )
}
export const TwoPicture2 = () => {
  return (
    <Box>
      <PictureArrange arrangement='' m='0 auto' maxW='400px'>
        <RatioImg src='https://t11.baidu.com/it/u=30595192,1654543529&fm=76' />
        <RatioImg src='https://t11.baidu.com/it/u=30595192,1654543529&fm=76' />
      </PictureArrange>
    </Box>
  )
}
export const ThirdPicture1 = () => {
  return (
    <Box>
      <PictureArrange arrangement m='0 auto' maxW='400px'>
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
      </PictureArrange>
    </Box>
  )
}
export const ThirdPicture2 = () => {
  return (
    <Box>
      <PictureArrange arrangement='' m='0 auto' maxW='400px'>
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
      </PictureArrange>
    </Box>
  )
}
export const FourthPicture1 = () => {
  return (
    <Box>
      <PictureArrange arrangement m='0 auto' maxW='400px'>
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
      </PictureArrange>
    </Box>
  )
}
export const FourthPicture2 = () => {
  return (
    <Box>
      <PictureArrange arrangement='' m='0 auto' maxW='400px'>
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
      </PictureArrange>
    </Box>
  )
}
export const FifthPicture = () => {
  return (
    <Box>
      <PictureArrange arrangement m='0 auto' maxW='400px'>
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
      </PictureArrange>
    </Box>
  )
}
export const MorePicture = () => {
  return (
    <Box>
      <PictureArrange arrangement='' m='0 auto' maxW='400px'>
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
        <RatioImg src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1873101598,2655143176&fm=26&gp=0.jpg' />
      </PictureArrange>
    </Box>
  )
}
