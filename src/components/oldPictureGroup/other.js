import React from 'react'
import {
  Box,
  Image,
  Button,
  Icon
} from '@chakra-ui/core'

import { Player, BigPlayButton } from 'video-react'

import ImageItem from './otherImg'
import VideoItem from './otherVideo'
import ImagesContent from './otherContent'

const PhotosGrid = ({ photos, children, ...props }) => {
  const content = []
  let itemContent = []
  let items = []

  const images = photos.slice(0, 5)
  images.forEach((val, index) => {
    if (val.type === 'video') {
      items.push(
        <VideoItem
          url={val.url}
        />
      )
    } else {
      items.push(
        <ImageItem
          imageURL={val.url}
        />)
    }

    if ((images.length - 1) === index && (index + 1) % 3 !== 0) {
      itemContent = []
      itemContent.push(items)
      content.push(itemContent)
    }

    // 儲存三個
    if ((index + 1) % 3 === 0) {
      itemContent.push(items)
      content.push(itemContent)
      itemContent = items = []
    }
  })

  return (
    <Box>
      <Box {...props}>
        {
          content.map((val, index) => {
            return (
              <ImagesContent key={index} className={`images-total-${val[0].length} king`}>
                {val}
              </ImagesContent>
            )
          })
        }

        {photos.length > 5 && (
          <Box d='flex' justifyContent='center' mt={2}>
            <Button
              variant='outline'
              variantColor='green'
            >
              {`還有${photos.length - images.length}張照片`}
            </Button>
          </Box>
        )}

        <style jsx='true' global='true'>
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
    </Box>
  )
}

export default PhotosGrid
