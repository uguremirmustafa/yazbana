import Avatar from '@components/Avatar';
import { Box, Flex } from '@chakra-ui/layout';
import PostTitle from '@components/PostTitle';
import CoverImage from '@components/CoverImage';
import Date from '@components/Date';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Box my="8">
        <CoverImage title={title} image={coverImage} />
      </Box>
      <Flex
        my="8"
        align={{ base: 'flex-start', md: 'center' }}
        justify={{ base: 'right', md: 'space-between' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Avatar name={author.name} picture={author.image} slug={author.slug} />
        <Box my="2">
          <Date dateString={date} />
        </Box>
      </Flex>
    </>
  );
}
