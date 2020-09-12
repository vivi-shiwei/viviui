import React from 'react'
import { AiFillGoogleSquare } from 'react-icons/ai'

import { action } from '@storybook/addon-actions'
import NextLink from 'next/link'

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
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</RedButton>
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</RedButton>
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</RedButton>
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</RedButton>
          </a>
        </NextLink>
      </ButtonGrid>
    </FullScreenView>
  )
}
export const FullSetSchool = () => {
  return (
    <FullScreenView closePath='/'>
      <LargeTitle>请先选择学校</LargeTitle>
      <ButtonGrid>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <BlueButton>使用google登入</BlueButton>
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />} rightIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
          </a>
        </NextLink>
        <NextLink href='/test' passHref>
          <a onClick={action('button-click')}>
            <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
          </a>
        </NextLink>
      </ButtonGrid>
    </FullScreenView>
  )
}

export const buttongrid = () => {
  return (
    <ButtonGrid columns={2}>
      <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>
        这是一个红色按钮
      </RedButton>
      <RedButton rightIcon={<AiFillGoogleSquare size='24px' />}>
        这是一个红色按钮
      </RedButton>
      <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>
        这是一个蓝色按钮
      </BlueButton>
      <BlueButton rightIcon={<AiFillGoogleSquare size='24px' />}>
        这是一个蓝色按钮
      </BlueButton>
    </ButtonGrid>
    // <FullScreenView closePath='/'>
    //   <LargeTitle>请先选择学校</LargeTitle>
    //   <ButtonGrid>
    //     <NextLink href='/test' passHref>
    //       <a onClick={action('button-click')}>
    //         <BlueButton>使用google登入</BlueButton>
    //       </a>
    //     </NextLink>
    //     <NextLink href='/test' passHref>
    //       <a onClick={action('button-click')}>
    //         <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />} rightIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
    //       </a>
    //     </NextLink>
    //     <NextLink href='/test' passHref>
    //       <a onClick={action('button-click')}>
    //         <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
    //       </a>
    //     </NextLink>
    //     <NextLink href='/test' passHref>
    //       <a onClick={action('button-click')}>
    //         <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
    //       </a>
    //     </NextLink>
    //   </ButtonGrid>
    // </FullScreenView>
  )
}

export const largeTitle = () => {
  return (
    <LargeTitle>这是一个标题</LargeTitle>
    // <FullScreenView closePath='/'>
    //   <LargeTitle>请先选择学校</LargeTitle>
    //   <ButtonGrid>
    //     <NextLink href='/test' passHref>
    //       <a onClick={action('button-click')}>
    //         <BlueButton>使用google登入</BlueButton>
    //       </a>
    //     </NextLink>
    //     <NextLink href='/test' passHref>
    //       <a onClick={action('button-click')}>
    //         <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />} rightIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
    //       </a>
    //     </NextLink>
    //     <NextLink href='/test' passHref>
    //       <a onClick={action('button-click')}>
    //         <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
    //       </a>
    //     </NextLink>
    //     <NextLink href='/test' passHref>
    //       <a onClick={action('button-click')}>
    //         <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>使用google登入</BlueButton>
    //       </a>
    //     </NextLink>
    //   </ButtonGrid>
    // </FullScreenView>
  )
}
