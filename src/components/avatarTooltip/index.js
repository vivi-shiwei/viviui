import React, { Children } from 'react'
import {
  Box
} from '@chakra-ui/core'

import Container from '../container'

import Avatars from './avatars'
import EditButton from './editButton'

// Avatar 加 Tooltip
const AvatarTooltip = ({ name, avatars, editButton, children, ...props }) => {
  // let avatars = null
  // let editButton = null

  // Children.map(children, (c, i) => {
  //   switch (c.type) {
  //     case Avatars:
  //       if (!avatars) avatars = []
  //       avatars.push(c) // 照片集合
  //       break
  //     case EditButton:
  //       editButton = c // 编辑按钮
  //       break
  //   }
  // })

  return (
    <Container {...props}>
      <Box as='header' textAlign='center'>
        <Box as='section' maxW='100%' mt='20px' d='flex' justifyContent='center'>
          <Box as='div' overflow='hidden' whiteSpace='nowrap' pr={4}>
            {avatars}
          </Box>
          <Box as='div'>
            {editButton}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default AvatarTooltip
