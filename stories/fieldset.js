import React from 'react'
import LeftGroupButton from '../src/components/Fieldset/leftFieldsetButton'
import RightGroupButton from '../src/components/Fieldset/rightFieldsetButton'
import Fieldset from '../src/components/Fieldset'

export default { title: 'Fieldset(vivi)' }

export const GroupTest = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <>
      <Fieldset title='班級' bg='white' left={<LeftGroupButton>新增</LeftGroupButton>} right={<RightGroupButton>新增</RightGroupButton>} />
    </>
  )
}
