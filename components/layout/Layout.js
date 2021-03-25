import { Box } from '@chakra-ui/layout';
import React from 'react';
import Navbar from './Navbar';

function Layout({ preview, children }) {
  return (
    <Box bg="white" minH="100vh">
      <Navbar />
      {preview && (
        <Box>
          This page is a preview. <a href="/api/exit-preview">Click here</a> to exit preview mode.
        </Box>
      )}
      <Box as="main" maxW="6xl" mx="auto" pt="4" px="4">
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
