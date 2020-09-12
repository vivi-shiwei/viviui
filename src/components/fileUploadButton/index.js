import {
  Box,
  Button,
  Input,
  useToast
} from '@chakra-ui/core'
import { FaUpload } from 'react-icons/fa'

const FileUploadButton = ({ getData, disabled = false }) => {
  const toast = useToast()
  return (
    <Button variantColor='teal' disabled={disabled} position='relative'>
      <Box as={FaUpload} mr={2} />
      <Box as='span'>選擇 CSV 文檔</Box>
      <Input
        position='absolute'
        top='0px'
        bottom='0px'
        left='0px'
        right='0px'
        opacity='0'
        type='file'
        name='resume'
        accept='.csv'
        cursor='pointer'
        disabled={disabled}
        onChange={async e => {
          const input = e.target

          if ('files' in input && input.files.length > 0) {
            let filename = input.files[0].name
            filename = filename.substr(filename.lastIndexOf('.') + 1)

            // 檢測導入文件類型
            if (filename.toLowerCase() !== 'csv') {
              toast({
                title: '文件類型錯誤',
                description: '請使用 csv 文檔',
                status: 'error',
                duration: '3000',
                isClosable: true,
                position: 'top'
              })

              // 清空 file 的值
              input.value = ''

              return null
            }

            const file = input.files[0]
            const reader = new FileReader()
            const csvdata = new Promise((resolve, reject) => {
              reader.onload = event => resolve(event.target.result)
              reader.onerror = error => reject(error)
              reader.readAsText(file)
            })

            csvdata.then(content => {
              if (getData) getData(content)

              // 提交完成後清空 file 的值
              input.value = ''
            })
          }
        }}
      />
    </Button>
  )
}

export default FileUploadButton
