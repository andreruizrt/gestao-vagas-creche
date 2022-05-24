import Head from 'next/head';
import { useRouter } from 'next/router';

import { Box, ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';

import { AuthProvider } from '../contexts/AuthContext';

function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Creshow</title>
      </Head>
      <Box>
        <ChakraProvider resetCSS theme={theme}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ChakraProvider>
      </Box>

    </>
  )
}

export default App;