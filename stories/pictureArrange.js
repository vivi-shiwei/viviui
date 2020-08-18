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
      <PictureArrange arrangement='' maxW='400px' m='0 auto' mt='50px' backgroundColor='#FF0033'>
        <RatioImg src='https://bit.ly/naruto-sage' />
        <RatioImg src='https://bit.ly/naruto-sage' />
      </PictureArrange>
    </Box>
  )
}
