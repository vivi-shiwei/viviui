import React from 'react'
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Tag,
  TagLabel,
  Divider,
  IconButton,
  Image
} from '@chakra-ui/core'
import { Container } from './container'

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
export default SchooluserList
