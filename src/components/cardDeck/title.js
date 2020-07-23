import React from 'react'
import { Box, PseudoBox, Divider, Text, Heading, Flex } from '@chakra-ui/core'

const Title = ({ title, chidren, ...props }) => {
  return (
    <>
<<<<<<< HEAD
      <Box width='full'>
        <fieldset position='relative' boderBottom='none' borderLeft='none' borderRight='none'>
          <legend mx='auto'>{title}</legend>
          <Box position='absolute' top='-3px' left='0px' background='white' />
          <Box position='absolute' top='-3px' right='0px' background='white' />
        </fieldset>
      </Box>
      {/* <Box as='fieldset' border='1px solid #aaa6a6' width='1000px' mt='20px'>
        <Box as='div' _before={{ content: '' }}>班级管理</Box>
      </Box>  */}
      {/* <Heading
          mx='auto'
          color='#CC99CC'
          mt='-20px'
          bg='white'
          fontWeight='bold'
          // fontSize='24px'
          textAlign='center'
          {...props}
        >
        </Heading> */}
     >
=======
      <Box position='relative' width='full' {...props}>
        <Flex justify='center' align='center'>
          <Box borderBottom='1px solid #aaa6a6' w='100%' position='absolute' zIndex='0' />
          <Heading fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} position='relative' textAlign='center' bg='white' color='black' lineHeight='40px' p='0 5px'>
            {title}
          </Heading>
        </Flex>
      </Box>
>>>>>>> f8235c7ee443198a979c76cd0fe94636b4389cff
      {/* <Box width='100%' position='relative' textAlign='center'>
        <Divider borderColor='#b7b9bb' position='absolute' top='12px' left='0' width={{ base: '25%', md: '40%' }} />
        <Text fontSize={{ base: '24px', sm: '24px', md: '24px' }} lineHeight='40px' fontWeight='bold' ml={{ base: '-30px', sm: '-30px', md: '0' }}> {title}</Text>
        <Divider borderColor='#b7b9bb' position='absolute' top='12px' right='0' width={{ base: '35%', sm: '35%', md: '40% ' }} />
      </Box> */}
    </>
  )
}

export default Title
