import React, { useState } from 'react'
import { Box } from '@chakra-ui/core'
import NextLink from 'next/link'
import { action } from '@storybook/addon-actions'

import ModalSelector from '../src/components/modalSelector/index'
import AltRoundButton from '../src/components/modalSelector/squareButton'
import EditButton from '../src/components/modalSelector/editButton'
import ModalSelectorOption from '../src/components/modalSelector/modalSelectorOption'
import PictureBox from '../src/components/postCard/pictureBox'
import Pictures from '../src/components/postCard/pictures'

import MyImage from '../static/QQ20200518181405.jpg'
import MyImage6 from '../static/timg.jpg'
import MyImage3 from '../static/timg8J2T10BJ.jpg'

export default { title: 'picture(vivi)' }

export const PictureTwo = () => {
  const [values, setValues] = useState('cdsj6 2019/2020 Dashboard')

  return (
    <Box
      width={{ base: '100%', md: '655px' }}
      mx='auto'
    >
      <Box
        p='12px'
        border={{ sm: '1px solid #b7b7b7' }}
      >
        <Box>dfdsgdg</Box>
        <PictureBox>
          <Pictures imageURL={MyImage} />
          <Pictures imageURL={MyImage} />
        </PictureBox>
      </Box>
    </Box>
  )
}

export const Picture = () => {
  const [values, setValues] = useState('cdsj6 2019/2020 Dashboard')

  return (
    <Box
      width={{ base: '100%', md: '655px' }}
      mx='auto'
    >
      <Box
        p='12px'
        border={{ sm: '1px solid #b7b7b7' }}
      >
        <Box>dfdsgdg</Box>
        <PictureBox>
          <Pictures imageURL={MyImage} />
          <Pictures imageURL={MyImage} />
          <Pictures imageURL={MyImage} />
          <Pictures imageURL={MyImage} />
        </PictureBox>
      </Box>
    </Box>
  )
}
