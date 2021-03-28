import { Flex } from '@chakra-ui/layout';
import { Email, Instagram, Twitter } from './Social';
export default function AuthorSocial({ twitter, instagram, email }) {
  const color = '#ecc94b';
  const hoverColor = '#171923';
  const iconSize = '20px';
  return (
    <Flex mb="2">
      <Twitter
        options={{
          address: twitter,
          color: color,
          size: iconSize,
          hoverColor: hoverColor,
        }}
      />
      <Instagram
        options={{
          address: instagram,
          color: color,
          size: iconSize,
          hoverColor: hoverColor,
        }}
      />
      <Email
        options={{
          address: email,
          color: color,
          size: iconSize,
          hoverColor: hoverColor,
        }}
      />
    </Flex>
  );
}
