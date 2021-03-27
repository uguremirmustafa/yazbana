import { Box } from '@chakra-ui/layout';
import ToTopButton from '@components/ToTopButton';
import useCategories from '@utils/useCategories';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ preview, children }) {
  const { data: categories, isLoading } = useCategories();
  return (
    <Box bg="white" minH="100vh">
      <ToTopButton />
      <Navbar categories={categories} isLoading={isLoading} />
      {preview && (
        <Box>
          This page is a preview. <a href="/api/exit-preview">Click here</a> to exit preview mode.
        </Box>
      )}
      <Box as="main" maxW="6xl" mx="auto" pt="4" px="4">
        {children}
      </Box>
      <Footer categories={categories} isLoading={isLoading} />
    </Box>
  );
}

export default Layout;
