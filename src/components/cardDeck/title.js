import React from 'react'
import { Box, PseudoBox, Divider, Text, Heading } from '@chakra-ui/core'

const Title = ({ title, chidren, ...props }) => {
  return (
    <>
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
      {/* <Box width='100%' position='relative' textAlign='center'>
        <Divider borderColor='#b7b9bb' position='absolute' top='12px' left='0' width={{ base: '25%', md: '40%' }} />
        <Text fontSize={{ base: '24px', sm: '24px', md: '24px' }} lineHeight='40px' fontWeight='bold' ml={{ base: '-30px', sm: '-30px', md: '0' }}> {title}</Text>
        <Divider borderColor='#b7b9bb' position='absolute' top='12px' right='0' width={{ base: '35%', sm: '35%', md: '40% ' }} />
      </Box> */}
      {/* <Box display='flex' alignItems='center' justifyContent='center' width='100%'>
          <Text textAlign='left' display='inline-block' width='45%' borderTop='1px solid #ccc' />
          <Text verticalAlign='middle' width='10%' fontSize='1.3em' color='black' fontSize='30px' fontWeight='bold' textAlign='center'>班级</Text>
          <Text textAlign='right' display='inline-block' width='45%' borderTop='1px solid #ccc' />
          </Box> */}
      {/* <Box position='relative' textAlign='center' width='100%'>
          <Text width='45%' position='absolute' top='50%' left='0' borderTop='1px solid black' />
          <Text color='black' p='0 10px' position='relative' lineHeight='40px' fontSize='24px'>班级</Text>
          <Text width='45%' position='absolute' top='50%' right='0' borderTop='1px solid black' />
        </Box> */}
    </>
  )
}

export default Title
