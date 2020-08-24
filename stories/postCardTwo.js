import React from 'react'
import { Box } from '@chakra-ui/core'

import PostCardTwo from '../src/components/postCardTwo'
import Pictures from '../src/components/postCardTwo/pictures'

import MyImage from '../static/QQ20200518181405.jpg'
import MyImage6 from '../static/timg.jpg'

export default { title: 'PostCardTwo(hui)' }

const darks = [
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3988286801,48626279&fm=26&gp=0.jpg'
  // 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1947839005,1811220579&fm=26&gp=0.jpg'
  // 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg',
  // 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg',
  // 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2407081651,3186896498&fm=26&gp=0.jpg',
  // 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=325461855,3402280707&fm=26&gp=0.jpg'
]

export const PictureAll = () => {
  const show = darks
  return (
    <>
      <Box maxW='500px' m='0 auto'>
        <PostCardTwo>
          {show.map((item, index) => {
            return <> <Pictures key={index} imageURL={item} /></>
          })}
        </PostCardTwo>
      </Box>
    </>
  )
}

// export const PictureOne = () => {
//   const show = darks.slice(0, 1)
//   return (
//     <Box
//       width={{ base: '100%', md: '655px' }}
//       mx='auto'
//     >
//       <Box
//         p='12px'
//         border={{ sm: '1px solid #b7b7b7' }}
//       >
//         <PostCardTwo>
//           <Pictures imageURL={show} />
//         </PostCardTwo>
//       </Box>
//     </Box>
//   )
// }
// export const PictureTwo = () => {
//   const show = darks.slice(0, 2)
//   return (
//     <Box
//       width={{ base: '100%', md: '655px' }}
//       mx='auto'
//     >
//       <Box
//         p='12px'
//         border={{ sm: '1px solid #b7b7b7' }}
//       >
//         <PostCardTwo>
//           <Pictures imageURL={show} />
//         </PostCardTwo>
//       </Box>
//     </Box>
//   )
// }
