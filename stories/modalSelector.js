import React from 'react'
import {
  Box
} from '@chakra-ui/core'

import ModalSelector from '../src/components/modalSelector/index'
import Administrator from '../src/components/modalSelector/administrator'
import AltRoundButton from '../src/components/modalSelector/squareButton'
import EditButton from '../src/components/modalSelector/editButton'
import ModalSelectorOption from '../src/components/modalSelector/modalSelectorOption'

import NextLink from 'next/link'
import { GrTwitter } from 'react-icons/gr'
export default { title: 'ModalSelector' }

export const ModalSelectorTest = () => {
  return (
    <ModalSelector
      mt='20px'
      value='cdsj6 2019/2020 Dashboard (现在)'
      modalTitle='Dashboard 選擇'
      topAdmin={
        <Box d={{ base: 'none', sm: 'none', md: 'flex' }} justifyContent='flex-end'>
          <NextLink href='https://www.baidu.com' passHref>
            <Box as='a' d='flex' alignItems='center'>
              <Administrator icon={GrTwitter}>管理员</Administrator>
            </Box>
          </NextLink>
        </Box>
      }
      leftY={
        <AltRoundButton>新增</AltRoundButton>
      }
      rightY={
        <EditButton icon='edit' />
      }
    >
      <ModalSelectorOption value='cdsj6 2019/2020 Dashboard' isDisabled>cdsj6 2019/2020 Dashboard</ModalSelectorOption>
      <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>cdsj6 2020/2021 Dashboard</ModalSelectorOption>
      <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>cdsj6 2021/2022 Dashboard</ModalSelectorOption>
    </ModalSelector>
  )
}
