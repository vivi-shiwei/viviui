import React, { useState } from 'react'
import {
  Box,
  Input,
  useDisclosure
} from '@chakra-ui/core'

import ModalSelector from '../src/components/modalSelector/index'
import AltRoundButton from '../src/components/modalSelector/squareButton'
import EditButton from '../src/components/modalSelector/editButton'
import ModalSelectorOption from '../src/components/modalSelector/modalSelectorOption'

export default { title: 'ModalSelector(vivi hui)' }

export const ModalSelectorTest = () => {
  const [values, setValues] = useState('cdsj6 2019/2020 Dashboard')

  // useEffect(() => {

  // }, [values])
  return (
    <ModalSelector
      modalTitle='Dashboard 選擇'
      value={values}
      onChange={setValues}
      left={
        <AltRoundButton>新增</AltRoundButton>
      }
      right={
        <EditButton icon='edit' />
      }
    >
      <ModalSelectorOption value='cdsj6 2019/2020 Dashboard'>cdsj6 2019/2020 Dashboard</ModalSelectorOption>
      <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>cdsj6 2020/2021 Dashboard</ModalSelectorOption>
      <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>cdsj6 2021/2022 Dashboard</ModalSelectorOption>
    </ModalSelector>
  )
}
