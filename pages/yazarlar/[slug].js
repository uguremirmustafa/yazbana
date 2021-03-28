import Layout from '@components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { authorsSlugsQuery, authorWithPostsQuery, postQuery } from '../../lib/queries';
import { usePreviewSubscription } from '../../lib/sanity';
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server';
import CategoryTitle from '@components/CategoryTitle';
import { Box, Divider, Grid, GridItem, Heading } from '@chakra-ui/layout';
import Avatar from '@components/Avatar';
import AuthorSocial from '@components/AuthorSocial';
import PostPreview from '@components/PostPreview';
import BlockContent from '@sanity/block-content-to-react';

export default function Post({ data = {}, preview }) {
  const router = useRouter();
  const slug = data?.author?.slug;
  const {
    data: { author },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <CategoryTitle>Loading...</CategoryTitle>
      ) : (
        author && (
          <Box as="section">
            <Head>
              <title>{author?.name} | Yazsana</title>
            </Head>
            <Grid templateColumns={{ base: '1fr', md: '2fr 3fr' }} minH="80vh" gap={8}>
              <GridItem display="flex" alignItems="center" flexDirection="column">
                <Heading
                  textAlign="center"
                  borderBottom="1px solid lightgray"
                  pb="4"
                  fontSize="2xl"
                  w="full"
                >
                  Yazar Hakkında
                </Heading>
                <Box mt="4">
                  <Avatar name={author?.name} picture={author?.image} size={500} col={true} />
                </Box>
                <AuthorSocial
                  twitter={author?.twitter}
                  instagram={author?.instagram}
                  email={author?.email}
                />
                <Box p="4">
                  <BlockContent blocks={author?.bio} />
                </Box>
              </GridItem>
              <GridItem px="4">
                <Heading
                  textAlign="center"
                  borderBottom="1px solid lightgray"
                  pb="4"
                  fontSize="2xl"
                >
                  Yazarın Son Yazıları
                </Heading>
                <Box my="4">
                  {author?.posts.length > 0 &&
                    author?.posts.map((i) => (
                      <Box key={i._id} bg="gray.100" p="4" my="4" rounded="md" shadow="lg">
                        <PostPreview
                          title={i.title}
                          date={i.publishedAt}
                          excerpt={i.excerpt}
                          slug={i.slug}
                          categories={i.categories}
                        />
                      </Box>
                    ))}
                </Box>
              </GridItem>
              <GridItem></GridItem>
            </Grid>
          </Box>
        )
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const author = await getClient(preview).fetch(authorWithPostsQuery, {
    slug: params.slug,
  });
  return {
    props: {
      preview,
      data: {
        author,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(authorsSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
