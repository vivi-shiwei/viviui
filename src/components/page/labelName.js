import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core'

// 顯示學校用戶信息的 component ，類型加名字加職業
const LabelName = ({ label, text, type, labelProps, children, ...props }) => {
  return (
    <Box as='div' d='flex' {...props}>
      {!!label && (
        <Box d='flex' {...labelProps}>
          <Text w='100%' fontWeight='600' className='textlabel-align-last'>
            {label}
          </Text>
          :
        </Box>
      )}
      {!!text && (<Text>{text}</Text>)}
      {!!type && (<Text>{type}</Text>)}
      {children}
      <style>
        {
          // chakra 没有 text-align-last 样式，要利用 css 样式来给它定义文本字体均匀分布
          `
          .textlabel-align-last{
            text-align-last: justify;
          }
        `
        }
      </style>
    </Box>
  )
}

export default LabelName
