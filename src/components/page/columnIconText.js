import React from 'react'
import {
  ListIcon,
  Box
} from '@chakra-ui/core'

// 學校管理員的界面的橫綫數據
const ColumnIconText = ({ icon, title, children, ...props }) => {
  return (
    <Box {...props}>
      <ListIcon
        icon={icon}
        fontSize={{ base: '23px', md: '26px' }}
      />
      <Box
        w={{ base: 'calc(100% - 32px)', md: 'calc(100% - 35px)' }}
        borderBottom='1px solid #ededed'
        p={2}
      >
        {children}
        {title}
      </Box>
    </Box>
  )
}

export default ColumnIconText
