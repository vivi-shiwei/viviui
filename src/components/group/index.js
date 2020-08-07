import React from 'react'

import Container from '../container'

// 卡片組
const Group = ({ children, ...props }) => {
  return (
    <Container as='section' textAlign='center' pb={4} maxW='960px' {...props}>
      {children}
    </Container>
  )
}

export default Group
