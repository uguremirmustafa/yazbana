import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import { urlForImage } from '@lib/sanity';

export default function Avatar({ name, picture }) {
  return (
    <Flex align="center">
      <Image
        src={urlForImage(picture).height(96).width(96).fit('crop').url()}
        w="12"
        h="12"
        rounded="full"
        mr="4"
        alt={name}
      />
      <Text fontSize="md" fontWeight="bold">
        {name}
      </Text>
    </Flex>
  );
}
