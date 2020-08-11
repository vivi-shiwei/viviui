import React, { Children } from 'react'

import WbgPage from './wbgPage'
import HeaderPage from './pageHeader'

const Page = ({ title, nodivider = false, children, ...props }) => {
  let headerPage = null
  const chil = []

  Children.map(children, (c, i) => {
    switch (c.type) {
      case HeaderPage:
        if (!headerPage) headerPage = []
        headerPage.push(c) // 頭部
        break
      default:
        chil.push(c)// 頭部以外的 children
    }
  })

  return (
    <WbgPage title={title} headerPage={headerPage} nodivider={nodivider} {...props}>
      {chil}
    </WbgPage>
  )
}

export default Page
