import React from 'react'
import { Box, Grid, Heading, Flex, Icon, Text, Divider } from '@chakra-ui/core'
import HeaderContainer from '../container'

// logo接受logo文字或圖片  text接受top中部佈局的盒子
export const OneGrid = ({ title, icon, content, children, ...props }) => {
  return (
    <Box
      {...props} mb='20px'
      display={{ md: 'flex', sm: 'block' }}
      justifyContent='flex-start'
    >
      <Box>
        <Flex
          rounded='full'
          size={12}
          bg='#98F5FF'
          align='center'
          justify='center'
        >
          <Icon name={icon} size='6' color='red.500' />
        </Flex>
      </Box>
      <Box ml={{ md: '30px', sm: '0' }} mt={{ md: '0', sm: '10px', base: '10px' }}>
        {!!title && (
          <Heading as='h2' size='md' fontWeight='semibold' mb='0.5em' letterSpacing='0.1em'>
            {title}
          </Heading>
        )}
        {!!content && (
          <Text letterSpacing='2px'>{content}</Text>
        )}
      </Box>
    </Box>

  )
}

export const GridGroup = ({ children, isBottomBorder, gap, ...props }) => {
  return (
  // 大于4个时缩小自动换行

    <HeaderContainer {...props}>
      {
        children.length >= 4 ? (

          <Grid
            templateColumns={{ md: 'repeat(4, 1fr)' }}
            gap={20}
          >
            {children}
          </Grid>
        ) : (
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: `repeat(${(children.length)}, 1fr)` }}
            gap={20}
          >
            {children}
          </Grid>
        )
      }
    </HeaderContainer>
  )
}
