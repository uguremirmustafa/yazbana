import Avatar from '@components/Avatar';
import Date from '@components/Date';
import CoverImage from '@components/CoverImage';
import Link from 'next/link';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
import CategoryBadge from './CategoryBadge';

export default function HeroPost({ title, coverImage, date, excerpt, author, slug, categories }) {
  return (
    <Box as="section" mb="8">
      <Box mb={{ base: '8', md: '12' }}>
        <CoverImage slug={slug} title={title} image={coverImage} />
      </Box>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
        <GridItem borderRight={{ md: 'rgba(1,1,1,0.6) 1px solid' }} pr={{ md: '6' }}>
          <Heading
            mb="4"
            textTransform="capitalize"
            fontSize={{ base: '3xl', lg: '4xl' }}
            className="mb-4 text-4xl lg:text-6xl leading-tight"
          >
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </Heading>
          <Flex mb="4" align="center" justify="space-between">
            <CategoryBadge categories={categories} />
            <Date dateString={date} />
          </Flex>
        </GridItem>
        <GridItem>
          <Box my="4">
            <Avatar name={author.name} picture={author.image} slug={author.slug} />
          </Box>
          <Text className="text-lg leading-relaxed mb-4" fontSize="lg" mb="4">
            {excerpt}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
