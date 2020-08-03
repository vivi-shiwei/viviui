import { memo } from 'react'
import {
  Box,
  Tooltip,
  Spinner
} from '@chakra-ui/core'
import { MdError, MdCheckCircle, MdWarning } from 'react-icons/md'

const CsvItem = ({ data, state, tableHead, error, csvKey, index }) => {
  const fieldLength = tableHead.length
  // 如果導入的字段長度大於我們需要的字段長度，則忽略後面多餘的數據
  if (data.length > fieldLength) data.splice(fieldLength)

  let backgroundStateColor = 'white'
  switch (state) {
    case 'success':
      backgroundStateColor = '#C6F6D5'
      break
    case 'failed':
      backgroundStateColor = '#FED7D7'
      break
    case 'ignore':
      backgroundStateColor = '#FEEBC8'
      break
  }

  return (
    <Box as='tr' className='csv-table-body-content' background={backgroundStateColor}>
      {
        <Box
          as='td'
          h='40px'
          className='csv-table-body-item'
        >
          <Tooltip label={index + 1} placement='auto-start'>
            <Box textAlign='center' w='90px'>{index + 1}</Box>
          </Tooltip>
        </Box>
      }
      {
        [...data, ...new Array((fieldLength - data.length))].map((value, i) => {
          return (
            <Box
              as='td'
              key={i}
              h='40px'
              className='csv-table-body-item'
            >
              {
                (typeof value === 'object') && (
                  <Box>{value}</Box>
                )
              }
              {
                (typeof value !== 'object') && (
                  <Tooltip label={value} placement='auto-start'>
                    <Box
                      whiteSpace='nowrap'
                      overflow='hidden'
                      textOverflow='ellipsis'
                      wordBreak='break-word'
                      textAlign='center'
                      px={2}
                      w={`${tableHead[i].width}px`}
                      maxW={`${tableHead[i].width}px`}
                    >
                      {value}
                    </Box>
                  </Tooltip>
                )
              }

            </Box>
          )
        })
      }
      {
        <Box as='td' h='40px' className='csv-table-body-item'>
          <Box
            w='90px'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            {
              state === 'ready' && (
                <Tooltip label='未提交' placement='auto-start'>
                  <Box textAlign='center'>
                    未提交
                  </Box>
                </Tooltip>
              )
            }
            {
              state === 'uploading' && (
                <Tooltip label='上傳中' placement='auto-start'>
                  <Spinner color='blue.500' w='20px' h='20px' />
                </Tooltip>
              )
            }
            {
              state === 'ignore' && (
                <Tooltip label={error || '忽略'} placement='auto-start'>
                  <Box fontSize='28px'>
                    <Box as={MdWarning} color='orange.300' />
                  </Box>
                </Tooltip>
              )
            }
            {
              state === 'success' && (
                <Tooltip label='提交成功' placement='auto-start'>
                  <Box fontSize='28px'>
                    <Box as={MdCheckCircle} color='green.400' />
                  </Box>
                </Tooltip>
              )
            }
            {
              state === 'failed' && (
                <Tooltip label={error || '提交失敗'} placement='auto-start'>
                  <Box fontSize='28px'>
                    <Box as={MdError} color='red.500' />
                  </Box>
                </Tooltip>
              )
            }
          </Box>
        </Box>
      }
    </Box>
  )
}
export default memo(CsvItem)
