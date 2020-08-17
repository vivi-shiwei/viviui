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
      {(dtype === 'blackBorder') && (
        <Box
          as='table'
          className='tableBlack '
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}
          <style>
            {`
            .tableBlack tr td ,.tableBlack tr th{
               border: 1px solid black;
            }
           `}
          </style>
        </Box>
      )}

      {(dtype === 'border') && (
        <Box
          as='table'
          className='borderStyle'
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}

          <style>
            {`
               .borderStyle tr td , .borderStyle tr th{
                border: 1px solid black;//所有边框黑色
              }
              .borderStyle tr:nth-child(1) td{
                background-color:none; //隔行换色
              }
              .borderStyle tr:nth-child(even) td{
                background-color:#dff0d8;
              }
              .borderStyle tr:nth-child(odd) td{
                background-color:#f9f9f9 ;
              }
              .borderStyle tr:first-child{
               background-color:#EEE0E5;//第一个
             }
            
            `}
          </style>
        </Box>
      )}
      {/* 样式 条纹  */}
      {(dtype === 'shadow') && (
        <Box
          as='table'
          className=' trShadow'
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}
          <style>
            {`
               .trShadow tr{ //条纹
                box-shadow: '0 6px 20px 0 rgba(0,0,0,0.19)';
              }   
              .trShadow tr{ 
                border-bottom: 1px solid #ddd;  //黑直线
              }
              .trShadow tr:nth-last-child(1){ 
               border-bottom:none; //最后一个 
              }
              .trShadow  tr:nth-child(1) td{
                background-color:none; //隔行换色
              }
              .trShadow  tr:nth-child(even) td{
                background-color:#dff0d8;
              }
              .trShadow  tr:nth-child(odd) td{
                background-color:#f9f9f9 ;
              }
              .trShadow tr:first-child{
               background-color:#EEE0E5;//第一个
             }

              `}
          </style>
        </Box>
      )}

      {/* 鼠标指示 */}
      {(dtype === 'mouse') && (
        <Box
          as='table'
          className='trHover'
          w='99%'
          m='auto'
          letterSpacing='0.05rem'
          {...props}
        >
          {children}
          <style>
            {`
              .trHover tr td:hover,.trHover tr th:hover{ 
                  cursor:auto; //鼠标经过
              }
              .trHover tr{
                border-bottom: 1px solid #ddd;  //黑直线
              }
              .trHover tr:nth-last-child(1){ 
                border-bottom:none; //最后一个 
               }
              .trHover tr:nth-child(1) td{
                background-color:none; //隔行换色
              }
              .trHover tr:nth-child(even) td{
                background-color:#dff0d8;
              }
              .trHover tr:nth-child(odd) td{
                background-color:#f9f9f9 ;
              }
              .trHover tr:first-child{
               background-color:#EEE0E5;//第一个
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
            className='trLeight'
            w='99%'
            m='auto'
            letterSpacing='0.05rem'
            {...props}
          >
            {children}

            <style>
              {`
               .trLeight tr{
                line-height:30px;//紧凑
               }
               .trLeight tr:nth-child(1) td{
                background-color:none; //隔行换色
              }
              .trLeight tr:nth-child(even) td{
                background-color:#dff0d8;
              }
              .trLeight tr:nth-child(odd) td{
                background-color:#f9f9f9 ;
              }
              .trLeight tr:first-child{
               background-color:#EEE0E5;//第一个
             }
              
              `}
            </style>
          </Box>
        )
      }
      {/* 松大 */}
      {
        (dtype === 'looseBig') && (
          <Box
            as='table'
            className='trLeight'
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
               .trLeight tr:nth-child(1) td{
                background-color:none; //隔行换色
              }
              .trLeight tr:nth-child(even) td{
                background-color:#dff0d8;
              }
              .trLeight tr:nth-child(odd) td{
                background-color:#f9f9f9 ;
              }
              .trLeight tr:first-child{
               background-color:#EEE0E5;//第一个
             }
              `}
            </style>
          </Box>
        )
      }

    </>
  )
}

export default memo(Table)
