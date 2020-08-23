import React from 'react'

import Page from '../src/components/page'
import HeaderPage from '../src/components/page/pageHeader'
import Table from '../src/components/table'
import TableHead from '../src/components/table/tableHead'
import TableBody from '../src/components/table/tableBody'
import TableCell from '../src/components/table/tableCell'
import TableRow from '../src/components/table/tableRow'
// storybook
export default { title: 'Table(vivi hui)' }

export const hover = () => {
  const data = [
    {
      fieldName: '姓名',
      describe: '必填'
    },
    {
      fieldName: '英文姓名',
      describe: '選填'
    },
    {
      fieldName: '性別',
      describe: '選填可'
    },
    {
      fieldName: '老師',
      describe: '學生'
    },
    {
      fieldName: '學校主管',
      describe: '學生'
    },
    {
      fieldName: '學校管理員',
      describe: '學生'
    }
  ]
  const header = ['序號', '名稱']
  return (
    <Page nodivider='false' title={<HeaderPage fontSize='28px'>新增用户</HeaderPage>}>
      <Table type='hover'>
        <TableHead>
          <TableRow>
            <TableCell>序號</TableCell>
            <TableCell>名稱</TableCell>
            <TableCell>值</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <>
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.fieldName}</TableCell>
                  <TableCell>{item.describe}</TableCell>
                </TableRow>
              </>
            )
          })}

        </TableBody>
      </Table>
    </Page>
  )
}

export const tables = () => {
  const tableHeada = [
    //   { title: '姓名', width: 200 },
    //   { title: '英文姓名', width: 200 },
    //   { title: '性別', width: 200 },
    //   { title: '學生證號碼', width: 200 },
    //   { title: '身份證號碼', width: 200 },
    //   { title: '教青局教師證/教青局學生證編號', width: 250 },
    //   { title: '拍卡卡號', width: 200 },
    //   { title: '電郵信箱', width: 200 },
    //   { title: '學生', width: 200 },
    //   { title: '老師', width: 200 },
    //   { title: '學校主管', width: 200 },
    //   { title: '學校管理員', width: 200 }
    // ]
    // const data = [
    //   {
    //     fieldName: '姓名',
    //     describe: '必填'
    //   },
    //   {
    //     fieldName: '英文姓名',
    //     describe: '選填可留空，身份證顯示的英文名字'
    //   },
    //   {
    //     fieldName: '性別',
    //     describe: '選填可留空,請填入：男 或 女'
    //   },
    //   {
    //     fieldName: '學生證號碼',
    //     describe: '選填可留空，只有學生才有學生證號碼，非學生用戶請留空'
    //   },
    //   {
    //     fieldName: '身份證號碼',
    //     describe: '選填可留空'
    //   },
    //   {
    //     fieldName: '教青局教師證/教青局學生證編號',
    //     describe: '選填可留空'
    //   },
    //   {
    //     fieldName: '拍卡卡號',
    //     describe: '選填可留空'
    //   },
    //   {
    //     fieldName: '電郵信箱',
    //     describe: '必填'
    //   },
    //   {
    //     fieldName: '學生',
    //     describe: '學生、老師、學校主管、學校管理員必填一個，學生只能是一種身份，請填入：是 或 否'
    //   },
    //   {
    //     fieldName: '老師',
    //     describe: '學生、老師、學校主管、學校管理員必填一個，老師不能是學生的身份，請填入：是 或 否'
    //   },
    //   {
    //     fieldName: '學校主管',
    //     describe: '學生、老師、學校主管、學校管理員必填一個，學校主管不能是學生的身份，請填入：是 或 否'
    //   },
    //   {
    //     fieldName: '學校管理員',
    //     describe: '學生、老師、學校主管、學校管理員必填一個，學校管理員不能是學生的身份，請填入：是 或 否'
    //   }
  ]

  const data = [
    {
      fieldName: '姓名',
      describe: '必填'
    },
    {
      fieldName: '英文姓名',
      describe: '選填'
    },
    {
      fieldName: '性別',
      describe: '選填可'
    },
    {
      fieldName: '學生證號碼',
      describe: '選填'
    },
    {
      fieldName: '身份證號碼',
      describe: '選填可留空'
    }
  ]
  const header = ['序號', '名稱']
  return (
    <Page nodivider='false' title={<HeaderPage fontSize='28px'>新增用户</HeaderPage>}>
      <Table type='table'>
        <TableHead>
          <TableRow>
            <TableCell>序號</TableCell>
            <TableCell px={{ base: '1', sm: '1', md: '3' }}>名稱</TableCell>
            <TableCell px={{ base: '1', sm: '1', md: '3' }}>值</TableCell>
            <TableCell px={{ base: '1', sm: '1', md: '3' }}>名稱</TableCell>
            <TableCell px={{ base: '1', sm: '1', md: '3' }}>值</TableCell>
            <TableCell px={{ base: '1', sm: '1', md: '3' }}>名稱</TableCell>
            <TableCell px={{ base: '1', sm: '1', md: '3' }}>值</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <>
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell px={{ base: '1', sm: '1', md: '3' }}>{item.fieldName}</TableCell>
                  <TableCell px={{ base: '1', sm: '1', md: '3' }}>{item.describe}</TableCell>
                  <TableCell px={{ base: '1', sm: '1', md: '3' }}>{item.fieldName}</TableCell>
                  <TableCell px={{ base: '1', sm: '1', md: '3' }}>{item.describe}</TableCell>
                  <TableCell px={{ base: '1', sm: '1', md: '3' }}>{item.fieldName}</TableCell>
                  <TableCell px={{ base: '1', sm: '1', md: '3' }}>{item.describe}</TableCell>
                </TableRow>
              </>
            )
          })}

        </TableBody>
      </Table>
    </Page>
  )
}

export const condensed = () => {
  const data = [
    {
      fieldName: '姓名',
      describe: '必填'
    },
    {
      fieldName: '英文姓名',
      describe: '選填'
    },
    {
      fieldName: '性別',
      describe: '選填可'
    },
    {
      fieldName: '學生證號碼',
      describe: '選填'
    },
    {
      fieldName: '身份證號碼',
      describe: '選填可留空'
    },
    {
      fieldName: '學校管理員',
      describe: '學生'
    }
  ]
  const header = ['序號', '名稱']
  return (
    <Page nodivider='false' title={<HeaderPage fontSize='28px'>新增用户</HeaderPage>}>
      <Table type='table condensed'>
        <TableHead>
          <TableRow>
            <TableCell>序號</TableCell>
            <TableCell>名稱</TableCell>
            <TableCell>值</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <>
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.fieldName}</TableCell>
                  <TableCell>{item.describe}</TableCell>
                </TableRow>
              </>
            )
          })}

        </TableBody>
      </Table>
    </Page>
  )
}
export const line = () => {
  const data = [
    {
      fieldName: '姓名',
      describe: '必填'
    },
    {
      fieldName: '英文姓名',
      describe: '選填'
    },
    {
      fieldName: '性別',
      describe: '選填可'
    },
    {
      fieldName: '學生證號碼',
      describe: '選填'
    },
    {
      fieldName: '身份證號碼',
      describe: '選填可留空'
    },
    {
      fieldName: '學校管理員',
      describe: '學生'
    }
  ]
  const header = ['序號', '名稱']
  return (
    <Page nodivider='false' title={<HeaderPage fontSize='28px'>新增用户</HeaderPage>}>
      <Table type='line'>
        <TableHead>
          <TableRow>
            <TableCell>序號</TableCell>
            <TableCell>名稱</TableCell>
            <TableCell>值</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <>
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.fieldName}</TableCell>
                  <TableCell>{item.describe}</TableCell>
                </TableRow>
              </>
            )
          })}

        </TableBody>
      </Table>
    </Page>
  )
}

export const stripe = () => {
  const data = [
    {
      fieldName: '姓名',
      describe: '必填'
    },
    {
      fieldName: '英文姓名',
      describe: '選填'
    },
    {
      fieldName: '性別',
      describe: '選填可'
    },
    {
      fieldName: '老師',
      describe: '學生'
    },
    {
      fieldName: '學校主管',
      describe: '學生'
    },
    {
      fieldName: '學校管理員',
      describe: '學生'
    }
  ]
  const header = ['序號', '名稱']
  return (
    <Page nodivider='false' title={<HeaderPage fontSize='28px'>新增用户</HeaderPage>}>
      <Table type='stripe'>
        <TableHead>
          <TableRow>
            <TableCell>序號</TableCell>
            <TableCell>名稱</TableCell>
            <TableCell>值</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <>
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.fieldName}</TableCell>
                  <TableCell>{item.describe}</TableCell>
                </TableRow>
              </>
            )
          })}

        </TableBody>
      </Table>
    </Page>
  )
}
