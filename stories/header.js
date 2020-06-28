import React from 'react'
import { Header, RightButton, LeftButton } from '../src/components/header'
import { MdAccessibility, MdPalette, MdGrain } from 'react-icons/md'
import SponsorButton from '../src/components/SponsorButton'
import Logo from '../src/components/logo'
import GitHubButton from '../src/components/GitHubButton'
import { FaHeart } from 'react-icons/fa'
import {
  Header as HeaderContainer,
  GithubLink,
  StorybookLink
} from '../src/components/DocsHeader'
import { DiGithubBadge } from 'react-icons/di'
import { StorybookIcon } from '../src/components/storybook-icon'

export default { title: 'Header' }

export const withHeader = () => {
  return (
    <Header>
      <LeftButton gitHubButton />
      <RightButton githubLink={DiGithubBadge} storybookLink={StorybookIcon} />
    </Header>
  )
}

export const nogithubButton = () => {
  return (
    <Header>
      <LeftButton />
      <RightButton githubLink={DiGithubBadge} storybookLink={StorybookIcon} />
    </Header>
  )
}
export const nogihubButton = () => {
  return (
    <Header>
      <LeftButton>
        <Logo icon={MdPalette} text='fewfgtret' />
      </LeftButton>
      <RightButton>
        <StorybookLink icon={StorybookIcon} />
      </RightButton>
    </Header>
  )
}

export const noleftButton = () => {
  return (
    <Header>
      <LeftButton>
        <Logo icon={MdPalette} text='fewfgtret' />
      </LeftButton>
      <RightButton>
        <SponsorButton name='dfd' icon={FaHeart} />
        <StorybookLink icon={StorybookIcon} />
      </RightButton>
    </Header>
  )
}
