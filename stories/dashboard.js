import React, { useState } from 'react'
import {
  Box,
  Button,
  Link,
  IconButton,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useDisclosure,
  Input
} from '@chakra-ui/core'

import Dashboards, { Card } from '../src/components/school/dashboardPage'
import NewModal from '../src/components/newModal'

import { GrUserAdmin } from 'react-icons/gr'
import NextLink from 'next/link'
import { Formik, Field, Form } from 'formik'

export default {
  title: 'DashboardPages'
}

export const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dashboards = (
    <Select placeholder='Select option' maxW='400px' mx={4}>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  )
  const classe = ['初中', '高中', '幼兒班', '甲板', '初中', '高中', '幼兒班', '甲板', '幼兒班', '甲板']
  const jiu = ['相簿', '九大智能']
  const schoolCard = (title, content) => {
    return (
      <>
        <Box
          as='article'
          w={{ base: '46%', sm: '31%', md: '23%', lg: '23%' }}
          bg='white'
          m={{ base: '2%', sm: '1%', md: '1%', lg: '1%' }}
          d='inline-block'
          position='relative'
          borderRadius='10px'
          shadow='2px 2px 6px 0px #b9b9b9'
          textAlign='left'
          h='120px'
        >
          <Box
            as='div'
            p='15px'
          >
            <Box
              as='h2'
              fontSize={{ base: '16px', sm: '18px', md: '20px' }}
              fontWeight='bold'
            >
              {title}
            </Box>
            <Box
              as='p'
              wordBreak='break-all'
              fontSize='13px'
            >
              {content || ''}
            </Box>
          </Box>
        </Box>
      </>
    )
  }
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />學校管理員
          </Link>
        </NextLink>
      }
      left={
        <>
          {isOpen && (
            <NewModal
              isOpen={isOpen}
              onClose={onClose}
              mdalHeader='新增學年'
            >
              <Formik
                initialValues={{
                  name: '',
                  englishName: '',
                  slug: ''
                }}
                onSubmit={(values, { setSubmitting, setFieldError }) => {
                  const { name, englishName, slug } = values
                  console.log(name, englishName, slug)
                  onClose()
                  setSubmitting(false)
                }}
              >
                {({ props, isSubmitting }) => (
                  <Form>
                    <Field name='name' validate={(name) => { return (!name) ? '該選項不可為空！' : ((name.length < 3) ? '長度不可短於三個字符！' : '') }}>
                      {({
                        field, // 包含field的onChange ， onBlur ， name和value的对象
                        form: { touched, errors }, // Formik袋
                        meta // 包含有关字段的元数据（即value ， touched ， error和initialValue ）的initialValue
                      }) =>
                        (
                          <FormControl pt={5} isInvalid={errors.name && touched.name}>
                            <FormLabel>班級名稱</FormLabel>
                            <Input maxWidth='98%' {...field} />
                            <FormErrorMessage>{errors.name}</FormErrorMessage>
                          </FormControl>
                        )}
                    </Field>
                    <Field name='englishName'>
                      {({
                        field,
                        form: { touched, errors },
                        meta
                      }) =>
                        (
                          <FormControl pt={5}>
                            <FormLabel>班級英文名稱</FormLabel>
                            <Input maxWidth='98%' {...field} />
                          </FormControl>
                        )}
                    </Field>
                    <Field name='slug'>
                      {({
                        field,
                        form: { touched, errors },
                        meta
                      }) =>
                        (
                          <FormControl pt={5}>
                            <FormLabel>班級代號</FormLabel>
                            <Input maxWidth='98%' {...field} />
                          </FormControl>
                        )}
                    </Field>
                    <Box textAlign='center'>
                      <Button
                        variantColor='blue'
                        minW={{ base: '100%', sm: '200px', md: '200px' }}
                        mr={3}
                        mt={8}
                        type='submit'
                        isLoading={isSubmitting}
                      >
                        添加
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </NewModal>
          )}
          <Button
            borderWidth='1px'
            minW={{ base: '80px', sm: '60px' }}
            onClick={onOpen}
          >
            新增
          </Button>
        </>
      }
      dashboards={dashboards}
      right={
        <IconButton
          icon='edit'
          variantColor='blue'
        />
      }
    >
      <Card
        title='聖若瑟教區中學第一校'
        plate={jiu.map((cls, i) => (
          schoolCard(cls)
        ))}
      />
      <Card
        title='班級'
        left='sdfs'
        plate={classe.map((cls, i) => (
          schoolCard(cls)
        ))}
      />
    </Dashboards>
  )
}
export const DashboardSelect = () => {
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />學校管理員
          </Link>
        </NextLink>
      }
      dashboards='可以改變dashboards的内容'
    />
  )
}
export const Admin = () => {
  const dashboards = (
    <Select placeholder='Select option' maxW='400px' mx={4}>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  )
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />Admin這個位置可以改變很多東西
          </Link>
        </NextLink>
      }
      left={<Button variantColor='blue'>新增</Button>}
      dashboards={dashboards}
      right={
        <IconButton
          icon='edit'
          variantColor='blue'
        />
      }
    />
  )
}

export const Title = () => {
  const dashboards = (
    <Select placeholder='Select option' maxW='400px' mx={4}>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  )
  return (
    <Dashboards
      left={<Button variantColor='blue'>新增</Button>}
      dashboards={dashboards}
      right={
        <IconButton
          icon='edit'
          variantColor='blue'
        />
      }
    >
      <Card title='大標題' />
    </Dashboards>
  )
}
export const noDivider = () => {
  const dashboards = (
    <Select placeholder='Select option' maxW='400px' mx={4}>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  )
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />管理員
          </Link>
        </NextLink>
      }

      left={<Button variantColor='blue'>新增</Button>}
      dashboards={dashboards}
      right={
        <IconButton
          icon='edit'
          variantColor='blue'
        />
      }
    >
      <Card title='旁邊的綫可以去掉' noDivider />
    </Dashboards>
  )
}
export const LeftandRight = () => {
  const dashboards = (
    <Select placeholder='Select option' maxW='400px' mx={4}>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  )
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />管理員
          </Link>
        </NextLink>
      }
      left={<Button variantColor='blue'>新增</Button>}
      dashboards={dashboards}
      right={
        <IconButton
          icon='edit'
          variantColor='blue'
        />
      }
    >
      <Card title='聖若瑟學校' left='左邊的東西可以添加' right='右邊的東西可以添加' />
    </Dashboards>
  )
}
export const Left = () => {
  const dashboards = (
    <Select placeholder='Select option' maxW='400px' mx={4}>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  )
  const plate = (
    <>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
    </>
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onco, setonco } = useState()
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />管理員
          </Link>
        </NextLink>
      }
      left={<Button variantColor='blue'>新增</Button>}
      dashboards={dashboards}
      right={
        <IconButton
          icon='edit'
          variantColor='blue'
        />
      }
    >
      <Card
        title='聖若瑟學校'
        plate={plate}
      />
      <Card
        title='班級' left={
          <>
            {isOpen && (
              <NewModal
                isOpen={isOpen}
                onClose={onco}
                mdalHeader='新增班級'
              >
                <Formik
                  initialValues={{
                    name: 'vivi',
                    englishName: 'vivi',
                    slug: 'vivi'
                  }}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    const { name, englishName, slug } = values
                    console.log(name, englishName, slug)
                    setonco(onClose)
                    setSubmitting(false)
                  }}
                >
                  {({ props, isSubmitting }) => (
                    <Form>
                      <Field name='name' validate={(name) => (!name) ? '該選項不可為空！' : ((name.length < 3) ? '長度不可短於三個字符！' : '')}>
                        {({
                          field, // 包含field的onChange ， onBlur ， name和value的对象
                          form: { touched, errors }, // Formik袋
                          meta // 包含有关字段的元数据（即value ， touched ， error和initialValue ）的initialValue
                        }) =>
                          (
                            <FormControl pt={5} isInvalid={errors.name && touched.name}>
                              <FormLabel>班級名稱</FormLabel>
                              <Input maxWidth='98%' {...field} />
                              <FormErrorMessage>{errors.name}</FormErrorMessage>
                            </FormControl>
                          )}
                      </Field>
                      <Field name='englishName'>
                        {({
                          field,
                          form: { touched, errors },
                          meta
                        }) =>
                          (
                            <FormControl pt={5}>
                              <FormLabel>班級英文名稱</FormLabel>
                              <Input maxWidth='98%' {...field} />
                            </FormControl>
                          )}
                      </Field>
                      <Field name='slug'>
                        {({
                          field,
                          form: { touched, errors },
                          meta
                        }) =>
                          (
                            <FormControl pt={5}>
                              <FormLabel>班級代號</FormLabel>
                              <Input maxWidth='98%' {...field} />
                            </FormControl>
                          )}
                      </Field>
                      <Box textAlign='center'>
                        <Button
                          variantColor='blue'
                          minW={{ base: '100%', sm: '200px', md: '200px' }}
                          mr={3}
                          mt={8}
                          type='submit'
                          isLoading={isSubmitting}
                        >
                          添加
                        </Button>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </NewModal>
            )}
            <Button
              borderWidth='1px'
              minW={{ base: '80px', sm: '60px' }}
              onClick={onOpen}
            >
              新增
            </Button>
          </>
        }
        plate={plate}
      />
      <Card title='可以' left={<Button variantColor='blue'>新增</Button>} plate={plate} />
      <Card title='聖若瑟學校' left={<Button variantColor='blue'>新增</Button>} plate={plate} />
    </Dashboards>
  )
}
export const Plate = () => {
  const dashboards = (
    <Select placeholder='Select option' maxW='400px' mx={4}>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  )
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />管理員
          </Link>
        </NextLink>
      }
      left={<Button variantColor='blue'>新增</Button>}
      dashboards={dashboards}
      right={
        <IconButton
          icon='edit'
          variantColor='blue'
        />
      }
    >
      <Card title='大標題' plate='裏面的數據自定義' />
    </Dashboards>
  )
}
