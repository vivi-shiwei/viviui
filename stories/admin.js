import React, { useState } from 'react'
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
  ListIcon,
  IconButton,
  Image,
  Tag,
  Editable,
  EditablePreview,
  EditableInput,
  Select,
  Stack,
  PseudoBox
} from '@chakra-ui/core'
import { Formik, Field, Form } from 'formik'
import Admin from '../src/components/admin/adminPage'
import NextLink from 'next/link'
import AdminList from '../src/components/admin/adminListPage'
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
    <Admin backurl='sjdoijoijd' title='編輯學校' noDivider>
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
    <Admin backurl='sjdoijoijd' title='編輯學校' noDivider />
  )
}

export const noTitle = () => {
  return (
    <Admin backurl='這裏可以隨意改變' />
  )
}

export const Users = () => {
  const SchooluserList = ({ deleteButton = false, editButton = false, profilePhoto, isTeacher, isAdmin, isDirector, noDivider = false, currentClsMember, isStudent, name, clsName, currentClsMemberNum, children, ...props }) => {
    return (
      <Box>
        <Box d='flex' justifyContent='space-between' px={{ base: '1.25rem', sm: '1.25rem', md: '1.25rem', lg: 0 }} {...props}>
          <Box d='flex'>
            {!!profilePhoto && (
              <Box
                width='40px'
                height='40px'
                borderRadius='50%'
                overflow=' hidden'
                rounded='full'
                background='#6893d1'
                mr={4}
                lineHeight='40px'
                fontSize='15px'
                fontWeight='500'
                textAlign='center'
              >
                <Image
                  src={profilePhoto}
                  size='100%'
                  objectFit='cover'
                />
              </Box>
            )}
            {(!!name || !!isTeacher || !!isAdmin || !!isDirector || !!isTeacher || !!currentClsMember || !!clsName || !!currentClsMemberNum) && (
              <Box as='div' lineHeight='40px'>
                <Box as='div' d={{ base: 'block', sm: 'flex' }}>
                  姓名：{name}
                  <Box as='div'>
                    {isTeacher ? '（老師）' : (isAdmin ? '（管理員）' : (isDirector ? '（學校負責人）' : (isTeacher ? '（老師）' : '')))}
                    {/* {isAdmin ? '（管理員）' : (isDirector ? '（學校負責人）' : (isTeacher ? '（老師）' : ''))} */}
                    {isStudent ? (currentClsMember ? (<Box as='span' d={{ base: 'none', md: 'block' }}>（學生）</Box>) : (<Box as='span'>（學生）</Box>)) : ''}
                  </Box>
                </Box>
                {!isTeacher && (
                  <Box as='div' alignItems='center'>
                    <Box as='div'>{`班級：${clsName}`}</Box>
                    <Box as='div'>學號：{currentClsMemberNum}</Box>
                    <Box as='div' d={{ base: 'block', md: 'none' }}>（學生）</Box>
                  </Box>)}

              </Box>
            )}
          </Box>
          <Box d='flex'>
            {!editButton && (
              <IconButton
                icon='edit'
                variantColor='blue'
                mr={3}
              />
            )}
            {!deleteButton && (
              <IconButton
                variantColor='red'
                icon='delete'
              />
            )}
          </Box>
        </Box>
        {children}
        {!noDivider && <Divider my={6} />}

      </Box>
    )
  }
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
    <Admin backurl='sjdoijoijd' title='學校用戶'>
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
      title: '學校用戶',
      href: '#',
      icon: FaUserEdit
    },
    {
      title: '專長設定',
      href: '#',
      icon: AiTwotoneSetting
    }
  ]
  return (
    <Admin backurl='sjdoijoijd' title='管理員'>
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

export const Specialty = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const talents = ['efeiohf', 'efeff', 'efef']
  const tabNames = [
    '所有專長', '未選擇智能',
    '個人内省', '視覺空間',
    '數學邏輯', '自然探索',
    '人際溝通', '語言能力',
    '肢體動覺', '音樂旋律',
    '存在思考', '不分類'
  ]
  const intelligences = [
    '個人内省', '視覺空間',
    '數學邏輯', '自然探索',
    '人際溝通', '語言能力',
    '肢體動覺', '音樂旋律',
    '存在思考'
  ]
  const TalentCard = ({ talent, intelligences }) => {
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
            submitOnBlur={false}
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

          <Stack isInline>
            <Select value={selectValue} placeholder='未選擇智能' onChange={(e) => { setSelectValue(e.currentTarget.value) }}>
              {intelligences.map((intelligence, i) => (
                <option value={i} key={i}>
                  {intelligence}
                </option>
              ))}
              <option value='non' key='non'>
                不分類
              </option>
            </Select>

            <Button
              w='35%'
              variantColor='teal'
              ml={5}
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'hidden'
              }
              onClick={() => {
                console.log('haha')
              }}
            >
              確認修改
            </Button>

            <Button
              variantColor='blue'
              ml={3}
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'hidden'
              }
              onClick={() => {
                setSelectValue(talent.intelligenceId || '')
                setTalentName(talent.name)
              }}
            >
              還原
            </Button>
          </Stack>

        </PseudoBox>
      </>
    )
  }
  return (
    <Admin
      backurl='sjdoijoijd'
      button={
        <Box d='flex' justifyContent='center' p={4}>
          <Button
            variant='outline'
            variantColor='green'
          >
            新增特長
          </Button>
        </Box>
      }
      tabNames={
        tabNames.map((tabName, i) => (
          <Tag
            key={i}
            cursor='pointer'
            onClick={() => { setTabIndex(i) }}
            rounded='full'
            variant={i === tabIndex ? 'solid' : 'outline'}
            variantColor={i === tabIndex ? 'green' : 'cyan'}
            m={2}
          >
            {tabName}
          </Tag>
        ))
      }
    >
      <Box mt={3}>
        {talents.map((talent, i) => (
          <Box key={i}>
            <TalentCard
              talent={talent}
              intelligences={intelligences}
            />
          </Box>
        ))}
      </Box>
    </Admin>
  )
}
export const Nobutton = () => {
  return (
    <Admin
      backurl='這裏放返回鏈接'
      tabNames='沒有title中的樣式時'
    />
  )
}
export const NoTabNames = () => {
  const talents = ['efeiohf', 'efeff', 'efef']
  const intelligences = [
    '個人内省', '視覺空間',
    '數學邏輯', '自然探索',
    '人際溝通', '語言能力',
    '肢體動覺', '音樂旋律',
    '存在思考'
  ]
  const TalentCard = ({ talent, intelligences }) => {
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
            submitOnBlur={false}
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

          <Stack isInline>
            <Select value={selectValue} placeholder='未選擇智能' onChange={(e) => { setSelectValue(e.currentTarget.value) }}>
              {intelligences.map((intelligence, i) => (
                <option value={i} key={i}>
                  {intelligence}
                </option>
              ))}
              <option value='non' key='non'>
                不分類
              </option>
            </Select>

            <Button
              w='35%'
              variantColor='teal'
              ml={5}
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'hidden'
              }
              onClick={() => {
                console.log('haha')
              }}
            >
              確認修改
            </Button>

            <Button
              variantColor='blue'
              ml={3}
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'hidden'
              }
              onClick={() => {
                setSelectValue(talent.intelligenceId || '')
                setTalentName(talent.name)
              }}
            >
              還原
            </Button>
          </Stack>

        </PseudoBox>
      </>
    )
  }
  return (
    <Admin
      backurl='這裏放返回鏈接'
      button={
        <Box d='flex' justifyContent='center' p={4}>
          <Button
            variant='outline'
            variantColor='green'
          >
            這裏可以放title和按鈕
          </Button>
        </Box>
      }
    >
      <Box mt={3}>
        {talents.map((talent, i) => (
          <Box key={i}>
            <TalentCard
              talent={talent}
              intelligences={intelligences}
            />
          </Box>
        ))}
      </Box>
    </Admin>
  )
}

export const Chhirder = () => {
  const talents = ['efeiohf', 'efeff', 'efef']
  const intelligences = [
    '個人内省', '視覺空間',
    '數學邏輯', '自然探索',
    '人際溝通', '語言能力',
    '肢體動覺', '音樂旋律',
    '存在思考'
  ]
  const TalentCard = ({ talent, intelligences }) => {
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
            submitOnBlur={false}
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

          <Stack isInline>
            <Select value={selectValue} placeholder='未選擇智能' onChange={(e) => { setSelectValue(e.currentTarget.value) }}>
              {intelligences.map((intelligence, i) => (
                <option value={i} key={i}>
                  {intelligence}
                </option>
              ))}
              <option value='non' key='non'>
                不分類
              </option>
            </Select>

            <Button
              w='35%'
              variantColor='teal'
              ml={5}
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'hidden'
              }
              onClick={() => {
                console.log('haha')
              }}
            >
              確認修改
            </Button>

            <Button
              variantColor='blue'
              ml={3}
              visibility={
                ((talent !== selectValue && selectValue !== '') || talentName !== talent)
                  ? 'visible'
                  : 'hidden'
              }
              onClick={() => {
                setSelectValue(talent.intelligenceId || '')
                setTalentName(talent.name)
              }}
            >
              還原
            </Button>
          </Stack>

        </PseudoBox>
      </>
    )
  }
  return (
    <Admin
      backurl='這裏放返回鏈接'
    >
      <Box mt={3}>
        {talents.map((talent, i) => (
          <Box key={i}>
            <TalentCard
              talent={talent}
              intelligences={intelligences}
            />
          </Box>
        ))}
      </Box>
    </Admin>
  )
}
