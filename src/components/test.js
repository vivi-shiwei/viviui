import React, { cloneElement, useContext, createContext, useEffect } from 'react'

import createFocusTrap, { FocusTrap } from 'focus-trap'
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody
// } from '@chakra-ui/core'
const SectionContext = createContext({ parent: 'TableHead' })

const TableHead = ({ children }) => {
  return (
    <thead>
      <SectionContext.Provider value={{ parent: 'TableHead' }}>
        {children}
      </SectionContext.Provider>
      {cloneElement(children, {
        parent: 'TableHead'
      })}
    </thead>
  )
}

const TableBody = ({ children }) => {
  return (
    <tbody>
      <SectionContext.Provider value={{ parent: 'TableBody' }}>
        {children}
      </SectionContext.Provider>
      {cloneElement(children, {
        parent: 'TableBody'
      })}
    </tbody>
  )
}

const TableCell = ({ children }) => {
  const { parent } = useContext(SectionContext)
  const Component = parent === 'TableHead' ? 'th' : 'td'
  return <Component>{children}</Component>
}

const Table = () => (
  <table>
    <TableHead>
      <TableCell>Name</TableCell>
      <TableCell>Age</TableCell>
    </TableHead>
    <TableBody>
      <TableCell>Ben McMahen</TableCell>
      <TableCell>Thirty-something</TableCell>
    </TableBody>
  </table>
)

export function useFocusElement (elementRef, showing, options = {}) {
  // const elementRef = React.useRef(null)
  console.log('elementRef', elementRef.current)
  const trapRef = React.useRef(null)

  function focusElement () {
    if (!elementRef.current) {
      console.error('No element found to found')
      return null
    }

    const trap = createFocusTrap(elementRef.current, {
      escapeDeactivates: false,
      clickOutsideDeactivates: true,
      fallbackFocus: elementRef.current,
      ...options
    })

    trapRef.current = trap
    trap.activate()
  }

  function focusTrigger () {
    if (trapRef.current) {
      trapRef.current.deactivate()
    }
  }

  useEffect(() => {
    if (showing) focusElement()
    else focusTrigger()
  }, [showing])

  return {
    bind: { ref: elementRef, tref: trapRef }
  }
}
export default Table
