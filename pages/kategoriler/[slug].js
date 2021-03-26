import Layout from '@components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import {
  categoriesSlugsQuery,
  categoryWithPostsQuery,
  postQuery,
  postSlugsQuery,
} from '../../lib/queries';
import { urlForImage, usePreviewSubscription } from '../../lib/sanity';
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server';
import CategoryTitle from '@components/CategoryTitle';
import { Box, Divider, Heading } from '@chakra-ui/layout';
import PostHeader from '@components/PostHeader';
import PostBody from '@components/PostBody';
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

  //   if (!router.isFallback && !slug) {
  //     return <ErrorPage statusCode={404} />;
  //   }
  console.log(category);
  const heroPost = category?.posts[0];
  const moreStories = category?.posts.slice(1);

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <PostTitle>Loading...</PostTitle>
      ) : (
        <Box as="section">
          <Head>
            <title>
              {category.title} | {process.env.SITE_NAME}
            </title>
          </Head>
          <Box mb="8">
            <CategoryTitle>{category.title}</CategoryTitle>
          </Box>

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.mainImage}
              date={heroPost.publishedAt}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <Heading mb="8" fontSize={{ base: '2xl', lg: '3xl' }}>
            Kategoride Popüler Olanlar
          </Heading>
          {moreStories.length > 0 && (
            <MoreStories posts={moreStories} column={moreStories.length > 2 ? 3 : 2} />
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
  const data = await sanityClient.fetch(categoriesSlugsQuery);
  console.log(data);
  return {
    paths: data.map((slug) => ({ params: slug })),
    fallback: true,
  };
}
