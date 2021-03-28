import Layout from '@components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { categoriesSlugsQuery, categoryWithPostsQuery, postQuery } from '../../lib/queries';
import { usePreviewSubscription } from '../../lib/sanity';
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server';
import CategoryTitle from '@components/CategoryTitle';
import { Box, Heading } from '@chakra-ui/layout';
import HeroPost from '@components/HeroPost';
import MoreStories from '@components/MoreStories';

export default function Post({ data = {}, preview }) {
  const router = useRouter();
  const slug = data?.category?.slug;
  const {
    data: { category },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  const heroPost = category?.posts[0];
  const moreStories = category?.posts.slice(1);

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <CategoryTitle>Loading...</CategoryTitle>
      ) : (
        <Box as="section">
          <Head>
            <title>{category.title} | Yazbana</title>
          </Head>
          <Box mb="8">
            <CategoryTitle>{category?.title}</CategoryTitle>
          </Box>

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.mainImage}
              date={heroPost.publishedAt}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              categories={heroPost.categories}
            />
          )}
          {moreStories.length > 0 && (
            <>
              <Heading mb="8" fontSize={{ base: '2xl', lg: '3xl' }}>
                Kategoride Popüler Olanlar
              </Heading>
              <MoreStories posts={moreStories} column={moreStories.length > 2 ? 3 : 2} />
            </>
          )}
        </Box>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const category = await getClient(preview).fetch(categoryWithPostsQuery, {
    slug: params.slug,
  });
  return {
    props: {
      preview,
      data: {
        category,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(categoriesSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
