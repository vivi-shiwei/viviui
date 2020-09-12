import React from 'react'
import {
  Box,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  Button
} from '@chakra-ui/core'
import NextLink from 'next/link'
import { action } from '@storybook/addon-actions'
import { Formik, Form, Field } from 'formik'

import Page from '../src/components/page'
import PageHeader from '../src/components/page/pageHeader'
import PageBody from '../src/components/page/pageBody'
import PageFooter from '../src/components/page/pageFooter'
import PageTitle from '../src/components/page/pageTitle'
import BackButton from '../src/components/page/backButton'
import SureButton from '../src/components/page/sureButton'
import DeleteRemind from '../src/components/page/deleteRemind'
// import DeleteIconButton from '../src/components/page/deleteButton'
import LabelName from '../src/components/page/labelName'
import { DeleteIconButton, Row } from '../src/index'

import MyImage from '../static/QQ20200518181405.jpg'

export default {
  title: 'Page(vivi)'
}

export const headering = () => {
  return (
    <Page>
      <PageHeader>
        <PageTitle>这里是头部<br />第二行头部</PageTitle>
      </PageHeader>

      <PageBody>
        <PageTitle>这是body</PageTitle>
      </PageBody>

      <PageFooter>
        <PageTitle>这是Foooter</PageTitle>
      </PageFooter>
    </Page>
  )
}

// export const editDashboard = () => {
//   let initialValues = {}
//   initialValues = {
//     name: '2013', // Dashboard名字:  2020Dashboard
//     isDefault: true// 是否為今個Dashboard, 不是今個Dashboard
//   }
//   const validateName = (value) => {
//     return (!value) ? '該選項不可為空！' : ((value.length < 3) ? '長度不可短於三個字符！' : '')
//   }
//   return (
//     <Page>
//       <PageTitle size='lg' as='h2' pt={4}>編輯</PageTitle>
//       <PageTitle
//         fontSize={{ base: '17px', md: '25px' }}
//         mt={5}
//       >
//         这也是一个Header
//       </PageTitle>
//       <Box px={{ base: 8, sm: 8, md: 16 }} py={4}>
//         <Box
//           // display={{ base: 'block', sm: 'block', md: 'flex' }}
//           // justifyContent='space-between'
//           d='flex'
//           justifyContent='space-between'
//           flexDirection={{ base: 'column-reverse', md: 'initial' }}
//         >
//           <NextLink href='/test' passHref>
//             <a onClick={action('button-click')}>

//               <Button
//                 backgroundColor='#c2c2c2'
//                 onClick={action('button-click')}
//                 minW={{ base: '100%', sm: '100%', md: '200px' }}
//                 mr={3}
//                 mt={8}
//                 _hover={{
//                   backgroundColor: '#718096'
//                 }}
//                 _active={{
//                   boxShadow: '0 0 0 3px rgba(175, 175, 175, 0.6)'
//                 }}
//               >
//                 返回
//               </Button>
//             </a>
//           </NextLink>
//           <NextLink href='/test' passHref>
//             <a onClick={action('button-click')}>
//               <Button
//                 variantColor='blue'
//                 onClick={action('button-click')}
//                 minW={{ base: '100%', sm: '100%', md: '200px' }}
//                 mr={3}
//                 mt={8}
//               >
//                 確認
//               </Button>
//             </a>
//           </NextLink>
//         </Box>
//         <DeleteRemind title='刪除操作' content='請謹慎操作。'>
//           <NextLink href='/test' passHref>
//             <a onClick={action('button-click')}>
//               <Button
//                 minW={{ base: '100%', sm: '100%', md: '200px' }}
//                 onClick={action('button-click')} variantColor='red'
//                 mr={3}
//                 mt={8}
//               >刪除
//               </Button>
//             </a>
//           </NextLink>
//         </DeleteRemind>
//       </Box>
//     </Page>
//   )
// }

// export const editCls = () => {
//   let initialValues = {}
//   initialValues = {
//     name: '2013', // Dashboard名字:  2020Dashboard
//     englishName: 'School', // 是否為今個Dashboard, 不是今個Dashboard
//     slug: '加油'
//   }
//   const validateName = (value) => {
//     return (!value) ? '該選項不可為空！' : ((value.length < 3) ? '長度不可短於三個字符！' : '')
//   }
//   return (
//     <Page
//       title={
//         <>
//           <PageTitle size='lg' as='h2' pt={4}>編輯 Dashboard</PageTitle>
//           <PageTitle
//             fontSize={{ base: '17px', md: '25px' }}
//             mt={5}
//           >
//             聖若瑟教區中學第六校
//             <Box
//               as='span'
//               display={{ base: 'none', sm: 'none', md: 'inline-block' }}
//             >
//               （cdsj6 2019/2020 Dashboard）
//             </Box>
//           </PageTitle>
//         </>
//       }
//     >
//       <PageTitle size='lg' as='h2' pt={4}>編輯 Dashboard</PageTitle>
//       <PageTitle
//         fontSize={{ base: '17px', md: '25px' }}
//         mt={5}
//       >
//         聖若瑟教區中學第六校
//       </PageTitle>
//       <Box as='article' px={{ base: 8, sm: 8, md: 16 }} pb={16}>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={(values, { setSubmitting, setFieldValue }) => {
//             const { name, englishName, slug } = values
//             const input = {
//               name,
//               englishName,
//               slug
//             }
//             console.log(input)
//             setSubmitting(false)
//           }}
//         >
//           {({ isSubmitting, isFieldError }) => (
//             <Form>
//               <Field name='name' validate={validateName}>
//                 {({ field, form: { errors, touched } }) => (
//                   <FormControl mt={4} isInvalid={errors.name && touched.name}>
//                     <FormLabel>班級名稱</FormLabel>
//                     <Input {...field} />
//                     <FormErrorMessage>{errors.name}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>
//               <Field name='englishName'>
//                 {({
//                   field, // 包含field的onChange ， onBlur ， name和value的对象
//                   form: { touched, errors }, // Formik袋
//                   meta// 包含有关字段的元数据（即value ， touched ， error和initialValue ）的initialValue
//                 }) =>
//                   (
//                     <FormControl mt={4}>
//                       <FormLabel>班級英文名稱</FormLabel>
//                       <Input {...field} />
//                     </FormControl>
//                   )}
//               </Field>
//               <Field name='slug'>
//                 {({
//                   field, // 包含field的onChange ， onBlur ， name和value的对象
//                   form: { errors, touched }
//                 }) =>
//                   (
//                     <FormControl mt={4}>
//                       <FormLabel>班級代號</FormLabel>
//                       <Input {...field} />
//                     </FormControl>
//                   )}
//               </Field>
//               <Box
//                 d='flex'
//                 justifyContent='space-between'
//                 flexDirection={{ base: 'column-reverse', md: 'initial' }}
//               >
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <BackButton>返回</BackButton>
//                   </a>
//                 </NextLink>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <SureButton>確認</SureButton>
//                   </a>
//                 </NextLink>
//               </Box>
//               <DeleteRemind title='刪除 Dashboard' content='删除班級後后，將會清空該班級成員，請謹慎操作。'>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <SureButton variantColor='red'>刪除</SureButton>
//                   </a>
//                 </NextLink>
//               </DeleteRemind>
//             </Form>)}
//         </Formik>
//       </Box>
//     </Page>
//   )
// }

// export const editSchool = () => {
//   let initialValues = {}
//   initialValues = {
//     name: '2013', // Dashboard名字:  2020Dashboard
//     englishName: 'School', // 是否為今個Dashboard, 不是今個Dashboard
//     slug: '加油'
//   }
//   const validateName = (value) => {
//     return (!value) ? '該選項不可為空！' : ((value.length < 3) ? '長度不可短於三個字符！' : '')
//   }
//   return (
//     <Page
//       title={
//         <PageTitle size='lg' as='h2' pt={4}>編輯學校</PageTitle>
//       }
//     >
//       <Box as='article' px={{ base: 8, sm: 8, md: 16 }} pb={16}>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={(values, { setSubmitting, setFieldValue }) => {
//             const { name, englishName, slug } = values
//             const input = {
//               name,
//               englishName,
//               slug
//             }
//             console.log(input)
//             setSubmitting(false)
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <Field name='name' validate={validateName}>
//                 {({ field, form: { errors, touched } }) => (
//                   <FormControl mt={4} isInvalid={errors.name && touched.name}>
//                     <FormLabel>班級名稱</FormLabel>
//                     <Input {...field} />
//                     <FormErrorMessage>{errors.name}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>
//               <Field name='englishName'>
//                 {({
//                   field, // 包含field的onChange ， onBlur ， name和value的对象
//                   form: { touched, errors }, // Formik袋
//                   meta// 包含有关字段的元数据（即value ， touched ， error和initialValue ）的initialValue
//                 }) =>
//                   (
//                     <FormControl mt={4}>
//                       <FormLabel>班級英文名稱</FormLabel>
//                       <Input {...field} />
//                     </FormControl>
//                   )}
//               </Field>
//               <Field name='slug'>
//                 {({
//                   field, // 包含field的onChange ， onBlur ， name和value的对象
//                   form: { errors, touched }
//                 }) =>
//                   (
//                     <FormControl mt={4}>
//                       <FormLabel>班級代號</FormLabel>
//                       <Input {...field} />
//                     </FormControl>
//                   )}
//               </Field>
//               <Box
//                 d='flex'
//                 justifyContent='space-between'
//                 flexDirection={{ base: 'column-reverse', md: 'initial' }}
//               >
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <BackButton onClick={action('button-click')}>返回</BackButton>
//                   </a>
//                 </NextLink>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <SureButton onClick={action('button-click')}>確認</SureButton>
//                   </a>
//                 </NextLink>
//               </Box>

//               <DeleteRemind
//                 title='刪除 Dashboard'
//                 content='删除學校後，將會清空該學校成員，該操作不能還原，請謹慎操作。'
//               >
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <SureButton onClick={action('button-click')} variantColor='red'>刪除</SureButton>
//                   </a>
//                 </NextLink>
//               </DeleteRemind>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </Page>
//   )
// }

// export const InfiniteScrolltest = () => {
//   var items = ['1', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2']

//   return (
//     <Page
//       title={
//         <PageTitle size='lg' as='h2' pt={4}>編輯學校</PageTitle>
//       }
//     >
//       <Box as='article' px={{ base: 8, sm: 8, md: 16 }} pb={16}>
//         <Box
//           // position='absolute'
//           top='0px'
//           left='0px'
//           bottom='0px'
//           right='0px'
//           // overflow='hidden'
//           my={5}
//         >

//           <Row
//             profilePhoto={MyImage}
//             name='vivi'
//             left={
//               <>
//                 <LabelName type='（学生）' labelProps={{ w: '100px' }} name='vivi' label='姓名' />
//                 <LabelName name='343546' label='學號' />
//                 <LabelName name='vivi' label='姓名' />
//               </>
//             }
//             right={
//               <>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <DeleteIconButton onClick={action('button-click')} />
//                   </a>
//                 </NextLink>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <Button onClick={action('button-click')} icon='edit' variantColor='blue' />
//                   </a>
//                 </NextLink>
//               </>
//             }
//           />

//           <Row
//             profilePhoto={MyImage}
//             name='vivi'
//             left={
//               <>
//                 <LabelName type='（学生）' name='vivi' label='姓名' />
//               </>
//             }
//             right={
//               <>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <DeleteIconButton />
//                   </a>
//                 </NextLink>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <Button onClick={action('button-click')} icon='edit' variantColor='blue' ml='5px' />
//                   </a>
//                 </NextLink>
//               </>
//             }
//           />

//           <Row
//             profilePhoto={MyImage}
//             name='vivi'
//             left={
//               <>
//                 <LabelName type='（学生）' name='vivi' label='姓名' />
//               </>
//             }
//             right={
//               <>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <DeleteIconButton onClick={action('button-click')} />
//                   </a>
//                 </NextLink>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <Button onClick={action('button-click')} icon='edit' variantColor='blue' />
//                   </a>
//                 </NextLink>
//               </>
//             }
//           />

//           <Row
//             profilePhoto={MyImage}
//             name='vivi'
//             left={
//               <>
//                 <LabelName type='（学生）' name='vivi' label='姓名' />
//               </>
//             }
//             right={
//               <>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <DeleteIconButton onClick={action('button-click')} />
//                   </a>
//                 </NextLink>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <Button onClick={action('button-click')} icon='edit' variantColor='blue' />
//                   </a>
//                 </NextLink>
//               </>
//             }
//           />

//           <Row
//             profilePhoto={MyImage}
//             name='vivi'
//             left={
//               <>
//                 <LabelName type='（学生）' name='vivi' label='姓名' />
//               </>
//             }
//             right={
//               <>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <DeleteIconButton />
//                   </a>
//                 </NextLink>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <Button icon='edit' variantColor='blue' />
//                   </a>
//                 </NextLink>
//               </>
//             }
//           />

//           <Row
//             profilePhoto={MyImage}
//             name='vivi'
//             left={
//               <>
//                 <LabelName type='（学生）' name='vivi' label='姓名' />
//               </>
//             }
//             right={
//               <>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <DeleteIconButton />
//                   </a>
//                 </NextLink>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <Button icon='edit' variantColor='blue' />
//                   </a>
//                 </NextLink>
//               </>
//             }
//           />

//           <Row
//             profilePhoto={MyImage}
//             name='vivi'
//             left={
//               <>
//                 <LabelName type='（学生）' name='vivi' label='姓名' />
//               </>
//             }
//             right={
//               <>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <DeleteIconButton />
//                   </a>
//                 </NextLink>
//                 <NextLink href='/test' passHref>
//                   <a onClick={action('button-click')}>
//                     <Button icon='edit' variantColor='blue' />
//                   </a>
//                 </NextLink>
//               </>
//             }
//           />
//           {/* <InfiniteScroll
//             pageStart={0}
//             loadMore={items}
//             hasMore={true || false}
//             loader={<div className='loader' key={0}>Loading ...</div>}
//           >
//             {items.map((item, index) => {
//               return (
//                 <Box w='100%' h='100px' key={index}>{item}</Box>
//               )
//             })}
//           </InfiniteScroll> */}
//         </Box>
//       </Box>
//     </Page>
//   )
// }

// export const Rows = () => {
//   var items = ['1', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2']

//   return (
//     <Row
//       profilePhoto={MyImage}
//       name='vivi'
//       left={
//         <>
//           <LabelName type='（学生）' name='vivi' label='姓名' />
//         </>
//       }
//       right={
//         <>
//           <NextLink href='/test' passHref>
//             <a onClick={action('button-click')}>
//               <DeleteIconButton />
//             </a>
//           </NextLink>
//           <NextLink href='/test' passHref>
//             <a onClick={action('button-click')}>
//               <Button icon='edit' variantColor='blue' />
//             </a>
//           </NextLink>
//         </>
//       }
//     />
//   )
// }
