import React from 'react'
import {
  Box,
  Heading,
  Text,
  Divider
} from '@chakra-ui/core'
import Container from '../container'

const Hero = ({
  title, // 傳入標題
  subtitle, // 傳入小標題
  children, // children的子孫
  noBottomBorder = false, // 是否需要底綫
  leftButton = null, // 輸入左邊按鈕
  rightButton = null, // 輸入右邊按鈕
  ...rest// 傳入chakra能接受的樣式到Box裏
}) => {
  return (
    <>
      <Box as='section' pt={40} pb={24} {...rest}>
        <Container>
          <Box maxW='xl' mx='auto' textAlign='center'>
            {!!title && (
              <Heading size='xl' fontWeight='semibold'>
                {title}
              </Heading>
            )}
            {!!subtitle && (
              <Text as='div' opacity='0.7' fontSize='xl' mt={title ? 6 : 0}>
                {subtitle}
              </Text>
            )}
            {(!!leftButton || !!rightButton) && (
              <Box mt={(title || subtitle) ? 4 : 0}>
                {leftButton}
                {rightButton}
              </Box>
            )}
            <Box mt={(title || subtitle || rightButton || leftButton) ? 4 : 0}>
              {children}
            </Box>
          </Box>
        </Container>
      </Box>
      {!noBottomBorder && (
        <Divider my={{ base: 10, sm: 10, md: 16 }} />
      )}
    </>
  )
}
export default Hero
