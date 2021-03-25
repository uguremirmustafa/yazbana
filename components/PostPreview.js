import Avatar from '@components/Avatar';
import Date from '@components/Date';
import CoverImage from '@components/CoverImage';
import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/layout';

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <Box>
      <Box mb="4">
        <CoverImage slug={slug} title={title} image={coverImage} size="small" />
      </Box>

      <Heading mb="4" fontSize="3xl" textTransform="capitalize">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </Heading>
      <Box mb="4">
        <Date dateString={date} />
      </Box>

      <Text my="4" noOfLines={[1, 2, 3]} as="summary">
        {excerpt}
      </Text>
      <Avatar name={author.name} picture={author.image} />
    </Box>
  );
}
