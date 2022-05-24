import Head from 'next/head';
import { useRouter } from 'next/router';

import { Box, ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Creshow</title>
      </Head>
      <Box>
        <ChakraProvider resetCSS theme={theme}>
          <Box>
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </Box>

    </>
  )
}

export default App;