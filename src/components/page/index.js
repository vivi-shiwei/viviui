import React, { Children } from 'react'

import WbgPage from './wbgPage'
import HeaderPage from './headerPage'

const Page = ({ backurl, nodivider = false, children, ...props }) => {
  let title = null
  const chil = []

  Children.map(children, (c, i) => {
    switch (c.type) {
      case HeaderPage:
        if (!title) title = []
        title.push(c) // 頭部
        break
      default:
        chil.push(c)// 頭部以外的 children
    }
  })

  return (
    <WbgPage backurl={backurl} title={title} nodivider={nodivider} {...props}>
      {chil}
    </WbgPage>
  )
}

export default Page
