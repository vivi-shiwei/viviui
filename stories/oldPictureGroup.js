import React from 'react'
import { Box } from '@chakra-ui/core'
import Container from '../src/components/container'

import OldPictureGroup from '../src/components/oldPictureGroup'
import Other from '../src/components/oldPictureGroup/other'

export default { title: 'OldPictureGroup(hui)' }

export const OldPictureGroup1 = () => {
  const darks = [
    { type: 'image/jpg', url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3988286801,48626279&fm=26&gp=0.jpg', id: 1 },
    { type: 'image/jpg', url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1947839005,1811220579&fm=26&gp=0.jpg', id: 2 },
    { type: 'image/jpg', url: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg', id: 3 },
    { type: 'image/jpg', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg', id: 4 },
    { type: 'image/webg', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2407081651,3186896498&fm=26&gp=0.jpg', id: 5 }
    // { type: 'image/png', url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=325461855,3402280707&fm=26&gp=0.jpg', id: 6 }
    // { type: 'video', url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327687920,1542279815&fm=26&gp=0.jpg', id: 7 }
  ]
  return (
    <Box>
      <OldPictureGroup photos={darks} mt='30px' maxW='500px' m='0 auto' backgroundColor='#EE6AA7' />
    </Box>
  )
}
