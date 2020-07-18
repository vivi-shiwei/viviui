import React from 'react'
import {
  ButtonGroup,
  Button,
  Stack,
  Menu,
  Avatar,
  MenuButton,
  MenuItem,
  Box,
  MenuList,
  Link,
  MenuDivider,
  Heading,
  Flex,
  Text,
  Grid,
  Input,
  Divider,
  useDisclosure,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  OpenDrawer

} from '@chakra-ui/core'
import {
  ProgramaOne,
  ProgramaGroup,
  AddIntelligence,
  NoopsycheAdd,
  OpenDrawers,
} from '../src/components/selectSearch/programa'
import Admin from '../src/components/admin/adminPage'

export default { title: 'SchoolPrograma' }

export const ProgramaOnes = () => {
  return (
    <>
      <Box width='300px'> <ProgramaOne color='#90EE90' /></Box>
    </>
  )
}

export const PopGroup = () => {
  const talentOne = { title: '打发二', content: '哦哦附件为非' }

  return (
    <>
      <ProgramaGroup deleteColor='#696969' talent={talentOne} />
    </>
  )
}

export const editDashboardList = () => {
  const talents = [{ title: '自己啊就睏了就', content: '加哦就發欸違法' },
  { title: '及基督教發射東風五', content: '打發發打飛' },
  { title: '大沙發惡法而無法', content: '德法俄法違法' },
  { title: '士大夫文人收到', content: '蘇打粉微軟分爲' }]
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Admin
        backurl='教義中學第六校>管理員'
        button={
          <>
            <Button variant='outline' variantColor='green' onClick={onOpen} display={isOpen ? 'none' : 'block'} mx=' auto'>新增智能</Button>
            {isOpen && (
              <AddIntelligence onClose={onClose} isOpen={isOpen} />
            )}
          </>
        }
      >
        {
          talents.map((item, index) => {
            return (<><ProgramaGroup deleteColor='green' talent={item} /></>)
          })
        }
      </Admin>
    </>
  )
}

export const AddIntelligencea = () => {
  return (
    <>
      <AddIntelligence />
    </>
  )
}
export const AddIntelligenceas = () => {
  return (
    <>
      <NoopsycheAdd />
    </>
  )
}
export const OpenDrawersa = () => {
  return (
    <>
      <OpenDrawers />
    </>
  )
}
