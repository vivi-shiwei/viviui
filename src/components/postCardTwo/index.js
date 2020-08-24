import React, { Children } from 'react'
import {
  Box,
  AspectRatioBox
} from '@chakra-ui/core'

const PictureBox = ({ children, ...props }) => {
  let a = null
  let b = null
  let c = null
  let d = null
  let e = null
  Children.map(children, (chil, i) => {
    switch (i) {
      case 0:
        a = chil // 自定義logo
        break
      case 1:
        b = chil // Header左邊列表
        break
      case 2:
        c = chil // Header 中間列表
        break
      case 3:
        d = chil // Header 右邊列表
        break
      case 4:
        e = chil // Header 右邊列表
        break
    }
  })

  return (
    <Box {...props}>
      <Box mt='10px' mx={{ base: 'auto', sm: '-13px' }}>
        {children.length < 2 && (
          a
        )}

        {children.length === 2 && (
          <Box d='flex'>
            <Box as='article' w={['50%', '50%', '50%', '50%']} m='0 0 0 1px'>
              <AspectRatioBox ratio={1} m='1px 0 0 0' border='1px solid #b7b7b7'>
                {a}
              </AspectRatioBox>
            </Box>
            <Box as='article' w={['50%', '50%', '50%', '50%']} m='0 0 0 1px'>
              <AspectRatioBox ratio={1} m='1px 0 0 0' border='1px solid #b7b7b7'>
                {b}
              </AspectRatioBox>
            </Box>
          </Box>
        )}

        {/* {children.length === 1 && (
          children
        )}
        {children.length === 2 && (
          <Box d='flex' maxW='655px' maxH='655px'>
            {children.map((c, i) => {
              return ( */}
        {/* 两张是长图片时
                 <>
                  {i === 0 && ( */}
        {/* <Box as='article' w={['50%', '50%', '50%', '50%']} m='0 1px 0 0' border='1px solid #b7b7b7'>
                      {c}
                    </Box>
                  )}
                   {i === 1 && ( */}
        {/* //     <Box as='article' w={['50%', '50%', '50%', '50%']} m='0 0 0 1px' border='1px solid #b7b7b7'>
                //       {c}
                //     </Box>
                //   )}
                // </>

                // 两张都是短图片
                // <>
                //   {i === 0 && ( */}
        {/* //     <AspectRatioBox h='50%' ratio={4 / 2} m='0 0 1px 0' border='1px solid #b7b7b7'>
                //       {c}
                //     </AspectRatioBox>
                //   )}
                //   {i === 1 && ( */}
        {/* //     <AspectRatioBox h='50%' ratio={4 / 2} m='1px 0 0 0' border='1px solid #b7b7b7'>
                //       {c}
                //     </AspectRatioBox>
                //   )}
                // </>

                // 一长一短
        //         <>
        //           {i === 0 && ( */}
        {/* //             <Box as='article' w={['50%', '50%', '50%', '50%']} h='50%' m='0 1px 0 0' border='1px solid #b7b7b7'>
        //               <AspectRatioBox h='50%' ratio={1}>
        //                 {c}
        //               </AspectRatioBox>
        //             </Box>
        //           )}
        //           {i === 1 && ( */}
        {/* //             <Box as='article' w={['50%', '50%', '50%', '50%']} h='50%' m='0 0 0 1px' border='1px solid #b7b7b7'>
        //               <AspectRatioBox h='50%' ratio={1}>
        //                 {c}
        //               </AspectRatioBox>
        //             </Box>
        //           )}
        //         </>
        //       )
        //     })}
        //   </Box> */}
        {/* // )}

        // {children.length === 3 && ( */}
        {/* //   <Box d='flex' flexWrap='wrap' maxW='655px' maxH='655px'>
        //     {children.map((c, i) => { */}
        {/* //       return (
        //         <>
        //           {i === 0 && ( */}
        {/* //             <Box as='article' width={{ base: '100%', md: '653px' }} h='50%' border='1px solid #b7b7b7'>
        //               <AspectRatioBox width={{ base: '100%', md: '653px' }} h='50%' ratio={4 / 2}>
        //                 {c}
        //               </AspectRatioBox>
        //             </Box>
        //           )}
        //           {i === 1 && ( */}
        {/* //             <Box as='article' w={['50%', '50%', '49.8%', '49.8%']} h='50%' m='0 1px 0 0' border='1px solid #b7b7b7'>
        //               <AspectRatioBox h='50%' ratio={1}>
        //                 {c}
        //               </AspectRatioBox>
        //             </Box>
        //           )}
        //           {i === 2 && ( */}
        {/* //             <Box as='article' w={['50%', '50%', '49.8%', '49.8%']} h='50%' m='0 0 0 1px' border='1px solid #b7b7b7'>
        //               <AspectRatioBox h='50%' ratio={1}>
        //                 {c}
        //               </AspectRatioBox>
        //             </Box>
        //           )}
        //         </>
        //       )
        //     })}
        //   </Box> */}
        {/* // )} */}

        {children.length === 4 && (
          <Box flexWrap='wrap' maxW='655px' maxH='655px'>
            <Box d='flex' maxW='100%' maxH='50%'>
              <Box as='article' width={['50%', '50%', '49.8%', '33.8%']} h='50%' m='0 1px 0 0' border='1px solid #b7b7b7'>
                <AspectRatioBox h='50%' ratio={1}>
                  {a}
                </AspectRatioBox>
              </Box>
              <Box as='article' w={['50%', '50%', '49.8%', '33.8%']} h='50%' m='0 1px 0 0' border='1px solid #b7b7b7'>
                <AspectRatioBox h='50%' ratio={1}>
                  {b}
                </AspectRatioBox>
              </Box>
              <Box as='article' w={['50%', '50%', '49.8%', '33.8%']} h='50%' m='0 0 0 1px' border='1px solid #b7b7b7'>
                <AspectRatioBox h='50%' ratio={1}>
                  {c}
                </AspectRatioBox>
              </Box>
            </Box>
            <Box mt='5px'>
              <Box as='article' w='100%' h='50%' m='0 0 0 1px' border='1px solid #b7b7b7'>
                <AspectRatioBox h='50%' ratio={1}>
                  {d}
                </AspectRatioBox>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default PictureBox
