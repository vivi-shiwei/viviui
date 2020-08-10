import React from 'react'
import { AiFillGoogleSquare } from 'react-icons/ai'

import FullScreenView from '../src/components/fullScreenView'
import RedButton from '../src/components/fullScreenView/redButton'
import BlueButton from '../src/components/fullScreenView/blueButton'
import LargeTitle from '../src/components/fullScreenView/largeTitle'
import ButtonGrid from '../src/components/fullScreenView/buttonGrid'

export default { title: 'FullScreenVIew(vivi)' }

export const FullScreenVIew = () => {
  return (
    <FullScreenView closePath='/'>
      <LargeTitle>登入</LargeTitle>
      <ButtonGrid>
        <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</RedButton>
        <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</RedButton>
        <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</RedButton>
        <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</RedButton>
      </ButtonGrid>
    </FullScreenView>
  )
}
export const FullSetSchool = () => {
  return (
    <FullScreenView closePath='/'>
      <LargeTitle>请先选择学校</LargeTitle>
      <ButtonGrid>
        <BlueButton>使用google登入</BlueButton>
        <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />} rightIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
        <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
        <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
      </ButtonGrid>
    </FullScreenView>
  )
}
