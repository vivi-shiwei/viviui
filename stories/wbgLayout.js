import React from 'react'
import {
  Box,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  Checkbox
} from '@chakra-ui/core'
import { Formik, Form, Field } from 'formik'

import WhiteBoardPage from '../src/components/page'
import HeaderPage from '../src/components/page/headerPage'
import BackButton from '../src/components/page/backButton'
import SureButton from '../src/components/page/sureButton'
import DeleteRemind from '../src/components/page/deleteRemind'

import MyImage from '../static/QQ20200518181405.jpg'
export default {
  title: 'wbgLayout'
}
export const noProfilePhoto = () => {
  let initialValues = {}
  initialValues = {
    name: '2013', // Dashboard名字:  2020Dashboard
    isDefault: true// 是否為今個Dashboard, 不是今個Dashboard
  }
  const validateName = (value) => {
    return (!value) ? '該選項不可為空！' : ((value.length < 3) ? '長度不可短於三個字符！' : '')
  }
  return (
    <WhiteBoardPage
      title={
        <>
          <HeaderPage size='lg' as='h2' pt={4}>編輯 Dashboard</HeaderPage>
          <HeaderPage
            fontSize={{ base: '17px', md: '25px' }}
            mt={5}
          >
            聖若瑟教區中學第六校
          </HeaderPage>
        </>
      }
    >
      <Box as='article' px={{ base: 8, sm: 8, md: 16 }} pb={16}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, setFieldValue }) => {
            const { name, isDefault } = values
            const input = {
              name,
              isDefault
            }
            console.log(input)
            setSubmitting(false)
          }}
        >
          {({ props, isSubmitting, setFieldValue }) => (
            <Form>
              <Field name='name' validate={validateName}>
                {({ field, form }) => (
                  <FormControl mt={4} isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor='dashboard-name'>Dashborad 名稱</FormLabel>
                    <Input id='dashboard-name' {...field} />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='isDefault'>
                {({ field, form }) => (
                  <FormControl
                    mt={4}
                    display='flex'
                    alignItems='baseline'
                  >
                    <Checkbox id='is-default' {...field} defaultIsChecked={initialValues.isDefault} mr={4} />
                    <FormLabel htmlFor='is-default'>是否為今年 Dashborad</FormLabel>
                  </FormControl>
                )}
              </Field>
              <Box
                // display={{ base: 'block', sm: 'block', md: 'flex' }}
                // justifyContent='space-between'
                d='flex'
                justifyContent='space-between'
                flexDirection={{ base: 'column-reverse', md: 'initial' }}
              >
                <BackButton>返回</BackButton>
                <SureButton>確認</SureButton>
              </Box>
              <DeleteRemind title='刪除 Dashboard' content='删除 Dashborad 後后，將會清空該 Dashborad 的所有資料，該操作不能還原，請謹慎操作。'>
                <SureButton variantColor='red'>刪除</SureButton>
              </DeleteRemind>
            </Form>
          )}
        </Formik>

      </Box>
    </WhiteBoardPage>
  )
}
