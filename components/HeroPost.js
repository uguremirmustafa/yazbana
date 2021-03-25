import Avatar from '@components/Avatar';
import Date from '@components/Date';
import CoverImage from '@components/CoverImage';
import Link from 'next/link';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/layout';

export default function HeroPost({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <Box as="section">
      <Box mb={{ base: '8', md: '12' }}>
        <CoverImage slug={slug} title={title} image={coverImage} />
      </Box>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
        <GridItem borderRight="rgba(1,1,1,0.6) 1px solid" pr="6">
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
          <Box mb={{ base: '4', md: '0' }} className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </Box>
        </GridItem>
        <GridItem>
          <Box my="4">
            <Avatar name={author.name} picture={author.image} />
          </Box>
          <Text className="text-lg leading-relaxed mb-4" fontSize="lg" mb="4">
            {excerpt}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
