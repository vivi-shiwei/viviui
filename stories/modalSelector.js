import React, { useState, useMemo } from 'react'
import {
  Box,
  Input,
  useDisclosure
} from '@chakra-ui/core'

import ModalSelector from '../src/components/modalSelector/index'
import AltRoundButton from '../src/components/modalSelector/squareButton'
import EditButton from '../src/components/modalSelector/editButton'
import ModalSelectorOption from '../src/components/modalSelector/modalSelectorOption'
import { UserContext } from '../src/components/modalSelector/userContext'

export default { title: 'ModalSelector' }

export const ModalSelectorTest = () => {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])
  return (
    <UserContext.Provider value={value}>
      <ModalSelector
        modalTitle='Dashboard 選擇'
        value='cdsj6 2019/2020 Dashboard'
        left={
          <AltRoundButton>新增</AltRoundButton>
        }
        right={
          <EditButton icon='edit' />
        }
      >
        <Box>
          <ModalSelectorOption value='cdsj6 2019/2020 Dashboard'>cdsj6 2019/2020 Dashboard </ModalSelectorOption>
          <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>cdsj6 2020/2021 Dashboard</ModalSelectorOption>
          <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>cdsj6 2021/2022 Dashboard</ModalSelectorOption>
        </Box>
      </ModalSelector>
    </UserContext.Provider>
  )
}
