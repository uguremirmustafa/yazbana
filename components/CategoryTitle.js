import { Box, Divider, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

export default function CategoryTitle({ children }) {
  return (
    <Box>
      <Heading
        fontFamily="heading"
        textTransform="capitalize"
        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
        transition="ease-in-out"
        cursor="pointer"
        transitionDuration="0.3s"
        _hover={{ color: '#272822' }}
      >
        {children}
      </Heading>
      <Divider my="4" />
    </Box>
  );
}
