export default {
  fonts: {
    body: '"Montserrat",sans',
    heading: '"Montserrat",sans',
    mono: "'My Monospaced Font', monospace",
  },
  components: {
    Heading: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'extrabold', // Normally, it is "semibold"
        color: 'gray.900',
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.800',
      },
    },
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    sari: {
      100: '#f7fafc',
      200: '#171923',
    },
    // ...
  },
};
// font-family: 'Dela Gothic One', cursive;
