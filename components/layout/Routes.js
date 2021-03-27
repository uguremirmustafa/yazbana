import { Box } from '@chakra-ui/react';
import { ActiveLink } from './ActiveLink';

const normalRoutes = [
  // { route: '/', label: 'Home' },
  { slug: '/blog', title: 'Blog' },
];

export const normalLinks = normalRoutes.map((i) => (
  <ActiveLink href={i.slug} key={i.slug}>
    <Box ml="3" cursor="pointer">
      {i.title}
    </Box>
  </ActiveLink>
));
