import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/layout';
import Layout from '@components/layout/Layout';
import Head from 'next/head';
import React from 'react';
import { authorsIndexQuery } from '@lib/queries';
import { getClient, overlayDrafts } from '@lib/sanity.server';
import AuthorCard from '@components/AuthorCard';

export default function index({ allAuthors, preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{process.env.SITE_NAME}</title>
      </Head>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={8} minH="80vh" mb="8">
        {allAuthors.map((i) => (
          <GridItem>
            <AuthorCard author={i} key={i._id} />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
}
export async function getStaticProps({ preview = false }) {
  const allAuthors = await getClient(preview).fetch(authorsIndexQuery);
  return {
    props: { allAuthors, preview },
  };
}
