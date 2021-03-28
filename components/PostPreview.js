import Avatar from '@components/Avatar';
import Date from '@components/Date';
import CoverImage from '@components/CoverImage';
import Link from 'next/link';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import CategoryBadge from './CategoryBadge';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) {
  return (
    <Box mb="8">
      {coverImage && (
        <Box mb="4">
          <CoverImage slug={slug} title={title} image={coverImage} size="small" />
        </Box>
      )}
      <Heading
        mb="4"
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        textTransform="capitalize"
        noOfLines="1"
      >
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </Heading>
      <Flex mb="4" align="center" justify="space-between">
        <CategoryBadge categories={categories} />
        <Date dateString={date} />
      </Flex>
      <Text my="4" noOfLines={[2, 3]} as="summary">
        {excerpt}
      </Text>
      {author?.name && <Avatar name={author.name} picture={author.image} slug={author.slug} />}
    </Box>
  );
}
