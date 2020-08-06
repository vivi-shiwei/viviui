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
  useDisclosure,
  PseudoBox,
  Checkbox,
  Radio,
  RadioGroup,
  Avatar
} from '@chakra-ui/core'
import Admin from '../src/components/admin/adminPage'
import FomikLayout from '../src/components/fomikLayout'
import NewModal from '../src/components/newModal'
import NextLink from 'next/link'
import AdminList from '../src/components/admin/adminListPage'
import { FaSchool, FaUserEdit } from 'react-icons/fa'
import { AiTwotoneSetting } from 'react-icons/ai'
import { Formik, Field, Form } from 'formik'
import { GoDeviceCamera } from 'react-icons/go'

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
    <Admin backurl='sjdoijoijd' title='編輯學校' divider>
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

export const Children = () => {
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
                {!isEditing && (
                  <IconButton
                    variantColor='cyan' variant='outline'
                    ml={5} size='sm' icon='edit' onClick={onRequestEdit}
                  />
                )}
                <EditablePreview />
                <EditableInput w='auto' onChange={(e) => { setTalentName(e.target.value) }} />

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

export const Chhirder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Admin
      title='編輯 Dashborad'
      schoolname='聖若瑟教區中學第六校'
      dashboradname='cdj2013-2018'
      noDivider
    >
      {isOpen && (
        <NewModal
          isOpen={isOpen}
          onClose={onClose}
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
        // variantColor='blue'
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
    </Admin>
  )
}

export const editDashboard = () => {
  const initialValues = {
    name: 'vivi', // 學年名字:  2020學年
    isDefault: false// 是否為今個學年, 不是今個學年
  }
  return (
    <Admin
      backurl='cdsj6 2019/2020 學年'
      title='編輯 Dashboard'
      schoolname='聖若瑟教區中學第六校'
      divider
    >
      <FomikLayout>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, setFieldValue }) => {
            const { name, isDefault } = values
            console.log(name, isDefault)
          }}
        >
          {({ props, isSubmitting, setFieldValue }) => (
            <Form>
              <Field name='name' validate={(name) => (!name) ? '該選項不可為空！' : ((name.length < 3) ? '長度不可短於三個字符！' : '')}>
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
                d='flex'
                justifyContent='space-between'
                flexDirection={{ base: 'column-reverse', md: 'initial' }}
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
                    删除 Dashborad
                  </Heading>
                  <Box mt={4}>删除 Dashborad 後后，將會清空該 Dashborad 的所有資料，該操作不能還原，請謹慎操作。</Box>
                </Box>
                <Divider />
                <Box
                  textAlign='right'
                  pr={3}
                  pt={8}
                >
                  <Button
                    variantColor='red'
                    minW={{ base: '100%', sm: '100%', md: '200px' }}
                  >
                    删除
                  </Button>
                </Box>

              </Box>
            </Form>
          )}
        </Formik>
      </FomikLayout>
    </Admin>
  )
}

export const editTeacherUsers = () => {
  const isStudent = false
  const isTeacher = true
  const isDirector = false
  const isAdmin = false
  const identity = []
  identity.push(
    isStudent ? 'student' : '',
    isTeacher ? 'teacher' : '',
    isDirector ? 'director' : '',
    isAdmin ? 'admin' : ''
  )
  const initialValues = {
    name: 'vivi',
    email: '889@gmail.com',
    englishName: 'vivi',
    gender: 'F',
    idNo: '576545',
    eduNo: '565767',
    cardNo: '5465476',
    studentNo: '575676',
    profilePhoto: MyImage,
    isStudent: false,
    isTeacher: true,
    isDirector: false,
    isAdmin: false,
    identity: identity.filter(val => val !== '')
  }
  const profilePhoto = initialValues.profilePhoto
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return (
    <Admin
      backurl='vivi 2019/2020 學年'
      title='編輯用戶'
      divider
    >
      <FomikLayout>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            const {
              name,
              email,
              englishName,
              gender,
              idNo,
              eduNo,
              cardNo,
              studentNo,
              profilePhoto,
              identity
            } = values
            console.log(
              name,
              email,
              englishName,
              gender,
              idNo,
              eduNo,
              cardNo,
              studentNo,
              profilePhoto,
              identity)
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form>
              <Box textAlign='center'>
                <Box
                  h='100px'
                  w='100px'
                  position='relative'
                  d='inline-block'
                  borderRadius='50%'
                  overflow='hidden'
                  border='1px solid #CBD5E0'
                  zIndex='1'
                >
                  <Avatar size='xl' name='Christian Nwamba' src={profilePhoto} />
                  <Box
                    padding='4px'
                    position='absolute'
                    bottom='-1px'
                    width='100%'
                    display='flex'
                    justifyContent='center'
                    backgroundColor='#f3f3f3'
                    color='#5d5d5d'
                    opacity='0.8'
                  >
                    <Box as={GoDeviceCamera} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box textAlign='center' my={4}>
                  <Button
                    backgroundColor='#c2c2c2'
                    color='white'
                    _hover={{
                      backgroundColor: '#b8b8b8'
                    }}
                    _focus={{
                      boxShadow: '0 0 0 3px rgba(175, 175, 175, 0.6)'
                    }}

                  >
                    用戶所有的頭像
                  </Button>
                </Box>
              </Box>
              <Field name='name' validate={(name) => (!name.length) ? '該項不可為空' : ''}>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4} isInvalid={errors.name && touched.name}>
                    <FormLabel htmlFor='user-name'>姓名</FormLabel>
                    <Input id='user-name' {...field} />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name='englishName'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel htmlFor='user-en-name'>英文姓名</FormLabel>
                    <Input placeholder='English Name' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='gender'>
                {({ field, form: { touched, errors }, meta }) => (
                  <RadioGroup mt={4} spacing={5} isInline {...field}>
                    <Radio key='male' variantColor='green' value='M'>
                      男
                    </Radio>
                    <Radio key='female' variantColor='red' value='F'>
                      女
                    </Radio>
                  </RadioGroup>
                )}
              </Field>

              {
                isStudent && (
                  <Field name='studentNo'>
                    {({ field, form: { touched, errors }, meta }) => (
                      <FormControl mt={4}>
                        <FormLabel>學生證號碼</FormLabel>
                        <Input placeholder='學生證號碼' {...field} />
                      </FormControl>
                    )}
                  </Field>
                )
              }

              <Field name='idNo'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel>身份證號碼</FormLabel>
                    <Input placeholder='身份證號碼' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='eduNo'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel>教青局教師證/教青局學生證編號</FormLabel>
                    <Input placeholder='教青局教師證/教青局學生證編號' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='cardNo'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel>拍卡卡號</FormLabel>
                    <Input placeholder='拍卡卡號' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='email' validate={(email) => (!re.test(String(email).toLowerCase())) ? 'email 格式錯誤' : ''}>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4} isInvalid={errors.email && touched.email}>
                    <FormLabel>電郵信箱</FormLabel>
                    <Input placeholder='在這輸入用戶的電郵信箱' {...field} />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {!isStudent && (
                <Field
                  name='identity' validate={(identity) => {
                    let errorInfo
                    if (!identity.length) {
                      errorInfo = '至少選擇一種身份'
                    } else {
                      // 檢查當前勾選的身份是否為學校管理員或主任
                      if (identity.includes('admin') || identity.includes('director')) {
                        // // 如果是其中一種身份進入則還需檢查是否還有勾選老師
                        // if (!value.includes('teacher')) {
                        //   errorInfo = '還需勾選老師的身份'
                        // }
                        if (identity.includes('student')) {
                          // 當前身份不可候選學生身份
                          errorInfo = '該身份不可勾選學生身份'
                        }
                      } else if (identity.includes('teacher')) {
                        // 當前身份不可候選學生身份
                        if (identity.includes('student')) {
                          errorInfo = '該身份不可勾選學生身份'
                        }
                      }
                    }
                    return errorInfo
                  }}
                >
                  {({ field, form: { touched, errors, setFieldValue }, meta }) => {
                    const mostIdentity = !values.identity.filter(x => x === 'admin' || x === 'director').length ? values.identity[0] : values.identity.filter(x => x === 'admin' || x === 'director')[0]
                    return (
                      <FormControl mt={4} isInvalid={errors.identity && touched.identity} {...field}>
                        <FormLabel>用戶身份方式</FormLabel>
                        <RadioGroup
                          variantColor='green'
                          defaultValue={mostIdentity}
                          onChange={e => setFieldValue('identity', [e.target.value])}
                        >
                          <Radio variantColor='blue' value='admin'>學校管理員</Radio>
                          <Radio variantColor='blue' value='director'>學校負責人</Radio>
                          <Radio variantColor='blue' value='teacher'>教師</Radio>
                          {/* <Radio variantColor='blue' value='student'>學生</Radio> */}
                        </RadioGroup>
                        <FormErrorMessage>{errors.identity}</FormErrorMessage>
                      </FormControl>
                    )
                  }}
                </Field>
              )}
              <Box
                // display={{ base: 'block', sm: 'block', md: 'flex' }}
                d='flex'
                justifyContent='space-between'
                flexDirection={{ base: 'column-reverse', md: 'initial' }}
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

                <Button
                  variantColor='blue'
                  minW={{ base: '100%', sm: '100%', md: '200px' }}
                  mr={3}
                  mt={8}
                  disabled={isSubmitting}
                >
                  確認
                </Button>
              </Box>

              <Box border='1px solid #FED7D7' background='#FFF5F5' rounded={4} mt={10} p={5}>
                <Box>
                  <Heading as='h4' size='md'>
                    删除這個用戶
                  </Heading>
                  <Box mt={4}>删除用戶後，將會清空該用戶的所有東西，該操作不能還原，請謹慎操作！</Box>
                </Box>
                <Divider />
                <Box
                  textAlign='right'
                  pr={3}
                  pt={4}
                >
                  <Button
                    variantColor='red'
                    minW={{ base: '100%', md: '180px' }}

                  >
                    删除
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </FomikLayout>
    </Admin>
  )
}

export const editStudentUsers = () => {
  const isStudent = true
  const isTeacher = false
  const isDirector = false
  const isAdmin = false
  const identity = []
  identity.push(
    isStudent ? 'student' : '',
    isTeacher ? 'teacher' : '',
    isDirector ? 'director' : '',
    isAdmin ? 'admin' : ''
  )
  const initialValues = {
    name: 'vivi',
    email: '889@gmail.com',
    englishName: 'vivi',
    gender: 'F',
    idNo: '576545',
    eduNo: '565767',
    cardNo: '5465476',
    studentNo: '575676',
    profilePhoto: MyImage6,
    isStudent: true,
    isTeacher: false,
    isDirector: false,
    isAdmin: false,
    identity: identity.filter(val => val !== '')
  }
  const profilePhoto = initialValues.profilePhoto
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return (
    <Admin
      backurl='cdsj6 2019/2020 學年'
      title='編輯用戶'
      divider
    >
      <FomikLayout>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            const {
              name,
              email,
              englishName,
              gender,
              idNo,
              eduNo,
              cardNo,
              studentNo,
              profilePhoto,
              identity
            } = values
            console.log(
              name,
              email,
              englishName,
              gender,
              idNo,
              eduNo,
              cardNo,
              studentNo,
              profilePhoto,
              identity)
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form>
              <Box textAlign='center'>
                <Box
                  h='100px'
                  w='100px'
                  position='relative'
                  d='inline-block'
                  borderRadius='50%'
                  overflow='hidden'
                  border='1px solid #CBD5E0'
                  zIndex='1'
                >
                  <Avatar size='xl' name='Christian Nwamba' src={profilePhoto} />
                  <Box
                    padding='4px'
                    position='absolute'
                    bottom='-1px'
                    width='100%'
                    display='flex'
                    justifyContent='center'
                    backgroundColor='#f3f3f3'
                    color='#5d5d5d'
                    opacity='0.8'
                  >
                    <Box as={GoDeviceCamera} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box textAlign='center' my={4}>
                  <Button
                    backgroundColor='#c2c2c2'
                    color='white'
                    _hover={{
                      backgroundColor: '#b8b8b8'
                    }}
                    _focus={{
                      boxShadow: '0 0 0 3px rgba(175, 175, 175, 0.6)'
                    }}

                  >
                    用戶所有的頭像
                  </Button>
                </Box>
              </Box>
              <Field name='name' validate={(name) => (!name.length) ? '該項不可為空' : ''}>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4} isInvalid={errors.name && touched.name}>
                    <FormLabel htmlFor='user-name'>姓名</FormLabel>
                    <Input id='user-name' {...field} />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name='englishName'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel htmlFor='user-en-name'>英文姓名</FormLabel>
                    <Input placeholder='English Name' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='gender'>
                {({ field, form: { touched, errors }, meta }) => (
                  <RadioGroup mt={4} spacing={5} isInline {...field}>
                    <Radio key='male' variantColor='green' value='M'>
                      男
                    </Radio>
                    <Radio key='female' variantColor='red' value='F'>
                      女
                    </Radio>
                  </RadioGroup>
                )}
              </Field>

              {
                isStudent && (
                  <Field name='studentNo'>
                    {({ field, form: { touched, errors }, meta }) => (
                      <FormControl mt={4}>
                        <FormLabel>學生證號碼</FormLabel>
                        <Input placeholder='學生證號碼' {...field} />
                      </FormControl>
                    )}
                  </Field>
                )
              }

              <Field name='idNo'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel>身份證號碼</FormLabel>
                    <Input placeholder='身份證號碼' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='eduNo'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel>教青局教師證/教青局學生證編號</FormLabel>
                    <Input placeholder='教青局教師證/教青局學生證編號' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='cardNo'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel>拍卡卡號</FormLabel>
                    <Input placeholder='拍卡卡號' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='email' validate={(email) => (!re.test(String(email).toLowerCase())) ? 'email 格式錯誤' : ''}>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4} isInvalid={errors.email && touched.email}>
                    <FormLabel>電郵信箱</FormLabel>
                    <Input placeholder='在這輸入用戶的電郵信箱' {...field} />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {!isStudent && (
                <Field
                  name='identity' validate={(identity) => {
                    let errorInfo
                    if (!identity.length) {
                      errorInfo = '至少選擇一種身份'
                    } else {
                      // 檢查當前勾選的身份是否為學校管理員或主任
                      if (identity.includes('admin') || identity.includes('director')) {
                        // // 如果是其中一種身份進入則還需檢查是否還有勾選老師
                        // if (!value.includes('teacher')) {
                        //   errorInfo = '還需勾選老師的身份'
                        // }
                        if (identity.includes('student')) {
                          // 當前身份不可候選學生身份
                          errorInfo = '該身份不可勾選學生身份'
                        }
                      } else if (identity.includes('teacher')) {
                        // 當前身份不可候選學生身份
                        if (identity.includes('student')) {
                          errorInfo = '該身份不可勾選學生身份'
                        }
                      }
                    }
                    return errorInfo
                  }}
                >
                  {({ field, form: { touched, errors, setFieldValue }, meta }) => {
                    const mostIdentity = !values.identity.filter(x => x === 'admin' || x === 'director').length ? values.identity[0] : values.identity.filter(x => x === 'admin' || x === 'director')[0]
                    return (
                      <FormControl mt={4} isInvalid={errors.identity && touched.identity} {...field}>
                        <FormLabel>用戶身份方式</FormLabel>
                        <RadioGroup
                          variantColor='green'
                          defaultValue={mostIdentity}
                          onChange={e => setFieldValue('identity', [e.target.value])}
                        >
                          <Radio variantColor='blue' value='admin'>學校管理員</Radio>
                          <Radio variantColor='blue' value='director'>學校負責人</Radio>
                          <Radio variantColor='blue' value='teacher'>教師</Radio>
                          {/* <Radio variantColor='blue' value='student'>學生</Radio> */}
                        </RadioGroup>
                        <FormErrorMessage>{errors.identity}</FormErrorMessage>
                      </FormControl>
                    )
                  }}
                </Field>
              )}
              <Box
                // display={{ base: 'block', sm: 'block', md: 'flex' }}
                d='flex'
                justifyContent='space-between'
                flexDirection={{ base: 'column-reverse', md: 'initial' }}
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

                <Button
                  variantColor='blue'
                  minW={{ base: '100%', sm: '100%', md: '200px' }}
                  mr={3}
                  mt={8}
                  disabled={isSubmitting}
                >
                  確認
                </Button>
              </Box>

              <Box border='1px solid #FED7D7' background='#FFF5F5' rounded={4} mt={10} p={5}>
                <Box>
                  <Heading as='h4' size='md'>
                    删除這個用戶
                  </Heading>
                  <Box mt={4}>删除用戶後，將會清空該用戶的所有東西，該操作不能還原，請謹慎操作！</Box>
                </Box>
                <Divider />
                <Box
                  textAlign='right'
                  pr={3}
                  pt={4}
                >
                  <Button
                    variantColor='red'
                    minW={{ base: '100%', md: '180px' }}

                  >
                    删除
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </FomikLayout>
    </Admin>
  )
}
export const editDirectorUsers = () => {
  const isStudent = false
  const isTeacher = false
  const isDirector = true
  const isAdmin = false
  const identity = []
  identity.push(
    isStudent ? 'student' : '',
    isTeacher ? 'teacher' : '',
    isDirector ? 'director' : '',
    isAdmin ? 'admin' : ''
  )
  const initialValues = {
    name: 'vivi',
    email: '889@gmail.com',
    englishName: 'vivi',
    gender: 'F',
    idNo: '576545',
    eduNo: '565767',
    cardNo: '5465476',
    studentNo: '575676',
    profilePhoto: MyImage6,
    isStudent: false,
    isTeacher: false,
    isDirector: true,
    isAdmin: false,
    identity: identity.filter(val => val !== '')
  }
  const profilePhoto = initialValues.profilePhoto
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return (
    <Admin
      backurl='cdsj6 2019/2020 學年'
      title='編輯用戶'
      divider
    >
      <FomikLayout>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            const {
              name,
              email,
              englishName,
              gender,
              idNo,
              eduNo,
              cardNo,
              studentNo,
              profilePhoto,
              identity
            } = values
            console.log(
              name,
              email,
              englishName,
              gender,
              idNo,
              eduNo,
              cardNo,
              studentNo,
              profilePhoto,
              identity)
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form>
              <Box textAlign='center'>
                <Box
                  h='100px'
                  w='100px'
                  position='relative'
                  d='inline-block'
                  borderRadius='50%'
                  overflow='hidden'
                  border='1px solid #CBD5E0'
                  zIndex='1'
                >
                  <Avatar size='xl' name='Christian Nwamba' src={profilePhoto} />
                  <Box
                    padding='4px'
                    position='absolute'
                    bottom='-1px'
                    width='100%'
                    display='flex'
                    justifyContent='center'
                    backgroundColor='#f3f3f3'
                    color='#5d5d5d'
                    opacity='0.8'
                  >
                    <Box as={GoDeviceCamera} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box textAlign='center' my={4}>
                  <Button
                    backgroundColor='#c2c2c2'
                    color='white'
                    _hover={{
                      backgroundColor: '#b8b8b8'
                    }}
                    _focus={{
                      boxShadow: '0 0 0 3px rgba(175, 175, 175, 0.6)'
                    }}

                  >
                    用戶所有的頭像
                  </Button>
                </Box>
              </Box>
              <Field name='name' validate={(name) => (!name.length) ? '該項不可為空' : ''}>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4} isInvalid={errors.name && touched.name}>
                    <FormLabel htmlFor='user-name'>姓名</FormLabel>
                    <Input id='user-name' {...field} />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name='englishName'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel htmlFor='user-en-name'>英文姓名</FormLabel>
                    <Input placeholder='English Name' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='gender'>
                {({ field, form: { touched, errors }, meta }) => (
                  <RadioGroup mt={4} spacing={5} isInline {...field}>
                    <Radio key='male' variantColor='green' value='M'>
                      男
                    </Radio>
                    <Radio key='female' variantColor='red' value='F'>
                      女
                    </Radio>
                  </RadioGroup>
                )}
              </Field>

              {
                isStudent && (
                  <Field name='studentNo'>
                    {({ field, form: { touched, errors }, meta }) => (
                      <FormControl mt={4}>
                        <FormLabel>學生證號碼</FormLabel>
                        <Input placeholder='學生證號碼' {...field} />
                      </FormControl>
                    )}
                  </Field>
                )
              }

              <Field name='idNo'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel>身份證號碼</FormLabel>
                    <Input placeholder='身份證號碼' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='eduNo'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel>教青局教師證/教青局學生證編號</FormLabel>
                    <Input placeholder='教青局教師證/教青局學生證編號' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='cardNo'>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4}>
                    <FormLabel>拍卡卡號</FormLabel>
                    <Input placeholder='拍卡卡號' {...field} />
                  </FormControl>
                )}
              </Field>

              <Field name='email' validate={(email) => (!re.test(String(email).toLowerCase())) ? 'email 格式錯誤' : ''}>
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl mt={4} isInvalid={errors.email && touched.email}>
                    <FormLabel>電郵信箱</FormLabel>
                    <Input placeholder='在這輸入用戶的電郵信箱' {...field} />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {!isStudent && (
                <Field
                  name='identity' validate={(identity) => {
                    let errorInfo
                    if (!identity.length) {
                      errorInfo = '至少選擇一種身份'
                    } else {
                      // 檢查當前勾選的身份是否為學校管理員或主任
                      if (identity.includes('admin') || identity.includes('director')) {
                        // // 如果是其中一種身份進入則還需檢查是否還有勾選老師
                        // if (!value.includes('teacher')) {
                        //   errorInfo = '還需勾選老師的身份'
                        // }
                        if (identity.includes('student')) {
                          // 當前身份不可候選學生身份
                          errorInfo = '該身份不可勾選學生身份'
                        }
                      } else if (identity.includes('teacher')) {
                        // 當前身份不可候選學生身份
                        if (identity.includes('student')) {
                          errorInfo = '該身份不可勾選學生身份'
                        }
                      }
                    }
                    return errorInfo
                  }}
                >
                  {({ field, form: { touched, errors, setFieldValue }, meta }) => {
                    const mostIdentity = !values.identity.filter(x => x === 'admin' || x === 'director').length ? values.identity[0] : values.identity.filter(x => x === 'admin' || x === 'director')[0]
                    return (
                      <FormControl mt={4} isInvalid={errors.identity && touched.identity} {...field}>
                        <FormLabel>用戶身份方式</FormLabel>
                        <RadioGroup
                          variantColor='green'
                          defaultValue={mostIdentity}
                          onChange={e => setFieldValue('identity', [e.target.value])}
                        >
                          <Radio variantColor='blue' value='admin'>學校管理員</Radio>
                          <Radio variantColor='blue' value='director'>學校負責人</Radio>
                          <Radio variantColor='blue' value='teacher'>教師</Radio>
                          {/* <Radio variantColor='blue' value='student'>學生</Radio> */}
                        </RadioGroup>
                        <FormErrorMessage>{errors.identity}</FormErrorMessage>
                      </FormControl>
                    )
                  }}
                </Field>
              )}
              <Box
                // display={{ base: 'block', sm: 'block', md: 'flex' }}
                d='flex'
                justifyContent='space-between'
                flexDirection={{ base: 'column-reverse', md: 'initial' }}
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

                <Button
                  variantColor='blue'
                  minW={{ base: '100%', sm: '100%', md: '200px' }}
                  mr={3}
                  mt={8}
                  disabled={isSubmitting}
                >
                  確認
                </Button>
              </Box>

              <Box border='1px solid #FED7D7' background='#FFF5F5' rounded={4} mt={10} p={5}>
                <Box>
                  <Heading as='h4' size='md'>
                    删除這個用戶
                  </Heading>
                  <Box mt={4}>删除用戶後，將會清空該用戶的所有東西，該操作不能還原，請謹慎操作！</Box>
                </Box>
                <Divider />
                <Box
                  textAlign='right'
                  pr={3}
                  pt={4}
                >
                  <Button
                    variantColor='red'
                    minW={{ base: '100%', md: '180px' }}
                  >
                    删除
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </FomikLayout>
    </Admin>
  )
}

// 測試
export const testUserTabList = () => {
  const arr1 = ['全部', '學生', '老師', '負責人', '管理員', '已封存學生', '已封存老師']
  const arr1Data = [
    {
      label: 'Nigerian Jollof',
      content: '1'
    },
    {
      label: 'asdfaerqwexzerer dfse',
      content:
        '2'
    },
    {
      label: 'Pounded jijefjskdf',
      content:
        '3'
    },
    {
      label: 'aeraerarafsfsd',
      content:
        '4'
    },
    {
      label: 'is this l',
      content:
        '5'
    },
    {
      label: 'Is this ming',
      content:
        '6'
    }
  ]

  return (
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
          {arr1.map((tab, index) => (
            <Tab key={index}>{tab}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {arr1Data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  )
}
// 測試
export const testChildrenTab = () => {
  const contents = ['夏荷', '夏亞', '夏瑤']
  const lables = [
    '個人内省', '視覺空間',
    '數學邏輯', '自然探索',
    '人際溝通', '語言能力',
    '肢體動覺', '音s樂旋律',
    '存在思考'
  ]

  return (
    <>
      <Admin tabNames='夏薇' />
    </>
  )
}

// 測試
export const testSpecialty = () => {
  return (
    <div />
  )
}
