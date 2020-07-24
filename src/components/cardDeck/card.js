import React from 'react'
import { Box, Heading } from '@chakra-ui/core'

const Card = ({ title, content, children, ...props }) => {
  return (
    <>
      {/* <Box
        width='100%'
        minH='150px'
        p='20px'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        {...props}
      >
        <Heading as='h3' size='md'>{title}</Heading>
      </Box>
      {children} */}
      <Box
        as='article'
        w={{ base: '46%', sm: '31%', md: '23%', lg: '23%' }}
        bg='white'
        m={{ base: '2%', sm: '1%', md: '1%', lg: '1%' }}
        d='inline-block'
        position='relative'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        textAlign='left'
        h='120px'
        {...props}
      >
        <Box
          as='div'
          p='15px'
        >
          <Box
            as='h2'
            fontSize={{ base: '16px', sm: '18px', md: '20px' }}
            fontWeight='bold'
          >
            {title}
          </Box>
          <Box
            as='p'
            wordBreak='break-all'
            fontSize='13px'
          >
            {content || ''}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Card
