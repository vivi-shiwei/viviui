import React from 'react'
import {
  Box,
  Flex
} from '@chakra-ui/core'

const PictureArrange = ({ arrangement, children, ...props }) => {
  return (
    <Box {...props}>
      {children}
      {children.length === 2 && arrangement === 'vertical' && (
        <Flex align='center' justifyContent='space-between' height='full' flexDirection='column'>
          <Box backgroundColor='#FFCCCC' width='100%' height='49%'> 56 </Box>
        </Flex>

      )}
      {children.length === 2 && arrangement === 'crosswise' && (
        <Flex Flex align='center' justifyContent='space-between' height='full'>
          <Box backgroundColor='#FFCCCC' width='49%' height='100%'>45 </Box>
          <Box backgroundColor='#FF6666' width='49%' height='100%'>45 </Box>
        </Flex>
      )}

      {children.length === 3 && arrangement === 'vertical' && (
        <Flex align='center' justifyContent='space-between' width='auto' height='full' flexDirection='column'>
          <Box backgroundColor='#FFCCCC' width='100%' height='100%'>45 </Box>
          <Flex align='center' justifyContent='space-between' width='full' height='full' mt='2'>
            <Box backgroundColor='#FF6666' width='49%' height='100%'>45 </Box>
            <Box backgroundColor='#66CC99' width='49%' height='100%'>45 </Box>
          </Flex>
        </Flex>
      )
      }
      {
        children.length === 3 && arrangement === 'crosswise' && (
          <Flex align='center' justifyContent='space-between' width='auto' height='full'>
            <Box backgroundColor='#FFCCCC' width='49%' height='full'>45 </Box>
            <Flex align='center' justifyContent='space-between' flexDirection='column' width='49%'>
              <Box backgroundColor='#FF6666' width='full' height='full'>45 </Box>
              <Box backgroundColor='#66CC99' width='full' height='full' mt='2'>45 </Box>
            </Flex>
          </Flex>
        )
      }
      {
        children.length === 4 && arrangement === 'vertical' && (
          <Flex align='center' justifyContent='space-between' width='auto' height='full' flexDirection='column'>
            <Box backgroundColor='#FFCCCC' width='100%' height='100%'>45 </Box>
            <Flex align='center' justifyContent='space-between' width='full' height='full' mt='2'>
              <Box backgroundColor='#FF6666' width='32%' height='100%'>45 </Box>
              <Box backgroundColor='#66CC99' width='32%' height='100%'>45 </Box>
              <Box backgroundColor='#66CC99' width='32%' height='100%'>45 </Box>
            </Flex>
          </Flex>
        )
      }
      {
        children.length === 4 && arrangement === 'crosswise' && (
          <Flex align='center' justifyContent='space-between' width='auto' height='full'>
            <Box backgroundColor='#FFCCCC' width='49%' height='full'>45 </Box>
            <Flex align='center' justifyContent='space-between' flexDirection='column' width='49%'>
              <Box backgroundColor='#FF6666' width='full' height='full'>45 </Box>
              <Box backgroundColor='#66CC99' width='full' height='full' mt='2'>45 </Box>
              <Box backgroundColor='#66CC99' width='full' height='full' mt='2'>45 </Box>
            </Flex>
          </Flex>
        )
      }
      {
        children.length === 5 && arrangement === 'crosswise' && (
          <Flex align='center' justifyContent='space-between' width='auto' height='full'>
            <Flex justifyContent='space-between' height='full' width='49%' flexDirection='column'>
              <Box backgroundColor='#FFCCCC' width='100%' height='100%'>45 </Box>
              <Box backgroundColor='#FFCCCC' width='100%' height='100%' mt='2'>45 </Box>
            </Flex>
            <Flex align='center' justifyContent='space-between' height='full' width='49%' flexDirection='column'>
              <Box backgroundColor='#FFCCCC' width='100%' height='100%'>45 </Box>
              <Box backgroundColor='#FFCCCC' width='100%' height='100%' mt='2'>45 </Box>
              <Box backgroundColor='#FFCCCC' width='100%' height='100%' mt='2'>45 </Box>
            </Flex>
          </Flex>
        )
      }
      {
        children.length > 5 && arrangement === 'crosswise' && (
          <Flex align='center' justifyContent='space-between' width='auto' height='full'>
            <Box backgroundColor='#FFCCCC' width='49%' height='full'>45 </Box>
            <Flex align='center' justifyContent='space-between' flexDirection='column' width='49%'>
              <Box backgroundColor='#FF6666' width='full' height='full'>45 </Box>
              <Box backgroundColor='#66CC99' width='full' height='full' mt='2'>45 </Box>
              <Box backgroundColor='#66CC99' width='full' height='full' mt='2'>45 </Box>
            </Flex>
          </Flex>
        )
      }
    </Box>
  )
}
export default PictureArrange
