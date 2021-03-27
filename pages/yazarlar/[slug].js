import Layout from '@components/layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { authorsSlugsQuery, authorWithPostsQuery, postQuery } from '../../lib/queries';
import { urlForImage, usePreviewSubscription } from '../../lib/sanity';
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server';
import CategoryTitle from '@components/CategoryTitle';
import { Box, Divider, Heading } from '@chakra-ui/layout';

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
  console.log(author);

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <CategoryTitle>Loading...</CategoryTitle>
      ) : (
        <Box as="section">
          <Head>
            <title>
              {author.name} | {process.env.SITE_NAME}
            </title>
          </Head>
        </Box>
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
