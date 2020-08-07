import React from 'react'
import {
  Tooltip
} from '@chakra-ui/core'

import { TooltipContext } from './toolTipContext'

// 卡片組
const Tooltips = ({ name, children, ...props }) => {
  return (
    <Tooltip hasArrow label={name} placement='auto-start' {...props}>
      <TooltipContext.Provider value={{ name: name }}>
        {children}
      </TooltipContext.Provider>
    </Tooltip>
  )
}

export default Tooltips
