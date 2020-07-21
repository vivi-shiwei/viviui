import React, { useState, useRef, useRouter } from 'react'
import {
  Box,
  Input,
  Icon,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Flex,
  Grid,
  Button,
  PseudoBox,
  useToast,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/core'
import { Container } from '../containerPage'
import Admin from '../admin/adminPage'
import { Formik, Field, Form } from 'formik'

// Editable单个编辑
export const ProgramaOne = ({ title, content, color, fontSize, children, ...props }) => {
  const str = '你好'
  const [talentName, setTalentName] = useState(str)
  const [two, setTwo] = useState(talentName)
  return (
    <Box>
      <Editable
        ml={20}
        fontSize='2xl'
        defaultValue={talentName}
        isPreviewFocusable={false}
        submitOnBlur={false}
      >
        {({ isEditing, onRequestEdit, onSubmit }) => (
          <>
            <EditablePreview />
            <EditableInput w='auto' onChange={(e) => { setTwo(e.target.value); console.log(talentName) }} />
            {!isEditing && (
              <IconButton
                variantColor='cyan' variant='outline'
                ml={5} size='sm' icon='edit' onClick={onRequestEdit}
              />
            )}
          </>
        )}
      </Editable>
    </Box>
  )
}

// 智能编辑
export const EditIntelligence = ({ talent, deleteColor, deleteButtonTop = true, children, ...props }) => {
  // 使用useState
  const [selectValue, setSelectValue] = useState(talent || '') // 传入开始值
  const [talentName, setTalentName] = useState(talent) // 修改后的值
  // 使用对象
  const beginObj = { title: talent.title, content: talent.content }
  const endObj = { title: '', content: '' }
  return (
    <>
      <Box mx='auto'>
        <Flex alignItems='center' justifyContent='space-between'>
          <Grid templateColumns='repeat(1, 1fr)' width='40%'>
            <Editable
              textAlign='left'
              fontSize={{ base: '14px', sm: '14px', md: '24px' }}
              color='#2f98ff'
              p='5px 10px'
              whiteSpace='nowrap'
              overflow='hidden'
              textOverflow='ellipsis'
              defaultValue={selectValue.title}

            >
              {({ isEditing, onSubmit, onRequestEdit, onChange }) => (
                <>
                  <EditablePreview as='flex' alignItems='center' justifyContent='space-between' />
                  <EditableInput onChange={(e) => { setTalentName({ title: e.target.value }); console.log(endObj.title = e.target.value) }} />
                  <IconButton
                    variantColor='green.600' variant='outline'
                    size='xs' icon='edit' onClick={onRequestEdit}
                  />
                </>
              )}
            </Editable>
            <Editable
              textAlign='left'
              fontSize={{ base: '14px', sm: '14px', md: '24px' }}
              defaultValue={selectValue.content}
              color='#8b814c'
              whiteSpace='nowrap'
              overflow='hidden'
              textOverflow='ellipsis'
              p='5px 10px'
            >
              {({ isEditing, onSubmit, onRequestEdit, onChange }) => (
                <>
                  <EditablePreview />
                  <EditableInput onChange={(e) => { setTalentName({ content: e.target.value }); console.log(endObj.content = e.target.value) }} />
                  <IconButton
                    variantColor='green.600' variant='outline'
                    size='xs' icon='edit' onClick={onRequestEdit}
                  />
                </>
              )}
            </Editable>
          </Grid>
          <Box width='32%' display='flex' alignItems='center' justifyContent='space-around' mr={{ base: '5px', sm: '5px', md: '0' }}>
            <Box display='flex' alignItems='center'>
              <Icon name='delete' size='24px' color='#696969' cursor='pointer' onClick={() => { console.log('删除') }} />
            </Box>
            <Button
              bg='#9370DB' color='white' _hover='color:black' fontSize={{ base: '12px', sm: '12px', md: '16px' }} m={{ base: '5px', sm: '5px' }}
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'visible'
              }
              onClick={() => {
                console.log('确认修改')
              }}
            >確認
            </Button>
            <Button
              bg='#00B2EE' color='white' _hover='color:black' fontSize={{ base: '12px', sm: '12px', md: '16px' }}
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'visible'
              }
              onClick={() => {
                console.log('还原')
              }}
            >還原
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

// 智能编辑分解

export const confirmButton = ({ talent, selectValue, talentName, ...props }) => {
  return (
    <Button
      bg='#9370DB' color='white' _hover='color:black' fontSize={{ base: '12px', sm: '12px', md: '16px' }} m={{ base: '5px', sm: '5px' }}
      visibility={
        ((talent !== selectValue && selectValue !== '') || talentName !== talent)
          ? 'visible'
          : 'visible'
      }
      onClick={() => {
        console.log('确认修改')
      }}
    >確認
    </Button>
  )
}

export const CancelButton = ({ talent, selectValue, talentName, ...props }) => {
  return (
    <Button
      bg='#00B2EE' color='white' _hover='color:black' fontSize={{ base: '12px', sm: '12px', md: '16px' }}
      visibility={
        ((talent !== selectValue && selectValue !== '') || talentName !== talent)
          ? 'visible'
          : 'visible'
      }
      onClick={() => {
        console.log('还原')
      }}
    >還原
    </Button>
  )
}

// 智能添加
export const AddIntelligence = ({ submitButton, cancelButton, ...props }) => {
  const toast = useToast()
  const validateName = (value) => {
    let error
    if (!value) {
      error = '内容不能为空'
    } else if (value.length < 3) {
      error = '长度不能少于2个'
    }
    return error
  }
  return (
    <PseudoBox
      _hover={{ backgroundColor: '#ceedff' }} cursor='pointer' p={{ base: '20px', sm: '20px', md: '10px' }}
    >
      <Formik
        initialValues={{ name1: '', name2: '' }}
        onSubmit={(values, actions) => {
          toast({
            position: 'top',
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true
          })
          console.log(values.name1, values.name2)
          actions.setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form p='5px 0'>
            <Flex direction={{ base: 'column', md: 'row' }} alignItems='center' justifyContent={{ md: 'space-between', base: 'flex-start' }}>
              <Grid width={{ base: '100%', md: '60%' }} templateColumns='repeat(1, 1fr)' gap={4}>
                <Field name='name1' validate={validateName}>
                  {({ field, form: { errors, touched } }) => (
                    <FormControl isInvalid={errors.name1 && touched.name1}>
                      <Input placeholder='新增智能名称' {...field} />
                      <FormErrorMessage>{errors.name1}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='name2' validate={validateName}>
                  {({ field, form: { errors, touched } }) => (
                    <FormControl isInvalid={errors.name2 && touched.name2}>
                      <Input placeholder='新增智能英文名称' {...field} />
                      <FormErrorMessage>{errors.name2}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Grid>
              <Grid width={{ base: '100%', md: '30%' }} mt={{ base: '20px', md: '0' }} templateColumns='repeat(2, 1fr)' gap={8}>
                <Button isLoading={props.isSubmitting} variantColor='green' type='submit'> {submitButton || '送出资料'} </Button>
                <Button onClick={() => { props.onClose() }} variantColor='green'>{cancelButton || '取消'} </Button>
              </Grid>
            </Flex>
          </Form>

        )}
      </Formik>
    </PseudoBox>
  )
}
