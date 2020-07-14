import React, { useState, useRef } from 'react'
import {
  Box,
  Input,
  Grid,
  Heading,
  Flex,
  Icon,
  Text,
  Editable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
  IconButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Field,
  FormErrorMessage,
  Form,
  Formik,
  NewModal,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Stack,
  DrawerOverlay,
  PseudoBox,
  Select
} from '@chakra-ui/core'
import { Container } from '../containerPage'
import Admin from '../admin/adminPage'

// Editable单个
export const ProgramaOne = ({ title, content, color, fontSize, children, ...props }) => {
  const [begin, setBegin] = useState(title || '')
  const [finish, setFinish] = useState(title)

  return (
    <Editable
      textAlign='left'
      defaultValue={title || ('空' || !!content ? content : '空')}
      fontSize={fontSize}
      color={color}
      whiteSpace='nowrap'
      overflow='hidden'
      textOverflow='ellipsis'
      p='5px 10px'
      isPreviewFocusable={false}
    >
      {({ isEditing, onSubmit, onRequestEdit, onChange }) => (
        <>
          <EditablePreview />
          <EditableInput onChange={(e) => { setFinish(e.target.value) }} />
          <IconButton
            variantColor='green.600' variant='outline'
            ml={5} size='xs' icon='edit' onClick={onRequestEdit}
          />
        </>
      )}
    </Editable>
  )
}

// Programa Left
export const ProgramaLeftButton = ({ title, content }) => {
  return (
    <>
      <Grid templateColumns='repeat(1, 1fr)' gap={0} m='10px' width='40%'>
        <ProgramaOne title={title} c color='#1E90FF' fontSize='24px' />
        <ProgramaOne content={content} color='#8B814C' fontSize='18px' />
      </Grid>
    </>
  )
}
// Programa right
export const ProgramaRightButton = (visibility) => {
  return (
    <>
      <Button bg='#9370DB' color='white' _hover='color:black' visibility={visibility}>確認修改</Button>
      <Button bg='#00B2EE' color='white' _hover='color:black' visibility={visibility}>還原</Button>
    </>
  )
}

// Editable单个組
export const ProgramaGroup = ({ talent, deleteColor, deleteButtonTop = true, children, ...props }) => {
  const [selectValue, setSelectValue] = useState(talent || '')
  const [talentName, setTalentName] = useState(talent)
  return (
    <>
      <Box mx='auto'>
        <Flex alignItems='center' justifyContent='space-between'>
          <Grid templateColumns='repeat(1, 1fr)' gap={0} m='10px' width='40%'>
            <Editable
              textAlign='left'
              fontSize='24px'
              color='#2f98ff'
              whiteSpace='nowrap'
              value={talent.title}
              overflow='hidden'
              textOverflow='ellipsis'
              p='5px 10px'
              isPreviewFocusable={false}
            >
              {({ isEditing, onSubmit, onRequestEdit, onChange }) => (
                <>
                  <EditablePreview />
                  <EditableInput onChange={(e) => { setTalentName({ title: e.target.value }) }} />
                  <IconButton
                    variantColor='green.600' variant='outline'
                    ml={5} size='xs' icon='edit' onClick={onRequestEdit}
                  />
                </>
              )}
            </Editable>
            <Editable
              textAlign='left'
              fontSize='24px'
              value={talent.content}
              color='#8b814c'
              whiteSpace='nowrap'
              overflow='hidden'
              textOverflow='ellipsis'
              p='5px 10px'
              isPreviewFocusable={false}
            >
              {({ isEditing, onSubmit, onRequestEdit, onChange }) => (
                <>
                  <EditablePreview />
                  <EditableInput onChange={(e) => { setTalentName({ content: e.target.value }) }} />
                  <IconButton
                    variantColor='green.600' variant='outline'
                    ml={5} size='xs' icon='edit' onClick={onRequestEdit}
                  />
                </>
              )}
            </Editable>
          </Grid>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} width='30%'>
            <Box display='flex' alignItems='center'>
              <Icon name='delete' size='24px' color='#696969' cursor='pointer' />
            </Box>
            <ProgramaRightButton
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'hidden'
              }
            />
          </Grid>
        </Flex>
      </Box>
    </>
  )
}

// 智能添加
export const Noopsyche = ({ ming }) => {
  const ref1 = useRef()
  const ref2 = useRef()
  const obj = { title: null, content: null }
  return (
    <PseudoBox mx='auto' _hover={{ bg: 'blue.100' }} cursor='pointer'>
      <Flex alignItems='center' justifyContent='space-between'>
        <Grid templateColumns='repeat(1, 1fr)' gap={0} m='10px' width='60%'>
          <Input variant='outline' type='text' placeholder='新增智能名稱' mb='5px' ref={ref1} value={obj.title} />
          <Input variant='outline' type='text' placeholder='新增英文智能名稱' ref={ref2} value={obj.content} />
        </Grid>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} width='20%' justifyContent='space-around'>
          <Button bg='#9370DB' color='white' _hover='color:black' p='0px 50px' onClick={() => { obj.title = ref1.current.value; obj.content = ref2.current.value; console.log(obj) }}>送出資料</Button>
          <Button bg='#00B2EE' color='white' _hover='color:black' p='0px 20px' onClick={() => { ming() }}>取消</Button>
        </Grid>
      </Flex>
    </PseudoBox>
  )
}

// 智能添加关闭 useDisclosure
export const NoopsycheAdd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        variantColor='blue'
        borderWidth='1px'
        position=' absolute'
        borderRadius='9999px'
        top='50%'
        left=' 0'
        transform=' translate(0, -50%)'
        minW={{ base: '80px', sm: '110px' }}
        onClick={onOpen}
        display={isOpen ? 'none' : 'block'}
      >
        新增
      </Button>
      {isOpen && (
        <Noopsyche onClose={onClose} isOpen={isOpen} ming={onClose} />
      )}

    </>
  )
}
// openDrawer
export const OpenDrawers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

// vivi单组件数据渲染
export const ViviProgramaOne = () => {
  const talents = ['efeiohf', '建瓯我就二分', '哦奥列克都发了']
  const arry = [{ title: '啊打发二', content: '发为' }, { title: '啊打发二', content: '发为' }]
  return (
    <Box mt={3}>
      {arry.map((talent, i) => (
        <Box key={i}>
          <TalentCard
            talent={talent}
          />
        </Box>
      ))}
    </Box>
  )
}

// vivi 单组件
export const TalentCard = ({ talent }) => {
  const [selectValue, setSelectValue] = useState(talent || '')
  const [talentName, setTalentName] = useState(talent)

  return (
    <>
      <PseudoBox
        d='flex'
        p={4}
        justifyContent='space-between'
        _hover={{ bg: 'blue.100', color: 'black' }}
      >
        <Editable
          ml={20}
          fontSize='2xl'
          value={talent.title}
          isPreviewFocusable={false}
          whiteSpace='nowrap'
          overflow='hidden'
          textOverflow='ellipsis'
          maxWidth='300px'
          p='5px 10px'
        >
          {({ isEditing, onRequestEdit, onSubmit }) => (
            <>
              <EditablePreview />
              <EditableInput w='auto' onChange={(e) => { setTalentName({ title: e.target.value }) }} />
              {!isEditing && (
                <IconButton
                  variantColor='cyan' variant='outline'
                  ml={5} size='sm' icon='edit' onClick={onRequestEdit}
                />
              )}
            </>
          )}
        </Editable>
        <Editable
          ml={20}
          fontSize='2xl'
          value={talent.content}
          isPreviewFocusable={false}
          whiteSpace='nowrap'
          overflow='hidden'
          textOverflow='ellipsis'
          maxWidth='300px'
          p='5px 10px'
        >
          {({ isEditing, onRequestEdit, onSubmit }) => (
            <>
              <EditablePreview />
              <EditableInput w='auto' onChange={(e) => { setTalentName({ content: e.target.value }) }} />
              {!isEditing && (
                <IconButton
                  variantColor='cyan' variant='outline'
                  ml={5} size='sm' icon='edit' onClick={onRequestEdit}
                />
              )}
            </>
          )}
        </Editable>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} width='30%'>
          <Box display='flex' alignItems='center'>
            <Icon name='delete' size='24px' cursor='pointer' />
          </Box>
          <Stack isInline>
            <Button
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'hidden'
              } bg='#9370DB' color='white' _hover='color:black'

            >確認修改
            </Button>
            <Button
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'hidden'
              }
              bg='#00B2EE' color='white' _hover='color:black'
            > 還原
            </Button>
          </Stack>
        </Grid>
      </PseudoBox>
    </>
  )
}
