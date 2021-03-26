import markdownStyles from './PostBody.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Box } from '@chakra-ui/layout';
import { urlForImage } from '@lib/sanity';

export default function PostBody({ content }) {
  const serializers = {
    types: {
      image: (props) => {
        const url = urlForImage(props.node.asset).width(500).height(300).url();
        return <img src={url} alt={url} />;
      },
    },
  };
  return (
    <Box maxW="3xl" mx="auto">
      <BlockContent
        blocks={content}
        serializers={serializers}
        className={markdownStyles.markdown}
      />
    </Box>
  );
}
