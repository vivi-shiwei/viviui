import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'
// import { ParameContext } from './tableContext'

// table component
const Table = ({ dtype, children, ...props }) => {
  return (
    <>
      {/* 样式 默认 */}
      {(dtype === 'noColor') && (
        <Box
          as='table'
          className='tableDefault '
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >

          {children}

        </Box>
      )}
      {(dtype === 'defaultColor') && (
        <Box
          as='table'
          className='tableColor borderButtom '
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >

          {children}

        </Box>
      )}
      {(dtype === 'border') && (
        <Box
          as='table'
          className='tableDefault tableColor'
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}
        </Box>
      )}
      {/* 样式 条纹  */}
      {(dtype === 'shadow') && (
        <Box
          as='table'
          className=' trShadow tableColor  borderButtom '
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}
          <style>
            {`
               .trShadow tr{ //条纹
                boxShadow: '0 6px 20px 0 rgba(0,0,0,0.19)';
              }   
              `}
          </style>
        </Box>
      )}

      {/* 鼠标指示 */}
      {(dtype === 'mouse') && (
        <Box
          as='table'
          className='trHove tableColor borderButtom '
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}
          <style>
            {`
               .trLeight tr{
                line-height:50px;//紧凑
               }
              
              `}
          </style>
        </Box>

      )}
      {/* 紧凑 */}
      {
        (dtype === 'compact') && (
          <Box
            as='table'
            className=' tableColor trLeight'
            w='99%'
            m='auto'
            letterSpacing='0.05rem'
            {...props}
          >
            {children}
            <style>
              {`
               .trHover tr:hover{ //鼠标经过
                cursor:move;
              }
              `}
            </style>
          </Box>
        )
      }

      <style>
        {
          `
       .borderButtom tr{ 
         border-bottom: 1px solid #ddd;  //黑直线
       }
       .borderButtom tr:nth-last-child(1){ 
        border-bottom:none; //最后一个 
       }
       .tableDefault tr td , .tableDefault tr th{
         border: 1px solid #ddd;//所有边框黑色
       }
       
       .tableColor tr:nth-child(1) td{
         background-color:none; //隔行换色
       }
       .tableColor tr:nth-child(even) td{
         background-color:#dff0d8;
       }
       .tableColor tr:nth-child(odd) td{
         background-color:#f9f9f9 ;
       }
       .tableColor tr:first-child{
        background-color:#EEE0E5;//第一个
      }
      
      
     `
        }

      </style>
    </>
  )
}

export default memo(Table)
