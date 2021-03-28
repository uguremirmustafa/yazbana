import React from 'react';
import { Heading, HStack, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function SocialLink() {
  const color = 'white';
  const primaryLight = '#3a445a';
  return (
    <div>
      <Text color="white" ml="2" w="300px" display={{ base: 'none', md: 'block' }}>
        Sosyal medya hesaplarımızı takip etmeyi unutmayın.
      </Text>
      <HStack spacing={{ base: '4', lg: '6' }} justify="right" py={{ base: '4', md: '4' }}>
        <Link
          href="https://www.instagram.com/uguremirmustafa/"
          _hover={{ background: primaryLight }}
          _active={{ background: primaryLight }}
          _focus={{ background: primaryLight }}
          p="2"
          borderRadius="2xl"
        >
          <FaInstagram color={color} size="30px" aria-label="instagram" />
        </Link>
        <Link
          href="https://www.twitter.com/uguremirmustafa"
          _hover={{ background: primaryLight }}
          _active={{ background: primaryLight }}
          _focus={{ background: primaryLight }}
          p="2"
          borderRadius="2xl"
        >
          <FaTwitter color={color} size="30px" aria-label="twitter" />
        </Link>
        <Link
          href="https://github.com/uguremirmustafa/"
          _hover={{ background: primaryLight }}
          _active={{ background: primaryLight }}
          _focus={{ background: primaryLight }}
          p="2"
          borderRadius="2xl"
        >
          <FaGithub color={color} size="30px" aria-label="github" />
        </Link>
      </HStack>
    </div>
  );
}
