import React from 'react'
import { Header, RightButton, LeftButton } from '../src/components/header'
import { MdAccessibility, MdPalette, MdGrain } from 'react-icons/md'
import SponsorButton from '../src/components/SponsorButton'
import Logo from '../src/components/logo'
import GitHubButton from '../src/components/GitHubButton'
import {
  Header as HeaderContainer,
  GithubLink,
  StorybookLink
} from '../src/components/DocsHeader'
import { DiGithubBadge } from 'react-icons/di'
import { StorybookIcon } from '../src/components/storybook-icon'

export default { title: 'Header' }

export const withHeader = () => <Header />

export const heroWithoutTitle = () => {
  return (
    <Header>
      <RightButton githubLin={DiGithubBadge} storybookLin={StorybookIcon} sponsorBut />
      <LeftButton gitHubButton logi />
      {/* <GitHubButton name='Star'>
        <Logo icon={MdAccessibility} text='chakra' />
      </GitHubButton>
      <SponsorButton /> */}
    </Header>
  )
}
