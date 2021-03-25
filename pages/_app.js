import { initRouterListeners } from '@utils/scrollRestoration';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import fonts from 'styles/font-face';
import theme from 'styles/theme';

initRouterListeners();
const customTheme = extendTheme(theme);
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Global styles={fonts} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
