import { Grid, GridItem, Heading } from '@chakra-ui/layout';
import PostPreview from '@components/PostPreview';

export default function MoreStories({ posts, column }) {
  const triple = column === 3;
  return (
    <section>
      <Grid
        templateColumns={{ base: '1fr', md: triple ? '1fr 1fr 1fr' : '1fr 1fr' }}
        gap={{ md: '8', lg: '12' }}
      >
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
