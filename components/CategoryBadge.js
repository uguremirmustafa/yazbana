import { Badge, Flex } from '@chakra-ui/layout';
import NextLink from 'next/link';
import React from 'react';

export default function CategoryBadge({ categories }) {
  return (
    <Flex>
      {categories.map((i) => (
        <NextLink href={`/kategoriler/${i.slug}`}>
          <Badge mr="2" colorScheme="gray" cursor="pointer" textTransform="lowercase">
            {i.title}
          </Badge>
        </NextLink>
      ))}
    </Flex>
  );
}
