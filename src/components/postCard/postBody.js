import {
  Box
} from '@chakra-ui/core'

const PostBody = ({ children, ...props }) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

export default PostBody
