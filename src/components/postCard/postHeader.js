import {
  Box
} from '@chakra-ui/core'

const PostHeader = ({ children, ...props }) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

export default PostHeader
