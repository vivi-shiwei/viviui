import React from 'react'
import {
  Box,
  Button,
  Link,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/core'
import { Formik, Field, Form } from 'formik'
import Admin from '../src/components/adminPage'
import NextLink from 'next/link'
import SchooluserList from '../src/components/schooluserListPage'
import AdminList from '../src/components/adminListPage'
import { FaSchool, FaUserEdit } from 'react-icons/fa'
import { AiTwotoneSetting } from 'react-icons/ai'

import MyImage from '../static/QQ20200518181405.jpg'
import MyImage6 from '../static/timg.jpg'
export default {
  title: 'Admin'
}
export const editSchool = () => {
  const validateName = (value) => {
    return (!value) ? '該選項不可為空！' : ((value.length < 3) ? '長度不可短於三個字符！' : '')
  }
  const validateSlug = (value) => {
    return (!value) ? '該選項不可為空！' : ''
  }
  const initialValues = {
    name: '聖若瑟', // 學校名字
    englishName: 'school', // 学校英文名
    slug: '黑鷹' // 學校代号
  }
  return (
    <Admin backurl='sjdoijoijd' title='編輯學校'>
      <Box as='article' px={{ base: 8, sm: 8, md: 16 }} pb={16}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            setTimeout(() => {
              alert('哈哈')
              setSubmitting(false)
            }, 500)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name='name' validate={validateName}>
                {({ field, form: { errors, touched } }) => (
                  <FormControl mt={4} isInvalid={errors.name && touched.name}>
                    <FormLabel>學校名稱</FormLabel>
                    <Input {...field} />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='englishName'>
                {({ field, form }) => (
                  <FormControl mt={4}>
                    <FormLabel htmlFor='school-englishName'>學校英文名</FormLabel>
                    <Input id='school-englishName' {...field} />
                  </FormControl>
                )}
              </Field>
              <Field name='slug' validate={validateSlug}>
                {({ field, form: { errors, touched } }) => (
                  <FormControl mt={4} isInvalid={errors.slug && touched.slug}>
                    <FormLabel>學校代號</FormLabel>
                    <Input {...field} />
                    <FormErrorMessage>{errors.slug}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Box
                d='flex'
                justifyContent='space-between'
                flexDirection={{ base: 'column-reverse', md: 'initial' }}
              >
                <NextLink
                  href='#'
                >
                  <Link _hover={{ textDecoration: 'none' }}>
                    <Button
                      backgroundColor='#c2c2c2'
                      minW={{ base: '100%', sm: '100%', md: '200px' }}
                      mr={3}
                      mt={8}
                      color='white'
                      _hover={{
                        backgroundColor: '#b8b8b8'
                      }}
                      _focus={{
                        boxShadow: '0 0 0 3px rgba(175, 175, 175, 0.6)'
                      }}
                    >
                      返回
                    </Button>
                  </Link>
                </NextLink>
                <Button
                  variantColor='blue'
                  type='submit'
                  minW={{ base: '100%', sm: '100%', md: '200px' }}
                  mr={3}
                  mt={8}
                  disabled={isSubmitting}
                >
                  確認
                </Button>
              </Box>
              <Box border='1px solid #FED7D7' background='#FFF5F5' rounded={4} mt={20} p={5}>
                <Box>
                  <Heading as='h4' size='md'>
                    删除這個學校
                  </Heading>
                  <Box mt={4}>删除學校後，將會清空該學校成員，該操作不能還原，請謹慎操作。</Box>
                </Box>
                <Divider />
                <Box textAlign='right'>
                  <Button
                    variantColor='red'
                    minW={{ base: '100%', md: '180px' }}
                    mr={3}
                    mt={4}
                  >
                    删除
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Admin>
  )
}
export const noFormik = () => {
  return (
    <Admin backurl='sjdoijoijd' title='編輯學校' />
  )
}

export const noTitle = () => {
  return (
    <Admin backurl='這裏可以隨意改變' />
  )
}

export const Users = () => {
  const schoolusers = [
    {
      profilePhoto: MyImage,
      name: 'vivi',
      isAdmin: false,
      isDirector: false,
      isTeacher: true,
      isStudent: false,
      idiograph: '这是一个老师',
      currentClsMember: {
        num: 1,
        cls: {
          name: '交給'
        }
      }
    },
    {
      profilePhoto: MyImage,
      name: 'vivi1',
      isAdmin: false,
      isDirector: false,
      isTeacher: false,
      isStudent: true,
      idiograph: '这是一个学生',
      currentClsMember: {
        num: 3,
        cls: {
          name: '幼兒'
        }
      }
    },
    {
      profilePhoto: MyImage,
      name: 'vivi2',
      isAdmin: false,
      isDirector: false,
      isTeacher: false,
      isStudent: true,
      idiograph: '这是一个学生',
      currentClsMember: {
        num: 6,
        cls: {
          name: '交給'
        }
      }
    },
    {
      profilePhoto: MyImage,
      name: 'vivi3',
      isAdmin: false,
      isDirector: false,
      isTeacher: false,
      isStudent: true,
      idiograph: '这是一个学生',
      currentClsMember: {
        num: 9,
        cls: {
          name: '二點'
        }
      }
    },
    {
      profilePhoto: MyImage,
      name: 'vivi9',
      isAdmin: false,
      isDirector: true,
      isTeacher: false,
      isStudent: false,
      idiograph: '这是一个班级负责人',
      currentClsMember: {
        num: 1,
        cls: {
          name: '二點'
        }
      }
    },
    {
      profilePhoto: MyImage,
      name: 'vivi10',
      isAdmin: true,
      isDirector: false,
      isTeacher: false,
      isStudent: false,
      idiograph: '这是一个管理员',
      currentClsMember: {
        num: 3,
        cls: {
          name: '二點'
        }
      }
    },
    {
      profilePhoto: MyImage,
      name: 'vivi10',
      isAdmin: false,
      isDirector: false,
      isTeacher: true,
      isStudent: false,
      idiograph: '这是一个老师',
      currentClsMember: {
        num: 6,
        cls: {
          name: '二點'
        }
      }
    },
    {
      profilePhoto: MyImage,
      name: 'vivi4',
      isAdmin: false,
      isDirector: false,
      isTeacher: false,
      isStudent: true,
      idiograph: '这是一个学生',
      currentClsMember: {
        num: 4,
        cls: {
          name: '交給'
        }
      }
    },
    {
      profilePhoto: MyImage6,
      name: 'vivi5',
      isAdmin: false,
      isDirector: false,
      isTeacher: false,
      isStudent: true,
      idiograph: '这是一个学生',
      currentClsMember: {
        num: 9,
        cls: {
          name: '交給'
        }
      }
    },
    {
      profilePhoto: MyImage,
      name: 'vivi6',
      isAdmin: false,
      isDirector: false,
      isTeacher: false,
      isStudent: true,
      idiograph: '这是一个学生',
      currentClsMember: {
        num: 20,
        cls: {
          name: '交給'
        }
      }
    },
    {
      profilePhoto: MyImage,
      name: 'vivi7',
      isAdmin: false,
      isDirector: false,
      isTeacher: false,
      isStudent: true,
      idiograph: '这是一个学生',
      currentClsMember: {
        num: 4,
        cls: {
          name: '交給'
        }
      }
    },
    {
      profilePhoto: MyImage6,
      name: 'vivi8',
      isAdmin: false,
      isDirector: false,
      isTeacher: false,
      isStudent: true,
      idiograph: '这是一个学生',
      currentClsMember: {
        num: 8,
        cls: {
          name: '交給'
        }
      }
    },
    {
      profilePhoto: MyImage6,
      name: 'vivi9',
      isAdmin: false,
      isDirector: false,
      isTeacher: false,
      isStudent: true,
      idiograph: '这是一个学生',
      currentClsMember: {
        num: 2,
        cls: {
          name: ''
        }
      }
    }
  ]

  return (
    <Admin backurl='sjdoijoijd' title='學校用戶' noDivider>
      <Box
        py={4}
        flex='1'
        d='flex'
        flexDirection='column'
      >
        <Box position='relative' mb='10px'>
          <Menu>
            <MenuButton
              as={Button}
              variantColor='blue'
              position='absolute'
              bottom='10px'
              left='0px'
              top='66%'
              transform='translate(11px, -50%)'
              rightIcon='chevron-down'
            >
              新 增
            </MenuButton>
            <MenuList ml={{ md: '6%' }}>
              <MenuItem>新增學生</MenuItem>
              <MenuItem>新增老師</MenuItem>
              <MenuItem>新增學校負責人</MenuItem>
              <MenuItem>新增學校管理員</MenuItem>
            </MenuList>
          </Menu>
          {/* <Divider mb={3} mt={8} /> */}
        </Box>
        <Box
          flex='1'
          display='flex'
          flexDirection='column'
          mt={3}
        >
          <Tabs
            display='flex'
            flexDirection='column'
            flex='1'
          >
            <TabList>
              <Tab>全部</Tab>
              <Tab>學生</Tab>
              <Tab>老師</Tab>
              <Tab>負責人</Tab>
              <Tab>管理員</Tab>
              <Tab>已封存學生</Tab>
              <Tab>已封存老師</Tab>
            </TabList>

            <TabPanels flex='1' position='relative'>
              <TabPanel
                position='absolute'
                top='0px'
                left='0px'
                bottom='0px'
                right='0px'
                // overflow='hidden'
                my={5}
              >
                {schoolusers.map(item => {
                  return (
                    <SchooluserList
                      key={item}
                      name={item.name}
                      profilePhoto={item.profilePhoto}
                      isTeacher={item.isTeacher}
                      isAdmin={item.isAdmin}
                      isDirector={item.isDirector}
                      currentClsMember={item.currentClsMember}
                      isStudent={item.isStudent}
                      clsName={item.currentClsMember.cls.name}
                      currentClsMemberNum={item.currentClsMember.num}
                    />
                  )
                }
                )}
              </TabPanel>

              <TabPanel
                position='absolute'
                top='0px'
                left='0px'
                bottom='0px'
                right='0px'
                // overflow='hidden'
                my={5}
              >
                {schoolusers.map(item => {
                  return (
                    (item.isStudent) ? (
                      <SchooluserList
                        key={item}
                        name={item.name}
                        profilePhoto={item.profilePhoto}
                        isTeacher={item.isTeacher}
                        isAdmin={item.isAdmin}
                        isDirector={item.isDirector}
                        currentClsMember={item.currentClsMember}
                        isStudent={item.isStudent}
                        clsName={item.currentClsMember.cls.name}
                        currentClsMemberNum={item.currentClsMember.num}
                      />) : (<Box>fetfretrwet</Box>)
                  )
                }
                )}
              </TabPanel>

              <TabPanel
                position='absolute'
                top='0px'
                left='0px'
                bottom='0px'
                right='0px'
                // overflow='hidden'
                my={5}
              >
                {schoolusers.map(item => {
                  return (
                    (item.isTeacher && !item.isStudent) ? (
                      <SchooluserList
                        key={item}
                        name={item.name}
                        profilePhoto={item.profilePhoto}
                        isTeacher={item.isTeacher}
                        isAdmin={item.isAdmin}
                        isDirector={item.isDirector}
                        currentClsMember={item.currentClsMember}
                        isStudent={item.isStudent}
                        clsName={item.currentClsMember.cls.name}
                        currentClsMemberNum={item.currentClsMember.num}
                      />) : ''
                  )
                }
                )}
              </TabPanel>

              <TabPanel
                position='absolute'
                top='0px'
                left='0px'
                bottom='0px'
                right='0px'
                overflow='hidden'
                my={5}
              >
                {schoolusers.map(item => {
                  return (
                    (item.isDirector && !item.isStudent) ? (
                      <SchooluserList
                        key={item}
                        name={item.name}
                        profilePhoto={item.profilePhoto}
                        isTeacher={item.isTeacher}
                        isAdmin={item.isAdmin}
                        isDirector={item.isDirector}
                        currentClsMember={item.currentClsMember}
                        isStudent={item.isStudent}
                        clsName={item.currentClsMember.cls.name}
                        currentClsMemberNum={item.currentClsMember.num}
                      />) : ''
                  )
                }
                )}
              </TabPanel>

              <TabPanel
                position='absolute'
                top='0px'
                left='0px'
                bottom='0px'
                right='0px'
                // overflow='hidden'
                my={5}
              >
                {schoolusers.map(item => {
                  return (
                    (item.isAdmin && !item.isStudent) ? (
                      <SchooluserList
                        key={item}
                        name={item.name}
                        profilePhoto={item.profilePhoto}
                        isTeacher={item.isTeacher}
                        isAdmin={item.isAdmin}
                        isDirector={item.isDirector}
                        currentClsMember={item.currentClsMember}
                        isStudent={item.isStudent}
                        clsName={item.currentClsMember.cls.name}
                        currentClsMemberNum={item.currentClsMember.num}
                      />) : ''
                  )
                }
                )}
              </TabPanel>

              <TabPanel
                position='absolute'
                top='0px'
                left='0px'
                bottom='0px'
                right='0px'
                overflow='hidden'
                my={5}
              >
                {schoolusers.map(item => {
                  return (
                    (item.archiveIsStudent && !item.isStudent) ? (
                      <SchooluserList
                        key={item}
                        name={item.name}
                        profilePhoto={item.profilePhoto}
                        isTeacher={item.isTeacher}
                        isAdmin={item.isAdmin}
                        isDirector={item.isDirector}
                        currentClsMember={item.currentClsMember}
                        isStudent={item.isStudent}
                        clsName={item.currentClsMember.cls.name}
                        currentClsMemberNum={item.currentClsMember.num}
                      />) : ''
                  )
                }
                )}
              </TabPanel>
              <TabPanel
                position='absolute'
                top='0px'
                left='0px'
                bottom='0px'
                right='0px'
                // overflow='hidden'
                my={5}
              >
                {schoolusers.map(item => {
                  return (
                    (item.archiveIsTeacher && !item.isStudent) ? (
                      <SchooluserList
                        key={item}
                        name={item.name}
                        profilePhoto={item.profilePhoto}
                        isTeacher={item.isTeacher}
                        isAdmin={item.isAdmin}
                        isDirector={item.isDirector}
                        currentClsMember={item.currentClsMember}
                        isStudent={item.isStudent}
                        clsName={item.currentClsMember.cls.name}
                        currentClsMemberNum={item.currentClsMember.num}
                      />) : ''
                  )
                }
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Admin>
  )
}

export const isAdmin = () => {
  const adminFunc = [
    {
      title: '修改學校',
      href: '#',
      icon: FaSchool
    },
    {
      title: '新增/刪除學校用戶',
      href: '#',
      icon: FaUserEdit
    },
    {
      title: '新增/修改專長設定',
      href: '#',
      icon: AiTwotoneSetting
    }
  ]
  return (
    <Admin backurl='sjdoijoijd' title='管理員' noDivider>
      <AdminList title='你是一個管理員, 可以擁有以下操作…'>
        <List spacing={3}>
          {
            adminFunc.map((item, index) => (
              <ListItem className='admin-list-item' key={index}>
                <NextLink href='#'>
                  <Link
                    d='flex'
                    alignItems='center'
                    _hover={{
                      textDecoration: 'none'
                    }}
                    color='#316bc3'
                  >
                    <ListIcon
                      icon={item.icon}
                      fontSize={{ base: '23px', md: '26px' }}
                    />
                    <Box
                      w={{ base: 'calc(100% - 32px)', md: 'calc(100% - 35px)' }}
                      borderBottom='1px solid #ededed'
                      p={2}
                    >{item.title}
                    </Box>
                  </Link>
                </NextLink>
              </ListItem>
            ))
          }
        </List>
      </AdminList>
    </Admin>
  )
}
