import Layout from '@components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { postQuery, postSlugsQuery } from '../../lib/queries';
import { urlForImage, usePreviewSubscription } from '../../lib/sanity';
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server';
import PostTitle from '@components/PostTitle';
import { Box, Divider, Heading } from '@chakra-ui/layout';
import PostHeader from '@components/PostHeader';
import PostBody from '@components/PostBody';
import MoreStories from '@components/MoreStories';
import Comments from '@components/Comments';

export default function Post({ data = {}, preview }) {
  const router = useRouter();
  // console.log(data);
  const slug = data?.post?.slug;
  const {
    data: { post, morePosts },
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
        <PostTitle>Loading...</PostTitle>
      ) : (
        <Box as="article">
          <Head>
            <title>
              {post.title} | {process.env.SITE_NAME}
            </title>
            {post.mainImage && (
              <meta
                key="ogImage"
                property="og:image"
                content={urlForImage(post.mainImage).width(1200).height(627).fit('crop').url()}
              />
            )}
          </Head>
          <PostHeader
            title={post.title}
            coverImage={post.mainImage}
            date={post.publishedAt}
            author={post.author}
          />
          <PostBody content={post.body} />
          <Comments postId={post._id} />
          <Divider my="8" />
          <Heading mb="8" fontSize={{ base: '2xl', lg: '3xl' }}>
            Seveceğinizi düşündük
          </Heading>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Box>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
