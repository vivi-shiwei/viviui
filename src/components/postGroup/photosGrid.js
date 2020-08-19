import React from 'react'
import {
  Box,
  Image,
  Button,
  Icon
} from '@chakra-ui/core'

import { Player, BigPlayButton } from 'video-react'

const PhotosGrid = ({ post, photos, photoCount, onOpenPhotoViewModal }) => {
  const content = []
  let itemContent = []
  let items = []

  const images = photos.slice(0, 5)
  images.forEach((val, index) => {
    if (val.type === 'video') {
      items.push(
        <VideoItem
          post={post}
          id={val.id}
          url={val.url}
          key={val.id}
          index={index}
          onOpenPhotoViewModal={onOpenPhotoViewModal}
        />
      )
    } else {
      items.push(
        <ImageItem
          post={post}
          id={val.id}
          imageURL={val.key}
          key={val.id}
          images={photos}
          onOpenPhotoViewModal={onOpenPhotoViewModal}
          index={index}
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
      {
        content.map((val, index) => {
          return (
            <ImagesContent key={index} className={`images-total-${val[0].length}`}>
              {val}
            </ImagesContent>
          )
        })
      }

      {!!photoCount && photoCount > 5 && (
        <Box d='flex' justifyContent='center' mt={2}>
          <Button
            variant='outline'
            variantColor='green'
            onClick={() => {
              if (onOpenPhotoViewModal) {
                onOpenPhotoViewModal({
                  postId: post.id,
                  index: 5
                })
              }
            }}
          >
            {`還有${photoCount - photos.length}張照片`}
          </Button>
        </Box>
      )}

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
  )
}

// 只裝三個
const ImagesContent = (props) => {
  return (
    <Box as='div' className={`grid-images ${props.className}`} mt={2}>
      {props.children}
    </Box>
  )
}

// 圖片列表
const ImageItem = ({ id, imageURL, images, index, post, onOpenPhotoViewModal }) => {
  return (
    <Box as='div' key={id} className='imgs'>
      <Box className='img-item'>
        <Image
          size='100%'
          objectFit='cover'
          src='https://f10.baidu.com/it/u=1911995130,2805437140&fm=76'
        />
      </Box>
    </Box>
  )
}

// 圖片列表
const VideoItem = ({ children, ...props }) => {
  return (
    <Box as='div' className='imgs'>
      <Box
        className='img-item'
      >
        <Player
          width='100%'
          height='100%'
          playsInline
          fluid={false}
          src={photos[0]}
          autoPlay={false}
          muted
        >
          <Box ml={1} mt={1}>
            <Icon name='view' size='24px' />
          </Box>
          <BigPlayButton position='center' disabled />
        </Player>
      </Box>
    </Box>
  )
}

export default PhotosGrid
