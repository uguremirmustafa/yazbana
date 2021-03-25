import { Heading } from '@chakra-ui/layout';
import React from 'react';

export default function PostTitle({ children }) {
  return (
    <Heading
      fontFamily="heading"
      textTransform="capitalize"
      fontSize="6xl"
      transition="ease-in-out"
      cursor="pointer"
      transitionDuration="0.3s"
      _hover={{ color: '#272822' }}
    >
      {children}
    </Heading>
  );
}
