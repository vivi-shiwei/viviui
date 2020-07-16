import React from 'react'
import { OddFeature, GridFooter } from '../src/components/home/footerPage'
import { MdPalette, MdGrain } from 'react-icons/md'

export default { title: 'Footer' }

export const Footer = () => {
  return (
    <GridFooter>
      <OddFeature title='大標題' subtitle='小標題' icon={MdGrain} />
      <OddFeature subtitle='小標題' icon={MdPalette} />
      <OddFeature title='大標題' icon={MdGrain} />
      <OddFeature title='大標題' subtitle='小標題' />
    </GridFooter>
  )
}

export const MoreFooter = () => {
  return (
    <GridFooter>
      <OddFeature title='大標題' subtitle='小標題' icon={MdGrain} />
      <OddFeature subtitle='小標題' icon={MdPalette} />
      <OddFeature title='大標題' subtitle='小標題' icon={MdGrain} />
      <OddFeature subtitle='小標題' icon={MdPalette} />
      <OddFeature title='大標題' icon={MdGrain} />
      <OddFeature title='大標題' subtitle='小標題' />
      <OddFeature subtitle='小標題' icon={MdPalette} />
      <OddFeature title='大標題' icon={MdGrain} />
      <OddFeature title='大標題' subtitle='小標題' />
    </GridFooter>
  )
}
export const TwoFooter = () => {
  return (
    <GridFooter>
      <OddFeature title='大標題' subtitle='小標題' icon={MdGrain} />
      <OddFeature subtitle='小標題' icon={MdPalette} />
    </GridFooter>
  )
}
