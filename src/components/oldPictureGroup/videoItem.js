import React from 'react'
import {
  Box,
  Icon
} from '@chakra-ui/core'
import { Player, BigPlayButton } from 'video-react'

const VideoItem = ({ url, children, ...props }) => {
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
          src={url}
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

export default VideoItem
