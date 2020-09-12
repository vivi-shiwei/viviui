import {
  Box
} from '@chakra-ui/core'

const PostEmbed = ({ children, ...props }) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

export default PostEmbed
