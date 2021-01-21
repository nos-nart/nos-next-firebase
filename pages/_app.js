import '../styles/globals.css'
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

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </ChakraProvider>
  );
}

export default MyApp
