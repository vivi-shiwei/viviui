import React from 'react'
import { Button } from '@chakra-ui/core'

<<<<<<< HEAD:src/components/modalSelector/altRoundButton.js
const AltRoundButton = ({ children, ...props }) => {
=======
const SquareButton = ({ children, ...props }) => {
>>>>>>> 885ec15af8c65ad46e948c03c1d857e5cbec4151:src/components/modalSelector/squareButton.js
  return (
    <Button
      as='div'
      fontSize={{ base: '14px', md: '16px' }}
      {...props}
    >
      {children}
    </Button>
  )
}
export default SquareButton
