import {
  Box
} from '@chakra-ui/core'

const PostPhtos = ({ children, ...props }) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

export default PostPhtos
