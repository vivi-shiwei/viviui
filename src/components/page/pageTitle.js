import React from 'react'
import {
  Heading
} from '@chakra-ui/core'

// 白板標題
const PageTitle = (props) => {
  return (
    // <Box
    //   as='section'
    //   mx='auto'
    //   w='100%'
    //   maxW={{ base: '100%', sm: '100%', md: '800px' }}
    //   rounded={8}
    //   transition='0.3s'
    //   {...props}
    // >
    <Heading
      as='div'
      textAlign='center'
      size='lg'

      overflow='hidden'
      textOverflow='ellipsis'
      whiteSpace='nowrap'
      {...props}
    />
    // </Box>
  )
}

export default PageTitle
// {(!!title || !!headerPage) && (
//   <>
//     <Box as='header' pt={4} px={16} alignItems='center'>
//       {title}
//       {headerPage}
//     </Box>
//     {!nodivider && <Divider my={6} d={{ base: 'none', md: 'flex' }} />}
//   </>
// )}
