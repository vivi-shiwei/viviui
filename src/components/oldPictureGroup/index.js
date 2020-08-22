import React, { Children } from 'react'
import {
  Box,
  Button,
  Flex
} from '@chakra-ui/core'

import LinePicture from './linePicture'
import ImgItem from './imgItem'
import VideoItem from './videoItem'

const OldPictureGroup = ({ photos, children, ...props }) => {
  const photoCount = photos.length // 长度
  const items = [] // 根据类型存储 img video

  const array = photos.slice(0, 5) // 浅拷贝五个
  array.forEach((item, index) => {
    // 类型判断
    if (item.type === 'video') {
      items.push(
        <VideoItem
          url={item.url}
          index={index}
        />
      )
    } else {
      items.push(
        <ImgItem
          url={item.url}
          index={index}
        />
      )
    }
  })
  const Show = () => {
    return (
      <>
        <Flex justify='space-between'>
          {Children.map(items, (item, index) => {
            if ((index + 1) % 3 === 1 & index === 0) {
              return (
                <LinePicture className={`images-total-${1} mtNone`}>
                  {item}
                </LinePicture>
              )
            } else if ((index + 1) % 3 === 2 && index === 1) {
              return (
                <LinePicture className={`images-total-${2} mtNone`}>
                  {item}
                </LinePicture>
              )
            } else if ((index + 1) % 3 === 0 && index === 2) {
              return (
                <LinePicture className={`images-total-${3} mtNone`}>
                  {item}
                </LinePicture>
              )
            }
          })}
        </Flex>
        <Flex justify='space-between'>
          {Children.map(items, (item, index) => {
            if ((index + 1) % 3 === 1 & index === 3) {
              return (
                <LinePicture className={`images-total-${1} four`}>
                  {item}
                </LinePicture>
              )
            } else if ((index + 1) % 3 === 2 && index === 4) {
              return (
                <LinePicture className={`images-total-${2} five`}>
                  {item}
                </LinePicture>
              )
            }
          })}
        </Flex>
      </>

    )
  }

  return (
    <Box {...props}>
      {/* 一张 */}
      {photoCount < 2 && (
        <>
          {items[0]}
        </>
      )}
      {/* 二到五张 */}
      {photoCount >= 2 && photoCount < 6 && (
        Show()
      )}
      {/* 五张以上 */}
      {photoCount >= 6 && (
        <>
          <Box>{Show()}</Box>
          <Box d='flex' justifyContent='center' mt={2}>
            <Button
              variant='outline'
              variantColor='green'
            >
              {`還有${photoCount - 5}張照片`}
            </Button>
          </Box>
        </>
      )}
      <style jsx='true' global='true'>
        {`
         .grid-images{
           display:flex;
         }   
         .mtNone{
           margin-top:0
         }
         .grid-images .imgs {
            display:flex;
            justify-content: center;
            width: auto;  
            height: auto;  
            max-width: 100%;  
            max-height: 100%;   
          }
          //  .img-item{
          //   max-width:100%;
          //   max-height: 100%;
          //   margin-left:5px;
          //   margin-right:5px
          // }
          .images-total-1 .img-item, .images-total-3 .img-item {
             max-width:100%;
             max-height: 100%;
          }
          .images-total-2 .img-item{
            max-width:96%;
            max-height: 100%;
          }
          .five .img-item{
            max-width:100%;
            max-height: 100%;
            margin-left:2px
          }
          .four .img-item{
            max-width:100%;
            max-height: 100%;
            margin-right:2px
          }
     
     `}
      </style>
    </Box>
  )
}

export default OldPictureGroup
