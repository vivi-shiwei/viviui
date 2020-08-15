import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from 'viviui'
import { memo } from 'react'
const DescribeTable = ({ describeInfo }) => {
  return (
    <Table w='100%'>
      <TableHead>
        <TableRow h='50px'>
          <TableCell w='60px'>序号</TableCell>
          <TableCell>名称</TableCell>
          <TableCell>值</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          describeInfo.map((describe, index) => {
            return (
              <>
                <TableRow h='40px'>
                  <TableCell textAlign='center'>{index + 1}</TableCell>
                  <TableCell textAlign='center' px={{ base: '1', sm: '1', md: '4' }} py={3}>{describe.fieldName}</TableCell>
                  <TableCell px={2} py={3}>{describe.describe}</TableCell>
                </TableRow>
              </>
            )
          })
        }
      </TableBody>
    </Table>
    // <Box as='table' w='100%'>
    //   <Box as='thead'>
    //     <Box as='tr' h='50px'>
    //       <Box as='td' border='1px #CBD5E0 solid' textAlign='center' w='60px'>序號</Box>
    //       <Box as='td' border='1px #CBD5E0 solid' textAlign='center' w='180px'>名稱</Box>
    //       <Box as='td' border='1px #CBD5E0 solid' textAlign='center'>值</Box>
    //     </Box>
    //   </Box>
    //   <Box as='tbody'>
    //     {
    //       describeInfo.map((describe, index) => {
    //         return (
    //           <Box as='tr' key={index} h='40px'>
    //             <Box as='td' border='1px #CBD5E0 solid' wordBreak='break-word' textAlign='center'>{index + 1}</Box>
    //             <Box as='td' border='1px #CBD5E0 solid' wordBreak='break-word' textAlign='center' px={2} py={3}>{describe.fieldName}</Box>
    //             <Box as='td' border='1px #CBD5E0 solid' wordBreak='break-word' px={2} py={3}>{describe.describe}</Box>
    //           </Box>
    //         )
    //       })
    //     }
    //   </Box>
    // </Box>
  )
}

export default memo(DescribeTable)
