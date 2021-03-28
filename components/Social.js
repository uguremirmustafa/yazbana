const { Box, Link } = require('@chakra-ui/layout');
const { FaTwitter, FaInstagram, FaEnvelope } = require('react-icons/fa');

export const Twitter = ({ options }) => {
  const { color, size, hoverColor, address } = options;
  return (
    <Box mx="2">
      <Link
        href={`https://www.twitter.com/${address}`}
        _hover={{ background: hoverColor }}
        _active={{ background: hoverColor }}
        _focus={{ background: hoverColor }}
        p="2"
        borderRadius="2xl"
        display="block"
      >
        <FaTwitter color={color} size={size} aria-label="twitter" />
      </Link>
    </Box>
  );
};
export const Instagram = ({ options }) => {
  const { color, size, hoverColor, address } = options;
  return (
    <Box mx="2">
      <Link
        href={`https://www.instagram.com/${address}`}
        _hover={{ background: hoverColor }}
        _active={{ background: hoverColor }}
        _focus={{ background: hoverColor }}
        p="2"
        borderRadius="2xl"
        display="block"
      >
        <FaInstagram color={color} size={size} aria-label="twitter" />
      </Link>
    </Box>
  );
};
export const Email = ({ options }) => {
  const { color, size, hoverColor, address } = options;
  return (
    <Box mx="2">
      <Link
        href={`mailto:${address}`}
        _hover={{ background: hoverColor }}
        _active={{ background: hoverColor }}
        _focus={{ background: hoverColor }}
        p="2"
        borderRadius="2xl"
        display="block"
      >
        <FaEnvelope color={color} size={size} aria-label="twitter" />
      </Link>
    </Box>
  );
};
