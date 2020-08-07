import React from 'react'
import { Box, Flex, Link } from '@chakra-ui/core'

import NextLink from 'next/link'

import AvatarTooltip from '../src/components/avatarTooltip'
import Avatars from '../src/components/avatarTooltip/avatars'
import EditButton from '../src/components/avatarTooltip/editButton'

import MyImage from '../static/QQ20200518181405.jpg'
import MyImage6 from '../static/timg.jpg'

export default { title: 'AvatarTootip' }

export const ClsMember = () => {
  const data = ['甲班', '乙班', '丙班', '丁班', '超级班']
  return (
    <AvatarTooltip
      editButton={<EditButton>编辑成员</EditButton>}
      avatars={
        <>
          <Box as='span' d='inline-block' mr={1}>
            <NextLink
              href='https://www.baidu.com/'
              passHref
            >
              <Link d='block'>
                <Avatars
                  name='vivi'
                // profilePhoto={MyImage}
                />
              </Link>
            </NextLink>
          </Box>
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />

          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
          <Avatars
            name='vivi'
            profilePhoto={MyImage}
          />
        </>
      }
    />
  )
}
