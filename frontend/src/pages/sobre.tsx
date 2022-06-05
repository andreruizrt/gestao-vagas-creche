import { useState } from 'react';

import { Box, Heading } from '@chakra-ui/react'
import Navbar from '../components/Nav/Navbar';

function Sobre() {
  return (
    <Box>
      <Navbar />
      <Heading>Sobre</Heading>
    </Box>
  )
}

export default Sobre;