import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react'
import { useContext, useState } from 'react'

import Navbar from '../../components/Nav/Navbar'
import { AuthContext } from '../../contexts/AuthContext'

const Index = () => {
  const { user } = useContext(AuthContext);

  return (
    <Box>
      <Navbar />
      <Box p={3}>
        <Heading color={'yellow.500'}>Dashboard { user ? 'do ' + user.name : null } </Heading>
        <Text>Aqui aparecerão as informações sobre a criança matriculada</Text>
      </Box>
      <VStack>
        
      </VStack>
    </Box>
  )
}


export default Index;
