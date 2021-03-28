import { initRouterListeners } from '@utils/scrollRestoration';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import fonts from 'styles/font-face';
import theme from 'styles/theme';
import { MainContextProvider } from '@context/Store';
import { QueryClientProvider, QueryClient } from 'react-query';

// initRouterListeners();
const customTheme = extendTheme(theme);
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainContextProvider>
        <ChakraProvider theme={customTheme}>
          <Global styles={fonts} />
          <Component {...pageProps} />
        </ChakraProvider>
      </MainContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
