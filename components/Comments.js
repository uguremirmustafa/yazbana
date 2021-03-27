import { Box, Heading } from '@chakra-ui/layout';
import CommentForm from '@components/CommentForm';

export default function Comments({ postId }) {
  return (
    <Box>
      <Heading>Comments</Heading>
      <CommentForm postId={postId} />
    </Box>
  );
}
