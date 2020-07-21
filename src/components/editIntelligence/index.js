import React from 'react'
import {
  Box,
  Flex
} from '@chakra-ui/core'
import IntelligenceLeft from './intelligenceLeft'
import IntelligenceRight from './intelligenceRight'
import Container from '../containerPage'

const editIntelligence = ({ left, right, buttonGroup = false, children, ...props }) => {
  return (
    <>
      <Box mx='auto'>
        <Flex alignItems='center' justifyContent='space-between'>
          <IntelligenceLeft>
            {left}
          </IntelligenceLeft>
          <IntelligenceRight>
            {right}
            {buttonGroup}
          </IntelligenceRight>
        </Flex>
      </Box>
    </>
  )
}
export default editIntelligence
