import NextLink from 'next/link';
import Logo from '@components/Logo';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Submenu,
} from '@chakra-ui/react';

import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import useWindowSize from '@hooks/useWindowSize';
import { normalLinks } from './Routes';

function Navbar({ categories, isLoading }) {
  //utility functions
  const { width } = useWindowSize();
  const isMobile = width <= 760;

  //categories and navbar list
  const dropdownCategories = categories?.filter((i) => i.isOnNavbar && i.isOnDropdown);
  const navbarCategories = categories?.filter((i) => i.isOnNavbar && !i.isOnDropdown);

  const categoryLinks = navbarCategories?.map((i) => (
    <NextLink href={`/kategoriler/${i.slug}`} key={i.slug}>
      <Box ml="3" cursor="pointer">
        {i.title}
      </Box>
    </NextLink>
  ));

  const categoriesDropdown = (
    <Menu colorScheme="red">
      <MenuButton ml="3" cursor="pointer" fontWeight="bold">
        {isLoading ? 'Yükleniyor' : 'Kategoriler'} <ChevronDownIcon w={4} h={4} />
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

  const MobileMenu = () => (
    <Box>
      <Menu isLazy>
        <MenuButton
          icon={<HamburgerIcon />}
          size="lg"
          variant="outline"
          as={IconButton}
          aria-label="menu"
        />
        <MenuList>
          <MenuGroup title="Menü" fontSize="lg">
            {normalLinks?.map((i, ind) => (
              <MenuItem key={ind}>{i}</MenuItem>
            ))}
          </MenuGroup>
          <MenuGroup title="Kategoriler" fontSize="lg">
            {dropdownCategories?.map((cat) => (
              <MenuItem key={cat.slug}>
                <NextLink href={`/kategoriler/${cat.slug}`}>
                  <Box ml="3" cursor="pointer" fontFamily="body">
                    {cat.title}
                  </Box>
                </NextLink>
              </MenuItem>
            ))}
            {categoryLinks?.map((i, ind) => (
              <MenuItem key={ind}>{i}</MenuItem>
            ))}
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );

  return (
    <>
      <Flex as="nav" w="100%" zIndex="sticky" h="16" align="center" boxShadow="sm">
        <Flex w="100%" maxW="6xl" mx="auto" justify="space-between" align="center" px="4">
          <Logo />
          {isMobile ? (
            <MobileMenu />
          ) : (
            <Flex fontWeight="bold" fontFamily="heading">
              {normalLinks}
              {categoryLinks}
              {categoriesDropdown}
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
