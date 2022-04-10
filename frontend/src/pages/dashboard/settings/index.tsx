import { Box, Flex, Heading } from '@chakra-ui/react'

import Navbar from '../../../components/Nav/Navbar'
import SettingsMenu from '../../../components/Settings/SettingsMenu'

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        h="100vh"
      >
        <SettingsMenu />
        <Heading>Configurações</Heading>
      </Flex>
    </Box>
  )
}


export default Index;
