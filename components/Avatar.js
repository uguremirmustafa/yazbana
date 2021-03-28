import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/react';

import { urlForImage } from '@lib/sanity';
import NextLink from 'next/link';
export default function Avatar({ name, picture, slug, size, col }) {
  return (
    <Flex align="center" cursor="pointer" flexDirection={col ? 'column' : 'row'}>
      <NextLink href={`/yazarlar/${slug}`}>
        <Image
          src={urlForImage(picture)
            .height(size ? size : 96)
            .width(size ? size : 96)
            .fit('crop')
            .url()}
          w={size ? `${size / 2}px` : 12}
          h={size ? `${size / 2}px` : 12}
          rounded="full"
          mr="4"
          alt={name}
          shadow="md"
        />
      </NextLink>
      <Tooltip label={`Merhaba ben ${name}, tanımak için tıkla!`} aria-label="A tooltip">
        <span>
          <NextLink href={`/yazarlar/${slug}`}>
            <Text fontSize={col ? 'xl' : 'md'} fontWeight="bold" my={col ? '4' : '0'}>
              {name}
            </Text>
          </NextLink>
        </span>
      </Tooltip>
    </Flex>
  );
}
