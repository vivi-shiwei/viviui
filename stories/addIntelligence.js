import React, { useState } from 'react'
import { Button, useDisclosure } from '@chakra-ui/core'
// import {
//   AddIntelligence
// } from '../src/components/selectSearch/programa'
import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'
import Admin from '../src/components/admin/adminPage'
import EditShow from '../src/components/editShow'
import DeleteIcon from '../src/components/editShow/deleteIcon'
import ConfirmButton from '../src/components/editShow/confirmButton'
import CancelButton from '../src/components/editShow/cancelButton'
import EditTable from '../src/components/editShow/editTable'

export default { title: 'AddIntelligence(vivi hui)' }

export const EditableOne = () => {
  return (
    <>
      <EditTable value='jfiekj' color='#CC6600' />
    </>
  )
}

export const ListTest = () => {
  const talents = [
    { title: '自己啊就睏了就', content: '加哦就發欸違法' },
    { title: '及基督教發射東風五', content: '打發發打飛' },
    { title: '大沙發惡法而無法', content: '德法俄法違法' },
    { title: '士大夫文人收到', content: '蘇打粉微軟分爲' }
  ]
  const name = '個人内省'
  const englishName = 'vivi'
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [intelligenceName, setIntelligenceName] = useState(name)
  const [intelligenceEngName, setIntelligenceEngName] = useState(englishName)
  return (
    <>
      <Admin
        backurl='教義中學第六校>管理員'
        button={
          <>
            <NextLink href='/test' passHref>
              <a onClick={action('button-click')}>
                <Button
                  variant='outline'
                  variantColor='green'
                  onClick={onOpen}
                  display={isOpen ? 'none' : 'block'}
                  mx=' auto'
                >
                  新增智能
                </Button>
              </a>
            </NextLink>
          </>
        }
      >
        <EditShow onChage='3' mb='20px'>
          <EditTable value={intelligenceName} inputonChange={(e) => { setIntelligenceName(e.target.value) }} />
          <EditTable value={intelligenceEngName} inputonChange={(e) => { setIntelligenceEngName(e.target.value) }} />
          <DeleteIcon />
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <ConfirmButton
                isDisabled={(intelligenceName === name && intelligenceEngName === englishName)}
              >確認
              </ConfirmButton>
            </a>
          </NextLink>
          <NextLink href='/test' passHref>
            <a onClick={action('button-click')}>
              <CancelButton
                isDisabled={(intelligenceName === name && intelligenceEngName === englishName)}
              >還原
              </CancelButton>
            </a>
          </NextLink>
        </EditShow>
        {/* {talents.map((item, index) => {
          return (
            <>
              <Intelligence
                left={
                  <>
                    <EditIntelligence value='亚罗可' />
                    <EditIntelligence value='明星桥' />
                  </>
                }
                right={
                  <DeleteIcon
                    onClick={() => {
                      console.log('杰克')
                    }}
                  />
                }
                buttonGroup={
                  <>
                    <ConfirmButton />
                    <CancelButton />
                  </>
                }
              />
            </>
          )
        })} */}
      </Admin>
    </>
  )
}
// export const add = () => {
//   return <AddIntelligence />
// }
