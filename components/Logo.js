import React from 'react';
import NextLink from 'next/link';
import { Box, Flex } from '@chakra-ui/layout';
export default function Logo() {
  return (
    <Flex h="16" justify="center" alignItems="center" fontFamily="heading" fontSize="3xl">
      <NextLink href="/">Yazbana</NextLink>
    </Flex>
  );
}
