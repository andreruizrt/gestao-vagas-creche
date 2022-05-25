import Head from 'next/head';

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
        <AuthProvider>
          <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </AuthProvider>
      </Box>

    </>
  )
}

export default App;