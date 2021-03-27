import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
import dynamic from 'next/dynamic';
import Date from './Date';
const CommentForm = dynamic(() => import('@components/CommentForm'));

export default function Comments({ postId, comments }) {
  return (
    <Box maxW="3xl" mx="auto">
      <Heading mb="4" fontSize="xl" borderBottom="1px solid lightgray" pb="1">
        Yorumlar
      </Heading>
      <Box my="4">
        {comments.map((i) => (
          <Box bg="yellow.100" rounded="sm" overflow="hidden" my="2" key={i._id}>
            <Flex w="full" justify="space-between" bg="yellow.200" py="1" px="2">
              <Text fontWeight="bold" fontSize="xs">
                {i.name}
              </Text>
              <Date dateString={i._createdAt} fontSize="xs" />
            </Flex>
            <Text mx="2" my="2" fontSize="sm">
              {i.comment}
            </Text>
          </Box>
        ))}
      </Box>
      <Heading my="4" fontSize="xl" borderBottom="1px solid lightgray" pb="1">
        Yorum Yap
      </Heading>
      <CommentForm postId={postId} />
    </Box>
  );
}
