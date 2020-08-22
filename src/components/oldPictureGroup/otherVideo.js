import React from 'react'
import {
  Box,
  Icon
} from '@chakra-ui/core'

import { Player, BigPlayButton } from 'video-react'

// 圖片列表
const OtherVideo = ({ url, children, ...props }) => {
  return (
    <Box as='div' className='imgs' {...props}>
      <Box
        className='img-item'
      >
        <Player
          width='100%'
          height='100%'
          playsInline
          fluid={false}
          src={url}
          autoPlay={false}
          muted
          mb='1px'
        >
          <Box>
            <Icon name='view' size='24px' className='king' />
          </Box>
          <BigPlayButton position='center' disabled />
        </Player>
      </Box>
      <style>
        {`
        .video-react-video{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .video-react{
          display: block;
          vertical-align: top;
          box-sizing: border-box;
          color: #fff;
          background-color: #000;
          position: relative;
          font-size: 10px;
          line-height: 1;
          font-family: serif,Times,Times New Roman;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .video-react-control-bar.video-react-control-bar-auto-hide {
          display: none;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3em;
          background-color: rgba(43,51,63,.7);
      }
        .video-react-loading-spinner{
          display: none;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -25px 0 0 -25px;
          opacity: .85;
          text-align: left;
          border: 6px solid rgba(43,51,63,.7);
          box-sizing: border-box;
          background-clip: padding-box;
          width: 50px;
          height: 50px;
          border-radius: 25px;
        }
        `}
      </style>
    </Box>

  )
}

export default OtherVideo
