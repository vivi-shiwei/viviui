import React from 'react'
import {
  Box,
  FormLabel,
  Text
} from '@chakra-ui/core'

// 顯示學校用戶信息的 component ，類型加名字加職業
const LabelName = ({ label, text, type, labelProps, children, ...props }) => {
  return (
    <Box as='div' d='flex' lineHeight='40px' {...props}>
      <FormLabel d='flex' fontWeight='600' {...labelProps}>
        <Text w='100%' className='textlabel-align-last'>
          {label}
        </Text>
          :
      </FormLabel>
      <Text>{text}</Text>
      <Text>{type}</Text>
      {children}
      <style jsx global>
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
