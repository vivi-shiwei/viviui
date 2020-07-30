import React from 'react'
import { ListIcon, Box } from '@chakra-ui/core'
const ColumnOne = ({ icon, children, props }) => {
  return (
    <>
      <ListIcon
        icon={icon}
        fontSize={{ base: '23px', md: '26px' }}
      />
      <Box
        w={{ base: 'calc(100% - 32px)', md: 'calc(100% - 35px)' }}
        borderBottom='1px solid #ededed'
        p={2}
      >{children}
      </Box>
    </>
  )
}

export default ColumnOne
