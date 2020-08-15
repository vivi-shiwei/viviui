import React from 'react'
import {
  ListIcon,
  Box,
  Flex
} from '@chakra-ui/core'

// 學校管理員的界面的橫綫數據
const ColumnIconText = ({ icon, title, children, listIconProps, dividerProps, ...props }) => {
  return (
    <Flex alignItems='center' {...props}>
      <ListIcon
        icon={icon}
        fontSize={{ base: '23px', md: '26px' }}
        {...listIconProps}
      />
      <Box
        w={{ base: 'calc(100% - 32px)', md: 'calc(100% - 35px)' }}
        borderBottom='1px solid #ededed'
        p={2}
        {...dividerProps}
      >
        {children}
        {title}
      </Box>
    </Flex>
  )
}

export default ColumnIconText
