import NextLink from 'next/link';
import React from 'react';
import { ActiveLink } from './ActiveLink';
import { Box, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import useCategories from '@utils/useCategories';
import { ChevronDownIcon } from '@chakra-ui/icons';

function Navbar() {
  const { data: categories, isLoading } = useCategories();

  const dropdownCategories = categories?.filter((i) => i.isOnNavbar && i.isOnDropdown);
  const navbarCategories = categories?.filter((i) => i.isOnNavbar && !i.isOnDropdown);

  const navbarLinks = navbarCategories?.map((i) => (
    <NextLink href={`/kategoriler/${i.slug}`} key={i.slug}>
      <Box ml="3" cursor="pointer">
        {i.title}
      </Box>
    </NextLink>
  ));

  const normalRoutes = [
    // { route: '/', label: 'Home' },
    { slug: '/blog', title: 'Blog' },
  ];

  const normalLinks = normalRoutes.map((i) => (
    <ActiveLink href={i.slug} key={i.slug}>
      <Box ml="3" cursor="pointer">
        {i.title}
      </Box>
    </ActiveLink>
  ));

  const categoriesDropdown = (
    <Menu>
      <MenuButton as={Box} righticon={<ChevronDownIcon />} ml="3" cursor="pointer">
        {isLoading ? 'Yükleniyor' : 'Kategoriler'}
      </MenuButton>
      <MenuList>
        {dropdownCategories?.map((cat) => (
          <MenuItem key={cat.slug} fontWeight="bold">
            <NextLink href={`/kategoriler/${cat.slug}`}>
              <Box ml="3" cursor="pointer">
                {cat.title}
              </Box>
            </NextLink>
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
          <NextLink href="/">Yazbana</NextLink>
        </Box>

        <Flex>
          {normalLinks}
          {navbarLinks}
          {categoriesDropdown}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
