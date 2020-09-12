import {
  Box
} from '@chakra-ui/core'

const PostParticipast = ({ children, ...props }) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

export default PostParticipast
