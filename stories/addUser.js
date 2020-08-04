import React from 'react'
import { Box, Input, Button, Icon } from '@chakra-ui/core'

import AddUser from '../src/components/addUser'
import Page from '../src/components/page'
import HeaderPage from '../src/components/page/headerPage'
import Table from '../src/components/addUser/table'
import TableHead from '../src/components/addUser/tableHead'
import TableBody from '../src/components/addUser/tableBody'
import TableCell from '../src/components/addUser/tableCell'
import TableTr from '../src/components/addUser/tableTr'
import FileUploadButton from '../src/components/addUser/fileUploadButton'
import SureButton from '../src/components/page/sureButton'
import AddButton from '../src/components/addUser/addButton'
import CsvTable from '../src/components/addUser/csvTable'
import CsvItem from '../src/components/addUser/csvItem'
import TableItem from '../src/components/addUser/tableItem'
import { GrAndroid } from 'react-icons/gr'
import { MdSettings } from 'react-icons/md'

// storybook
export default { title: 'addUser' }

export const table = () => {
  const VsctableHead = [
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
  const header = ['序號', '名稱']
  return (
    <Page nodivider='false' title={<HeaderPage fontSize='28px'>新增用户</HeaderPage>}>
      <AddUser>
        {/* 表格显示 */}
        <Table>
          <TableHead>
            <TableTr>
              <TableCell textAlign='center' w='60px' width={{ base: '20%', sm: '20%' }}>序號</TableCell>
              <TableCell textAlign='center' w='180px' px={2} py={3} width={{ base: '30%', sm: '30%' }}>名稱</TableCell>
              <TableCell px={{ base: '1', sm: '1', md: '4' }} py={3}>值</TableCell>
            </TableTr>
          </TableHead>
          <TableBody>
            {data.map((item, index) => {
              return (
                <>
                  <TableItem item={item} index={index} />
                  {/* <TableTr>
                    <TableCell textAlign='center' w='60px' width={{ base: '20%', sm: '20%' }}>{index + 1}</TableCell>
                    <TableCell textAlign='center' w='180px' px={2} py={3} width={{ base: '30%', sm: '30%' }}>{item.fieldName}</TableCell>
                    <TableCell px={{ base: '1', sm: '1', md: '4' }} py={3}>{item.describe}</TableCell>
                  </TableTr> */}
                </>
              )
            })}
          </TableBody>
        </Table>
        <Box mt='10px' display={{ base: 'block', sm: 'block', md: 'flex' }} alignItems='center' justifyContent='space-between' backgroundColor={{ base: 'none', sm: 'none', md: '#f2f2f2' }} padding='10px'>
          <FileUploadButton />
          <AddButton>新增 </AddButton>
        </Box>
        <CsvTable
          tableHead={VsctableHead}
        />
      </AddUser>
    </Page>
  )
}

export const CsvTables = () => {
  const VsctableHead = [
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
  return (
    <Page nodivider='false' title={<HeaderPage fontSize='28px'>用户滚动</HeaderPage>}>
      <Box mt='10px' display={{ base: 'block', sm: 'block', md: 'flex' }} alignItems='center' justifyContent='space-between' backgroundColor={{ base: 'none', sm: 'none', md: '#f2f2f2' }} padding='10px'>
        <FileUploadButton icon={MdSettings}>文档内容</FileUploadButton>
        <AddButton disabled>新增 </AddButton>
      </Box>
      <CsvTable
        tableHead={VsctableHead}
      />
    </Page>
  )
}
