import NextLink from 'next/link';
import React from 'react';
import { ActiveLink } from './ActiveLink';
import { Box, Flex, Link } from '@chakra-ui/react';

function Navbar() {
  const normalRoutes = [
    { route: '/', label: 'Home' },
    { route: '/blog', label: 'Blog' },
  ];

  const normalLinks = normalRoutes.map((i) => (
    <ActiveLink href={i.route} key={i.route}>
      <Box ml="3" cursor="pointer">
        {i.label}
      </Box>
    </ActiveLink>
  ));
  return (
    <Flex
      as="nav"
      w="100%"
      zIndex="sticky"
      fontWeight="bold"
      fontFamily="heading"
      h="16"
      align="center"
      boxShadow="sm"
    >
      <Flex w="100%" maxW="6xl" mx="auto" justify="space-between" align="center" px="4">
        <Box>
          <NextLink href="/">Blogme</NextLink>
        </Box>

        <Flex>{normalLinks}</Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
