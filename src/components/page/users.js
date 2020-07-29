// import React from 'react'
// import {
//   Box,
//   Divider
// } from '@chakra-ui/core'

// import WbgPage from './wbgPage'

// const WhiteBoard = ({ title, backurl, nodivider = false, children, ...props }) => {
//   return (
//     <Box>
//       <Box>
//         <Box d='flex' justifyContent='space-between' px={{ base: '1.25rem', sm: '1.25rem', md: '1.25rem', lg: 0 }}>
//           <Box d='flex'>
//             <Box mr={5}>
//               {1}
//             </Box>
//             <Box as='div' lineHeight='40px'>
//               <Box as='div' d={{ base: 'block', sm: 'flex' }}>
//                 姓名：{schooluser.name}
//                 <Box as='div'>
//                   {type === 'teachers' ? '（老師）' : (schooluser.isAdmin ? '（管理員）' : (schooluser.isDirector ? '（學校主管）' : (schooluser.isTeacher ? '（老師）' : '')))}
//                   {schooluser.isStudent ? (schooluser.currentClsMember && schooluser.currentClsMember.cls && schooluser.currentClsMember.num ? (<Box as='span' d={{ base: 'none', md: 'block' }}>（學生）</Box>) : (<Box as='span'>（學生）</Box>)) : ''}
//                 </Box>
//               </Box>
//               {
//                 schooluser.currentClsMember && (
//                   (schooluser.isStudent && schooluser.currentClsMember.cls && schooluser.currentClsMember.num) && (
//                     <Box as='div' alignItems='center'>
//                       <Box as='div'>{`班級：${schooluser.currentClsMember.cls.name}`}</Box>
//                       <Box as='div'>學號：{schooluser.currentClsMember.num}</Box>
//                       <Box as='div' d={{ base: 'block', md: 'none' }}>（學生）</Box>
//                     </Box>
//                   )
//                 )
//               }

//             </Box>
//           </Box>
//           <Box d='flex'>
//             <NextLink
//               href='/school/[schoolId]/admin/users/[userId]/edit'
//               as={`/school/${schoolId}/admin/users/${schooluser.seqId}/edit`}
//               passHref
//             >
//               <IconButton
//                 icon='edit'
//                 variantColor='blue'
//                 mr={3}
//               // transform='translate(0, -50%)'
//               />
//             </NextLink>
//             {!schooluser.archivedAt && (
//               <DeleteAlert
//                 title='刪除提示'
//                 delHandle={deletedSchooluser}
//                 content={`是否確定删除 ${schooluser.name}，該操作不能還原`}
//                 delInfo={{ input: { schooluserId: schooluser.id } }}
//                 toastTitle='刪除成員錯誤'
//                 onSuccess={(val, close) => {
//                   setFieldValue('name', schoolusersSearchName)
//                 }}
//                 isArchive={schooluser.archivedAt}
//               >
//                 <IconButton
//                   variantColor='red'
//                   icon='delete'
//                   isDisabled={schooluser.archivedAt !== null}
//                 // transform='translate(0, -50%)'
//                 />
//               </DeleteAlert>
//             )}
//           </Box>
//         </Box>
//         <Divider my={6} />
//       </Box>
//     </Box>
//   )
// }

// export default WhiteBoard
