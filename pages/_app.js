import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { ProvideAuth } from '@/lib/auth';

const fonts = {
  body: 'Inter, -apple-system, BlinkMacSystemFont',
}
const theme = extendTheme({
  styles: {
    global: {
      'body': {
        scrollBehavior: 'smooth'
      },
      '#__next': {
        minHeight: '100vh'
      }
    }
  },
  fonts
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ProvideAuth>
            <Component {...pageProps} />
          </ProvideAuth>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp
