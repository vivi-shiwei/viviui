import React from 'react'
import { Box, Icon, Heading, Button } from '@chakra-ui/core'
import HeaderContainer from '../container'

// logo接受logo文字或圖片  text接受top中部佈局的盒子
const Testpages = ({ Header1, HeaderContent, HeaderIcon, centerButton, leftButton = null, rightButton = null, children, ...props }) => {
  return (
    <Box as='section'>
      <HeaderContainer>
        <Box maxW='xl' mx='auto' textAlign='center'>
          {!!Header1 && (
            <Heading as='h1' size='xl' fontWeight='semibold'>
              {Header1}
            </Heading>
          )}
          {!!HeaderContent && (
            <Heading as='h3' size='md' fontWeight='semibold' mt='10'>
              {HeaderContent}
            </Heading>
          )}
          {!!HeaderIcon && (
            <Icon name={HeaderIcon} size='32px' color='red.500' />
          )}

          {(!!leftButton || !!rightButton) && (
            <Box as='section' d={{ md: 'flex', sm: 'flex', base: 'block' }} mt='10px' justifyContent={(!!leftButton && !!rightButton) ? 'space-around' : 'center'} mx='auto'>
              {(!!rightButton) && (
                <Button variantColor='teal' size='md' w={{ md: '200px', base: '250px' }} mt={{ base: '10px' }}>{rightButton}</Button>
              )}

              {(!!leftButton) && (
                <Button variantColor='teal' size='md' w={{ md: '200px', base: '250px' }} mt={{ base: '10px' }}>{leftButton}</Button>
              )}
            </Box>
          )}
          {!!children && (
            <Box>{children}</Box>
          )}
        </Box>
      </HeaderContainer>
    </Box>
  )
}

export default Testpages
