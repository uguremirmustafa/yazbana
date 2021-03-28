import { Button } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import Avatar from './Avatar';
import AuthorSocial from './AuthorSocial';

export default function AuthorCard({ author }) {
  const { twitter, instagram, email, name, slug, image } = author;

  return (
    <Flex
      bg="gray.50"
      shadow="xl"
      justify="center"
      flexDirection="column"
      alignItems="center"
      rounded="xl"
      overflow="hidden"
    >
      <Box px="8" pt="8">
        <Avatar name={name} picture={image} slug={slug} size={300} col={true} />
      </Box>
      <Flex bg="gray.100" w="full" justify="center" p="4">
        <AuthorSocial instagram={instagram} twitter={twitter} email={email} />
      </Flex>
    </Flex>
  );
}
