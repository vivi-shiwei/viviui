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
                <LinePicture className={`images-total-${1}`}>
                  {item}
                </LinePicture>
              )
            } else if ((index + 1) % 3 === 2 && index === 1) {
              return (
                <LinePicture className={`images-total-${2}`}>
                  {item}
                </LinePicture>
              )
            } else if ((index + 1) % 3 === 0 && index === 2) {
              return (
                <LinePicture className={`images-total-${3}`}>
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
                <LinePicture className={`images-total-${1}`}>
                  {item}
                </LinePicture>
              )
            } else if ((index + 1) % 3 === 2 && index === 4) {
              return (
                <LinePicture className={`images-total-${2}`}>
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
        <ImgItem url={array[0].url} />
      )}
      {/* 二到五张 */}
      {photoCount >= 2 && photoCount < 6 && (
        Show()
      )}
      {/* 五张以上 */}
      {
        photoCount >= 6 && (
          <Box d='flex' justifyContent='center' mt={2}>
            <Button
              variant='outline'
              variantColor='green'
            >
              {`還有${photoCount - 5}張照片`}
            </Button>
          </Box>
        )
      }
      <style jsx='true' global='true'>
        {`
         .grid-images{
           display:flex
         }   
         .grid-images .img-item{
           max-width:96%;
           max-height: 100%;
         }
      
         .grid-images .imgs {
            display:flex;
            justify-content: center;
            width: auto;  
            height: auto;  
            max-width: 100%;  
            max-height: 100%;   
          }
          .images-total-3:after{
           content:''
           width:100%;
           height:100%;
           display:block;
          }
     
     `}
      </style>
    </Box>
  )
}

export default OldPictureGroup
