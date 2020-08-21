import React from 'react'
import { Box } from '@chakra-ui/core'
import Container from '../src/components/container'

import OldPictureGroup from '../src/components/oldPictureGroup'

export default { title: 'OldPictureGroup(hui)' }

export const OldPictureGroup1 = () => {
  const photos = [
    { type: 'image/jpg', url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534295925,1741655192&fm=26&gp=0.jpg' },
    { type: 'image/jpg', url: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=390752696,937398701&fm=26&gp=0.jpg}' },
    { type: 'image/jpg', url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3679156262,2063123018&fm=26&gp=0.jpg' }
    // {type:'image/jpg', url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1815132930,1669392629&fm=26&gp=0.jpg' },
    // {type:'image/webg', url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2416085737,1631868062&fm=26&gp=0.jpg' },
    // {type:'image/png', url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3193828568,4262493738&fm=26&gp=0.jpg'},
    // {type:'video', url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1896313333,2910419514&fm=26&gp=0.jpg'}
  ]
  return (
    <Container mt='30px' border='1px solid #ddd' p='5' width='600px'>
      <OldPictureGroup photos={photos} />
    </Container>
  )
}
