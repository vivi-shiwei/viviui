import React from 'react'
import FeatureGrid from '../src/components/featureGrid'
import Feature from '../src/components/featureGrid/feature'
import { MdPalette, MdGrain } from 'react-icons/md'

export default { title: 'FeatureGrid(vivi)' }

export const Footer = () => {
  return (
    <FeatureGrid>
      <Feature title='大標題' subtitle='小標題' icon={MdGrain} />
      <Feature subtitle='小標題' icon={MdPalette} />
      <Feature title='大標題' icon={MdGrain} />
      <Feature title='大標題' subtitle='小標題' />
    </FeatureGrid>
  )
}

export const MoreFooter = () => {
  return (
    <FeatureGrid>
      <Feature title='大標題' subtitle='小標題' icon={MdGrain} />
      <Feature subtitle='小標題' icon={MdPalette} />
      <Feature title='大標題' subtitle='小標題' icon={MdGrain} />
      <Feature subtitle='小標題' icon={MdPalette} />
      <Feature title='大標題' icon={MdGrain} />
      <Feature title='大標題' subtitle='小標題' />
      <Feature subtitle='小標題' icon={MdPalette} />
      <Feature title='大標題' icon={MdGrain} />
      <Feature title='大標題' subtitle='小標題' />
    </FeatureGrid>
  )
}
export const TwoFooter = () => {
  return (
    <FeatureGrid>
      <Feature title='大標題' subtitle='小標題' icon={MdGrain} />
      <Feature subtitle='小標題' icon={MdPalette} />
    </FeatureGrid>
  )
}
