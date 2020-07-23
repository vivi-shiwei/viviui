import React from 'react'
import { Box, PseudoBox, Divider, Text, Heading } from '@chakra-ui/core'

const Title = ({ title, chidren, ...props }) => {
  return (
    <>
      <Box width='full' textAlign='center' {...props}>
        <fieldset border='1px solid black' borderButton='none' borderLeft='none' borderRight='none' position='relative'>
          <legend> {title}</legend>
          {/* <Box position='absolute' top='-3px' left='0px'>左边</Box>
          <Box position='absolute' top='-3px' right='0px'>右边</Box> */}
        </fieldset>
      </Box>
      {/* <Box display='flex' alignItems='center' justifyContent='center' width='full'>
        <Text textAlign='left' display='inline-block' width='45%' borderTop='1px solid #ccc' />
        <Text verticalAlign='middle' width='10%' fontSize='1.3em' color='black' fontSize='30px' fontWeight='bold' textAlign='center'>班级</Text>
        <Text textAlign='right' display='inline-block' width='45%' borderTop='1px solid #ccc' />
      </Box> */}

      {/* <Box width='100%' position='relative' textAlign='center'>
        <Divider borderColor='#b7b9bb' position='absolute' top='12px' left='0' width={{ base: '25%', md: '40%' }} />
        <Text fontSize={{ base: '24px', sm: '24px', md: '24px' }} lineHeight='40px' fontWeight='bold' ml={{ base: '-30px', sm: '-30px', md: '0' }}> {title}</Text>
        <Divider borderColor='#b7b9bb' position='absolute' top='12px' right='0' width={{ base: '35%', sm: '35%', md: '40% ' }} />
      </Box> */}

    </>
  )
}

export default Title
