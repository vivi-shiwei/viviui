import React from 'react'
import { Box, useDisclosure, Button } from '@chakra-ui/core'

import PhotoMagnify from '../src/components/photoMagnify'

export default { title: 'PhotoMagnify(hui)' }

const darks = [
  // 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3988286801,48626279&fm=26&gp=0.jpg',
  'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1947839005,1811220579&fm=26&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3383916863,1183745965&fm=26&gp=0.jpg',
  'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1187213634,3203010965&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2407081651,3186896498&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=325461855,3402280707&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3211597368,1043800129&fm=26&gp=0.jpg'
]

export const PhotoMagnifyTest = () => {
  // const [isOpenPhotoViewModal, onOpenPhotoViewModal] = useState(null)
  // const onClosePhotoViewModal = () => onOpenPhotoViewModal(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const show = darks.slice(0, 1)
  return (
    <>
      <Box>
        <Button onClick={onOpen}>Open Modal</Button>
        <PhotoMagnify images={darks} indexI={darks.length} isOpen={onOpen} onClose={onClose} />
      </Box>
    </>
  )
}
