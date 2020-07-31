import React, { useState } from 'react'
import {
  Box,
  Button
} from '@chakra-ui/core'

// import Table from '../src/components/test'
import Test, { useFocusElement } from '../src/components/test'

import MyImage from '../static/QQ20200518181405.jpg'

export const focusElement = () => {
  const elementRef = React.useRef(null)
  const [showing, setShowing] = React.useState(false)
  const bind = useFocusElement(elementRef, showing, { background: 'red' })
  console.log(bind)
  return (
    <>
      <div ref={elementRef}>nimei</div>
      <Button onClick={() => setShowing(true)}>焦點</Button>
      <Button onClick={() => setShowing(false)}>失去</Button>
    </>
  )
}
export const test = () => {
  return (
    <Test />
  )
}
export const counter = () => {
  let counter = 0

  const [number, useNumber] = useState(() => counter++)
  return (
    <>
      <div>{number}</div>
      <Button onClick={() => useNumber(number + 1)}>點擊+1</Button>
    </>
  )
}
export const state = () => {
  const [number, useNumber] = useState(0)
  return (
    <>
      <Box>{number}</Box>
      <Button onClick={() => useNumber(number + 1)}>點擊+1</Button>
    </>
  )
}

export default {
  title: 'Test'
}
