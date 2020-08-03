import {
  Box
} from '@chakra-ui/core'
import CsvItem from './csvItem'

const CsvTable = ({ tableHead, csvContent }) => {
  // 因為有 memo，prop 沒變化就不 rerender
  // props 有變化也是會 render
  // 它內部 state 有變化，還是會 render

  return (
    <Box border='1px solid #e6e6e6' overflow='auto' minH='300px' maxH='500px'>
      <Box>
        <Box as='table' border='1' w='auto'>
          <Box as='thead' background='#f2f2f2' className='csv-table-head'>
            <Box as='tr' h='50px'>
              <Box as='th' className='csv-tabel-haed-item'>
                <Box textAlign='center' w='90px'>序號</Box>
              </Box>
              {
                tableHead.map((head, index) => (
                  <Box key={index} as='th' className='csv-tabel-haed-item'>
                    <Box textAlign='center' w={`${head.width}px`}>{head.title}</Box>
                  </Box>
                ))
              }

              <Box as='th' className='csv-tabel-haed-item'>
                <Box textAlign='center' w='90px'>上傳狀態</Box>
              </Box>
            </Box>
          </Box>

          <Box as='tbody' fontSize='14px'>
            {
              Object.keys(csvContent).map((csvKey, index) => {
                return (
                  <CsvItem
                    key={csvKey}
                    index={index}
                    csvKey={csvKey}
                    tableHead={tableHead}
                    data={csvContent[csvKey].data}
                    state={csvContent[csvKey].state}
                    error={csvContent[csvKey].error}
                  />
                )
              })
            }
          </Box>
        </Box>
      </Box>
      <style jsx global>
        {`
          .csv-table-head .csv-tabel-haed-item:first-child,
          .csv-table-body-content .csv-table-body-item:first-child{
            border-left: none;
          }
          .csv-table-head .csv-tabel-haed-item,
          .csv-table-body-content .csv-table-body-item{
            border-left: 1px #e6e6e6 solid;
            border-bottom: 1px #e6e6e6 solid;
          }
        `}
      </style>
    </Box>
  )
}

export default CsvTable
