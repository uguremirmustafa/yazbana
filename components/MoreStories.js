import { Grid, GridItem, Heading } from '@chakra-ui/layout';
import PostPreview from '@components/PostPreview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"></h2>
      <Heading mb="8" fontSize={{ base: '2xl', lg: '3xl' }}>
        Popular Posts
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={{ md: '8', lg: '12' }}>
        {posts.map((post) => (
          <GridItem key={post.slug}>
            <PostPreview
              title={post.title}
              coverImage={post.mainImage}
              date={post.publishedAt}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
