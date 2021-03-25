import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '../lib/sanity';
import { Box } from '@chakra-ui/layout';
export default function CoverImage({ title, slug, image: source, size }) {
  const height = size === 'small' ? 200 : 500;
  const width = size === 'small' ? 400 : 1000;
  const radius = size === 'small' ? 'lg' : '2xl';
  const image = source ? (
    <Box
      borderRadius={radius}
      overflow="hidden"
      p="0"
      m="0"
      boxSizing="border-box"
      pos="relative"
      h={{ base: size === 'small' ? 150 : 300, md: height }}
      cursor="pointer"
      transition=".3s ease"
      shadow="lg"
      _hover={{ boxShadow: 'xl' }}
    >
      <Image
        objectFit="cover"
        layout="fill"
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(height).width(width).url()}
        className="coverImage"
      />
    </Box>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
