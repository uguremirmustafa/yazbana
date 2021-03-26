import { indexQuery } from '../lib/queries';
import { getClient, overlayDrafts } from '../lib/sanity.server';
import NextLink from 'next/link';
import Seperator from '@components/Seperator';
import Layout from '@components/layout/Layout';
import Head from 'next/head';
import HeroPost from '@components/HeroPost';
import MoreStories from '@components/MoreStories';
import { Heading } from '@chakra-ui/layout';
export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  console.log(heroPost);
  return (
    <Layout preview={preview}>
      <Head>
        <title>{process.env.SITE_NAME}</title>
      </Head>
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
      <Seperator />
      <Heading mb="8" fontSize={{ base: '2xl', lg: '3xl' }}>
        Polüler Yazılar
      </Heading>
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
  };
}
