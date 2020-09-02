import React from 'react'
import { Box } from '@chakra-ui/core'

import postCardPicture from '../src/components/postCardPicture'
import Pictures from '../src/components/postCardPicture/pictures'

export default { title: 'postCardPicture(hui)' }

const darks = [
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3988286801,48626279&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1947839005,1811220579&fm=26&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1187213634,3203010965&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2407081651,3186896498&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=325461855,3402280707&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=325461855,3402280707&fm=26&gp=0.jpg'
]

export const PictureOne = () => {
  const show = darks.slice(0, 1)
  return (
    <>
      <Box maxW='500px' m='0 auto'>
        <postCardPicture>
          {show.map((item, index) => {
            return <Pictures key={index} imageURL={item} />
          })}
        </postCardPicture>
      </Box>
    </>
  )
}

export const PictureTwo = () => {
  const show = darks.slice(0, 2)
  return (
    <>
      <Box maxW='500px' m='0 auto'>
        <postCardPicture>
          {show.map((item, index) => {
            return <Pictures key={index} imageURL={item} />
          })}
        </postCardPicture>
      </Box>
    </>
  )
}

export const PictureThree = () => {
  const show = darks.slice(0, 3)
  return (
    <>
      <Box maxW='500px' m='0 auto'>
        <postCardPicture>
          {show.map((item, index) => {
            return <Pictures key={index} imageURL={item} />
          })}
        </postCardPicture>
      </Box>
    </>
  )
}
export const PictureFour = () => {
  const show = darks.slice(0, 4)
  return (
    <>
      <Box maxW='500px' m='0 auto'>
        <postCardPicture>
          {show.map((item, index) => {
            return <Pictures key={index} imageURL={item} />
          })}
        </postCardPicture>
      </Box>
    </>
  )
}
export const PictureFive = () => {
  const show = darks.slice(0, 5)
  return (
    <>
      <Box maxW='500px' m='0 auto'>
        <postCardPicture>
          {show.map((item, index) => {
            return <Pictures key={index} imageURL={item} />
          })}
        </postCardPicture>
      </Box>
    </>
  )
}
export const PictureMore = () => {
  return (
    <>
      <Box maxW='500px' m='0 auto'>
        <postCardPicture>
          {darks.map((item, index) => {
            return <Pictures key={index} imageURL={item} />
          })}
        </postCardPicture>
      </Box>
    </>
  )
}
