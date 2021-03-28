import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button';

function ToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      const height = window.innerHeight;
      if (window.scrollY >= height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  return (
    <>
      {isScrolled && (
        <IconButton
          position="fixed"
          right="10"
          bottom="10"
          onClick={() => scroll.scrollToTop()}
          aria-label="scroll to top"
          size="md"
          rounded="full"
          icon={<ChevronUpIcon color="white" w={8} h={8} />}
          shadow="md"
          cursor="pointer"
          transition="ease-in-out"
          _hover={{ shadow: 'lg', bgColor: 'gray.400' }}
          colorScheme="yellow"
          zIndex="toast"
        />
      )}
    </>
  );
}

export default ToTopButton;
