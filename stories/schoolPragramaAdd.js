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
  Noopsyche,
  NoopsycheAdd,
  OpenDrawers,
  ProgramaOneData,
  ViviProgramaOne
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

export const ProgramaGroups = () => {
  return (
    <>
      <ProgramaGroup deleteColor='#696969' title='阿道夫我发的' content='沙发哦为己任' />
    </>
  )
}

export const editDashboardList = () => {
  const talents = [{ title: '自己啊就睏了就', content: '加哦就發欸違法' },
  { title: '及基督教發射東風五', content: '打發發打飛' },
  { title: '大沙發惡法而無法', content: '德法俄法違法' },
  { title: '士大夫文人收到', content: '蘇打粉微軟分爲' }]
  return (
    <>
      <Admin
        backurl='教義中學第六校>管理員'
        button={
          <Box d='flex' justifyContent='center' p={4}>
            <Button
              variant='outline'
              variantColor='green'
            >
              新增智能
            </Button>
          </Box>
        }
      >
        {
          talents.map((item, index) => {
            return (<><ProgramaGroup deleteColor='#696969' title={item.title} content={item.content} /></>)
          })
        }
      </Admin>
    </>
  )
}

export const noopsycheSingle = () => {
  return (
    <>
      <Noopsyche />
    </>
  )
}
export const noopsycheButtonAdd = () => {
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
export const ProgramaOneDataTest = () => {
  return (
    <>
      <ProgramaOneData />
    </>
  )
}
export const ViViTest = () => {
  return (
    <>
      <ViviProgramaOne title='KIng' />
    </>
  )
}
