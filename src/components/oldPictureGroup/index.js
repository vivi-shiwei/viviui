import React from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'

import PictureContent from './pictureContent'
import ImgItem from './imgItem'
import VideoItem from './videoItem'

const OldPictureGroup = ({ photos, children, ...props }) => {
  const photoCount = photos.length // 长度
  let items = [] // 根据类型存储
  let itemContent = []// 根据摸除存储  个数<=3
  const content = [] //  存储 个数<=5  element

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
    // 摸除3不为0
    if ((index + 1) % 3 !== 0 && (photos.length - 1) === index) {
      itemContent = []
      itemContent.push(items)
      content.push(itemContent)
    }
    // 摸除3为0
    if ((index + 1) % 3 === 0) {
      itemContent.push(items)
      content.push(itemContent)
      itemContent = items = []
    }
  })

  return (
    <>
      <Box>{content}</Box>

      <Box>
        {/* {photos.map((item, index) => {
          return (
            <PictureContent key={index} className={`images-total-${item[0].length}`}>
              {item}
            </PictureContent>
          )
        })}

        {!!photoCount && photoCount > 5 && (
          <Box d='flex' justifyContent='center' mt={2}>
            <Button
              variant='outline'
              variantColor='green'
            >
              {`還有${photoCount - 5}張照片`}
            </Button>
          </Box>
        )} */}

        <style jsx global>
          {`
        .grid-images {
          display: flex;
        }

        .grid-images.images-total-2 .img-item,
        .grid-images.images-total-3 .img-item{
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

        .grid-images.images-total-2 .imgs:after,
        .grid-images.images-total-3 .imgs:after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }

        .grid-images .imgs {
          width: 100%;
          position: relative;
          display: inline-block;
          background: white;
        }

        .grid-images.images-total-3 .imgs:nth-child(2n) {
          margin: 0 5px;
        }

        .grid-images.images-total-2 .imgs:first-of-type {
          margin-right: 5px;
        }
      `}
        </style>
      </Box>
    </>
  )
}

export default OldPictureGroup
