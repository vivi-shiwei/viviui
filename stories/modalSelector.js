import React from 'react'
import {
<<<<<<< HEAD
  Box,
  IconButton,
  Button
=======
  Box
>>>>>>> 885ec15af8c65ad46e948c03c1d857e5cbec4151
} from '@chakra-ui/core'

import ModalSelector from '../src/components/modalSelector/index'
import Administrator from '../src/components/modalSelector/administrator'
<<<<<<< HEAD
import AltRoundButton from '../src/components/modalSelector/altRoundButton'
=======
import AltRoundButton from '../src/components/modalSelector/squareButton'
>>>>>>> 885ec15af8c65ad46e948c03c1d857e5cbec4151
import EditButton from '../src/components/modalSelector/editButton'
import ModalSelectorOption from '../src/components/modalSelector/modalSelectorOption'

import NextLink from 'next/link'
import { GrTwitter } from 'react-icons/gr'
export default { title: 'ModalSelector' }

export const ModalSelectorTest = () => {
  return (
    <ModalSelector
      mt='20px'
<<<<<<< HEAD
      value='阿迪斯发威风威风第三方撒旦发射点发大水撒打发二'
=======
      value='cdsj6 2019/2020 Dashboard (现在)'
>>>>>>> 885ec15af8c65ad46e948c03c1d857e5cbec4151
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
<<<<<<< HEAD
        // <Button>新增</Button>
        <AltRoundButton>新增</AltRoundButton>
      }
      rightY={
        // <IconButton icon='search' />
        <EditButton icon='edit' />
      }
    >
      <ModalSelectorOption value='option1' isDisabled>option1</ModalSelectorOption>
      <ModalSelectorOption value='option2'>option2</ModalSelectorOption>
      <ModalSelectorOption value='option3'>option3</ModalSelectorOption>
=======
        <AltRoundButton>新增</AltRoundButton>
      }
      rightY={
        <EditButton icon='edit' />
      }
    >
      <ModalSelectorOption value='cdsj6 2019/2020 Dashboard' isDisabled>cdsj6 2019/2020 Dashboard</ModalSelectorOption>
      <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>cdsj6 2020/2021 Dashboard</ModalSelectorOption>
      <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>cdsj6 2021/2022 Dashboard</ModalSelectorOption>
>>>>>>> 885ec15af8c65ad46e948c03c1d857e5cbec4151
    </ModalSelector>
  )
}
