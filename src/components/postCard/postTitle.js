import {
  Box
} from '@chakra-ui/core'

const PostTitle = ({ children, ...props }) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

export default PostTitle
