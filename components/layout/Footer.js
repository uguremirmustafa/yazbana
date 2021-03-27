import { Box, Flex, Grid, GridItem, Link } from '@chakra-ui/layout';
import SocialLink from '@components/SocialLink';
import NextLink from 'next/link';
import React from 'react';

export default function Footer({ categories, isLoading }) {
  const date = new Date();
  const year = date.getFullYear();
  const categoryLinks = categories?.map((i) => (
    <NextLink href={`/kategoriler/${i.slug}`} key={i.slug}>
      <Box
        mx="2"
        mb="2"
        h="min"
        cursor="pointer"
        transition="ease-in-out"
        transitionDuration="500ms"
        borderBottom="#171923 1px solid"
        _hover={{ color: 'rgba(221,221,221,0.9)', borderColor: 'yellow' }}
        color="white"
      >
        {i.title}
      </Box>
    </NextLink>
  ));
  return (
    <>
      <Flex
        as="nav"
        w="100%"
        zIndex="sticky"
        align="center"
        boxShadow="sm"
        bg="gray.900"
        pt="8"
        px="4"
        flexDirection="column"
      >
        <Grid templateColumns={{ base: '1fr', md: '4fr 2fr' }} maxW="6xl" mx="auto" w="full">
          <GridItem
            display="flex"
            justifyContent="flex-start"
            alignItems="top"
            pb="4"
            flexWrap="wrap"
          >
            {categoryLinks}
          </GridItem>
          <GridItem>
            <SocialLink />
          </GridItem>
        </Grid>
      </Flex>
      <Flex
        justify="center"
        align="center"
        color="white"
        py="2"
        bg="gray.800"
        w="full"
        fontSize="sm"
      >
        developed and designed by
        <Link href="https://devugur.com" mx="2" color="yellow.400" fontWeight="bold">
          devugur
        </Link>
        | &copy; {year}
      </Flex>
    </>
  );
}
