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
export const ProgramaOne = ({ title, icon, content, color, fontSize, children, ...props }) => {
  const obj = { title: title, content: content }
  const [begin, setBegin] = useState(obj || '')
  const [finish, setFinish] = useState(obj)

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
          <EditableInput onChange={(e) => { }} />
          <IconButton
            // position='relative' top='0px' right='-150px'
            variantColor='green.600' variant='outline'
            ml={5} size='xs' icon='edit' onClick={onRequestEdit}
          />
        </>
      )}

    </Editable>
  )
}

// Programa Left
export const ProgramaLeftButton = () => {
  return (
    <Stack
      isInline
      visibility='' display='block'
    >
      <Button bg='#9370DB' color='white' _hover='color:black'>確認修改</Button>
      <Button bg='#00B2EE' color='white' _hover='color:black'>還原</Button>
    </Stack>
  )
}
// Programa right
export const ProgramaRightButton = () => {
  return (
    <Stack
      isInline
      visibility='' display='block'
    >
      <Button bg='#9370DB' color='white' _hover='color:black'>確認修改</Button>
      <Button bg='#00B2EE' color='white' _hover='color:black'>還原</Button>
    </Stack>
  )
}

// Editable組
export const ProgramaGroup = ({ title, visibilit, content, contentColor, children, deleteColor, deleteButtonTop = true, isBottomBorder, gap, ...props }) => {
  return (
    <>
      <Box mx='auto'>
        <Flex alignItems='center' justifyContent='space-between'>
          <Grid templateColumns='repeat(1, 1fr)' gap={0} m='10px' width='40%'>
            <ProgramaOne title={title} c color='#1E90FF' fontSize='24px' />
            <ProgramaOne content={content} color='#8B814C' fontSize='18px' />
          </Grid>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} width='30%'>
            <Box display='flex' alignItems='center'>
              <Icon name='delete' size='24px' color={deleteColor} cursor='pointer' />
            </Box>
            <Button bg='#9370DB' color='white' _hover='color:black'>確認修改</Button>
            <Button bg='#00B2EE' color='white' _hover='color:black'>還原</Button>
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
    <Box mx='auto' bg='#ceedff'>
      <Flex alignItems='center' justifyContent='space-between'>
        <Grid templateColumns='repeat(1, 1fr)' gap={0} m='10px' width='30%'>
          <Input variant='outline' placeholder='新增智能名稱' mb='5px' ref={ref1} value={obj.title} />
          <Input variant='outline' placeholder='新增英文智能名稱' ref={ref2} value={obj.content} />
        </Grid>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} width='30%'>
          <Button bg='#9370DB' color='white' _hover='color:black' p='0px 50px' onClick={() => { obj.title = ref1.current.value; obj.content = ref2.current.value; console.log(obj) }}>送出資料</Button>
          <Button bg='#00B2EE' color='white' _hover='color:black' p='0px 20px' onClick={() => { ming() }}>取消</Button>
        </Grid>
      </Flex>
    </Box>
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

// Editable單個 数据测试
export const ProgramaOneData = ({ title, icon, content, color, fontSize, children, ...props }) => {
  const arr = ['啊打发士大夫的', '啊手动阀第三方', '士大夫撒旦']
  const string = '为繁荣发达'
  const [s, sets] = useState(string || '')
  const [ming, setMing] = useState(string)
  return (
    <PseudoBox>
      <Editable
        textAlign='left'
        fontSize={fontSize}
        color={color}
        whiteSpace='nowrap'
        overflow='hidden'
        value={ming}
        textOverflow='ellipsis'
        p='5px 10px'
        isPreviewFocusable={false}
      >
        {({ isEditing, onSubmit, onRequestEdit, onChange }) => (
          <>
            <EditablePreview />
            <EditableInput onChange={(e) => { setMing(e.target.value); console.log(ming) }} />
            <IconButton
              // position='relative' top='0px' right='-150px'
              variantColor='green.600' variant='outline'
              ml={5} size='xs' icon='edit' onClick={onRequestEdit}
            />
          </>
        )}
      </Editable>
      <ProgramaGroup
        visibilit={
          ((ming !== s && s !== '') || ming !== string)
            ? 'visible'
            : 'hidden'
        }
      />
    </PseudoBox>
  )
}
// vivi组件更改
export const ViviProgramaOne = () => {
  const talents = ['efeiohf']
  const TalentCard = ({ talent }) => {
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
            value={talentName}
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
                <EditableInput w='auto' onChange={(e) => { setTalentName(e.target.value) }} />
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
  return (
    <Box mt={3}>
      {talents.map((talent, i) => (
        <Box key={i}>
          <TalentCard
            talent={talent}

          />
        </Box>
      ))}
    </Box>
  )
}
