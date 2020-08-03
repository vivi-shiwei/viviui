import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'

const DescribeTable = ({ describeInfo }) => {
  return (
    <Box as='table' w='100%' mt={{ base: '20px', sm: '20px', md: '30px' }}>
      <Box as='thead'>
        <Box as='tr' h='50px'>
          <Box as='td' border='1px #CBD5E0 solid' textAlign='center' w='60px'>序號</Box>
          <Box as='td' border='1px #CBD5E0 solid' textAlign='center' w='180px'>名稱</Box>
          <Box as='td' border='1px #CBD5E0 solid' textAlign='center'>值</Box>
        </Box>
      </Box>
      <Box as='tbody'>
        {
          describeInfo.map((describe, index) => {
            return (
              <Box as='tr' key={index} h='40px'>
                <Box as='td' border='1px #CBD5E0 solid' wordBreak='break-word' textAlign='center'>{index + 1}</Box>
                <Box as='td' border='1px #CBD5E0 solid' wordBreak='break-word' textAlign='center' px={2} py={3}>{describe.fieldName}</Box>
                <Box as='td' border='1px #CBD5E0 solid' wordBreak='break-word' px={4} py={3}>{describe.describe}</Box>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default memo(DescribeTable)
