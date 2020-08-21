import React, { Children } from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'

import LinePicture from './linePicture'
import ImgItem from './imgItem'
import VideoItem from './videoItem'

const OldPictureGroup = ({ photos, children, ...props }) => {
  const photoCount = photos.length // 长度
  let items = [] // 根据类型存储
  let itemContent = []// 根据摸除存储
  const content = [] //  存储 一组最多3个

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

    if ((index + 1) % 3 !== 0 && (photos.length - 1) === index) {
      itemContent = []
      itemContent.push(items)
      content.push(itemContent)
    }
    if ((index + 1) % 3 === 0) {
      itemContent.push(items)
      content.push(itemContent)
      itemContent = items = []
    }
  })

  return (
    <>
      {photoCount < 6 && (
        <>
          {Children.map(content, (item, index) => {
            // 三个序号
            let num
            if (index % 3 === 0) {
              num = 1
            } else if (index % 3 === 1) {
              num = 2
            } else if (index % 3 === 2) {
              num = 3
            }
            return (
              <LinePicture className={`images-total-${num}`}>
                {item}
              </LinePicture>
            )
          })}
        </>
      )}

      {photoCount >= 6 && (
        <>
          {Children.map(items, (item, index) => {
            let num
            if (index % 3 === 0) {
              num = 1
            } else if (index % 3 === 1) {
              num = 2
            } else if (index % 3 === 2) {
              num = 3
            }
            return (
              <LinePicture className={`images-total-${num}`}>
                {item}
              </LinePicture>
            )
          })}

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
        .css-1nuxquv{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .images-total-2 .img-item,
        .images-total-3 .img-item{
         position: absolute;
         top: 0px;
         left: 0px;
         width: 100%;
         height: 100%;
         overflow: hidden;
         display: flex;
         justify-content: center;
         align-items: center;
       }

        .images-total-2 .imgs:after,
        .images-total-3 .imgs:after {
         content: "";
         display: block;
         padding-bottom: 100%;
       }
    .images-total-3 .imgs:nth-child(2n) {
        margin: 0 5px;
      }

      .images-total-2 .imgs:first-of-type {
        margin-right: 5px;
      }

       .grid-images .imgs {
         width: 100%;
         position: relative;
         display: inline-block;
         background: white;
       }
     
     `}
      </style>
    </>
  )
}

export default OldPictureGroup
