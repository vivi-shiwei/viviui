import React from 'react'
import { Box } from '@chakra-ui/core'

import Container from '../src/components/container'
import AddUser from '../src/components/addUser'
import TableItem from '../src/components/addUser/tableItem'
import Page from '../src/components/page'
import HeaderPage from '../src/components/page/headerPage'

export default { title: 'addUser' }

export const DescriptionTest = () => {
  const tableHead = [
    { title: '姓名', width: 200 },
    { title: '英文姓名', width: 200 },
    { title: '性別', width: 200 },
    { title: '學生證號碼', width: 200 },
    { title: '身份證號碼', width: 200 },
    { title: '教青局教師證/教青局學生證編號', width: 250 },
    { title: '拍卡卡號', width: 200 },
    { title: '電郵信箱', width: 200 },
    { title: '學生', width: 200 },
    { title: '老師', width: 200 },
    { title: '學校主管', width: 200 },
    { title: '學校管理員', width: 200 }
  ]
  const data = [
    {
      fieldName: '姓名',
      describe: '必填'
    },
    {
      fieldName: '英文姓名',
      describe: '選填可留空，身份證顯示的英文名字'
    },
    {
      fieldName: '性別',
      describe: '選填可留空,請填入：男 或 女'
    },
    {
      fieldName: '學生證號碼',
      describe: '選填可留空，只有學生才有學生證號碼，非學生用戶請留空'
    },
    {
      fieldName: '身份證號碼',
      describe: '選填可留空'
    },
    {
      fieldName: '教青局教師證/教青局學生證編號',
      describe: '選填可留空'
    },
    {
      fieldName: '拍卡卡號',
      describe: '選填可留空'
    },
    {
      fieldName: '電郵信箱',
      describe: '必填'
    },
    {
      fieldName: '學生',
      describe: '學生、老師、學校主管、學校管理員必填一個，學生只能是一種身份，請填入：是 或 否'
    },
    {
      fieldName: '老師',
      describe: '學生、老師、學校主管、學校管理員必填一個，老師不能是學生的身份，請填入：是 或 否'
    },
    {
      fieldName: '學校主管',
      describe: '學生、老師、學校主管、學校管理員必填一個，學校主管不能是學生的身份，請填入：是 或 否'
    },
    {
      fieldName: '學校管理員',
      describe: '學生、老師、學校主管、學校管理員必填一個，學校管理員不能是學生的身份，請填入：是 或 否'
    }
  ]
  return (
    <Container mt='30px'>
      <AddUser
        heading='新增用户'
        describeTable={
          <Box as='table' w='100%' mt={{ base: '4', sm: '4', md: '7' }}>
            <Box as='thead'>
              <Box as='tr' h='50px'>
                <Box as='td' border='1px #CBD5E0 solid' textAlign='center' w='60px'>序號</Box>
                <Box as='td' border='1px #CBD5E0 solid' textAlign='center' w='180px'>名稱</Box>
                <Box as='td' border='1px #CBD5E0 solid' textAlign='center'>值</Box>
              </Box>
            </Box>
            <Box as='tbody'>
              {data.map((item, index) => {
                return (<TableItem key={index} item={item} index={index} />)
              })}
            </Box>
          </Box>
        }
      />
    </Container>
  )
}

export const table = () => {
  const tableHead = [
    { title: '姓名', width: 200 },
    { title: '英文姓名', width: 200 },
    { title: '性別', width: 200 },
    { title: '學生證號碼', width: 200 },
    { title: '身份證號碼', width: 200 },
    { title: '教青局教師證/教青局學生證編號', width: 250 },
    { title: '拍卡卡號', width: 200 },
    { title: '電郵信箱', width: 200 },
    { title: '學生', width: 200 },
    { title: '老師', width: 200 },
    { title: '學校主管', width: 200 },
    { title: '學校管理員', width: 200 }
  ]
  const data = [
    {
      fieldName: '姓名',
      describe: '必填'
    },
    {
      fieldName: '英文姓名',
      describe: '選填可留空，身份證顯示的英文名字'
    },
    {
      fieldName: '性別',
      describe: '選填可留空,請填入：男 或 女'
    },
    {
      fieldName: '學生證號碼',
      describe: '選填可留空，只有學生才有學生證號碼，非學生用戶請留空'
    },
    {
      fieldName: '身份證號碼',
      describe: '選填可留空'
    },
    {
      fieldName: '教青局教師證/教青局學生證編號',
      describe: '選填可留空'
    },
    {
      fieldName: '拍卡卡號',
      describe: '選填可留空'
    },
    {
      fieldName: '電郵信箱',
      describe: '必填'
    },
    {
      fieldName: '學生',
      describe: '學生、老師、學校主管、學校管理員必填一個，學生只能是一種身份，請填入：是 或 否'
    },
    {
      fieldName: '老師',
      describe: '學生、老師、學校主管、學校管理員必填一個，老師不能是學生的身份，請填入：是 或 否'
    },
    {
      fieldName: '學校主管',
      describe: '學生、老師、學校主管、學校管理員必填一個，學校主管不能是學生的身份，請填入：是 或 否'
    },
    {
      fieldName: '學校管理員',
      describe: '學生、老師、學校主管、學校管理員必填一個，學校管理員不能是學生的身份，請填入：是 或 否'
    }
  ]
  return (
    <Page title={<HeaderPage>管理员</HeaderPage>}>
      <AddUser
        heading='新增用户'
        describeTable={
          <Box as='table' w='100%' mt={{ base: '4', sm: '4', md: '7' }}>
            <Box as='thead'>
              <Box as='tr' h='50px'>
                <Box as='td' border='1px #CBD5E0 solid' textAlign='center' w='60px'>序號</Box>
                <Box as='td' border='1px #CBD5E0 solid' textAlign='center' w='180px'>名稱</Box>
                <Box as='td' border='1px #CBD5E0 solid' textAlign='center'>值</Box>
              </Box>
            </Box>
            <Box as='tbody'>
              {data.map((item, index) => {
                return (<TableItem key={index} item={item} index={index} />)
              })}
            </Box>
          </Box>
        }
      />
    </Page>
  )
}
