import React from 'react'
import {
  Box,
  Flex
} from '@chakra-ui/core'
import IntelligenceLeft from './intelligenceLeft'
import IntelligenceRight from './intelligenceRight'
import ButtonGroup from './buttonGroup'
import { Container } from '../containerPage'

const EditIntelligence = ({ left, right, buttonGroup = false, children, ...props }) => {
  return (
    <>
      <Container {...props}>
        <Box mx='auto'>
          <Flex alignItems='center' justifyContent='space-between'>
            <IntelligenceLeft>
              {left}
            </IntelligenceLeft>
            <IntelligenceRight>
              {right}
              <ButtonGroup>
                {buttonGroup}
              </ButtonGroup>
            </IntelligenceRight>
          </Flex>
        </Box>
      </Container>
    </>
  )
}
export default EditIntelligence
