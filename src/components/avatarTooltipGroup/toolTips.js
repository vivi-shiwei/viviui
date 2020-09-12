import React from 'react'
import {
  Tooltip,
  Box
} from '@chakra-ui/core'

import { AvatarTooltipContext } from './avatarTooltipContext'

const Tooltips = ({ name, profilePhoto, children, hasArrow = false, toolTipProps, avatarProps, ...props }) => {
  return (
    <Tooltip hasArrow label={name} placement='auto-start' {...toolTipProps}>
      <Box as='span' d='inline-block'>
        <AvatarTooltipContext.Provider value={{ name }}>
          {children}
        </AvatarTooltipContext.Provider>
      </Box>
    </Tooltip>
  )
}

export default Tooltips
