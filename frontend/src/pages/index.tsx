import { useState } from 'react';

import { Box, Heading } from '@chakra-ui/react'
import Navbar from '../components/Nav/Navbar';

function Home() {
  return (
    <Box>
      <Navbar />
      <Heading>HOME</Heading>
    </Box>
  )
}

export default Home;