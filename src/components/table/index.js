import React, { memo } from 'react'
import {
  Box
} from '@chakra-ui/core'

const Table = ({ type, children, ...props }) => {
  let table = null
  let stripe = null
  let line = null
  let hover = null
  let condensed = null

  if (type) {
    type.split(' ').map((c) => {
      switch (c) {
        case 'table':
          table = c
          break
        case 'stripe':
          stripe = c
          break
        case 'condensed':
          condensed = c
          break
        case 'hover':
          hover = c
          break
        case 'line':
          line = c
          break
      }
    })
  }

  return (
    <Box
      as='table'
      className='table'
      w='100%'
      letterSpacing='0.05rem'
      {...props}
    >
      {children}
      {table && (
        <style>
          {`
              .table tr td,th{
                border: 1px solid #d0cbcb;
                text-align: center;
                padding: 8px;
              }
              `}
        </style>
      )}
      {hover && (
        <style>
          {`
              .table tbody tr:hover{
                  cursor:auto;
                  background-color:rgba(0, 0, 0, 0.05);
              }
              `}
        </style>
      )}
      {stripe && (
        <style>
          {`
              .table tbody tr:nth-child(odd) {
                background-color: rgba(0, 0, 0, 0.01);
             }
              `}
        </style>
      )}
      {line && (
        <style>
          {`
              .table tr td {
                border-top: 1px solid #f1f2f4;
                text-align: left;
                padding: 8px;
             }
              `}
        </style>
      )}
      {condensed && (
        <style>
          {`
              .table tr td,th {
                padding: 5px;
             }
              `}
        </style>
      )}
    </Box>
  )
}

export default memo(Table)
