import { Box, Heading } from '@chakra-ui/react'
import { useContext } from 'react'

import Navbar from '../../components/Nav/Navbar'
import { AuthContext } from '../../contexts/AuthContext'

const Index = () => {
  const { user } = useContext(AuthContext);

  return (
    <Box>
      <Navbar />
      Olá, { user.name }
      <Heading>Dashboard</Heading>
    </Box>
  )
}


export default Index;
