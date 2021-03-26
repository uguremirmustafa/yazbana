import NextLink from 'next/link';
import React from 'react';
import { ActiveLink } from './ActiveLink';
import { Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import useCategories from '@utils/useCategories';
import { ChevronDownIcon } from '@chakra-ui/icons';

function Navbar() {
  const { data: categories, isLoading } = useCategories();

  const normalRoutes = [
    // { route: '/', label: 'Home' },
    { route: '/blog', label: 'Blog' },
  ];

  const normalLinks = normalRoutes.map((i) => (
    <ActiveLink href={i.route} key={i.route}>
      <Box ml="3" cursor="pointer">
        {i.label}
      </Box>
    </ActiveLink>
  ));

  const categoriesDropdown = (
    <Menu>
      <MenuButton as={Box} righticon={<ChevronDownIcon />} ml="3" cursor="pointer">
        {isLoading ? 'Yükleniyor' : 'Kategoriler'}
      </MenuButton>
      <MenuList>
        {categories?.map((cat) => (
          <MenuItem key={cat.slug} fontWeight="bold">
            <ActiveLink href={`/kategoriler/${cat.slug}`}>
              <Box ml="3" cursor="pointer">
                {cat.title}
              </Box>
            </ActiveLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
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

        <Flex>
          {normalLinks}
          {categoriesDropdown}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
