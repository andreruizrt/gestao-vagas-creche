import Navbar from '../../../components/Nav/Navbar'
import { Box, Center, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

const Usuarios = ({ usuarios }) => {
  const usuarioList = usuarios.map(usuario => {
    return <tr key={usuario.id}>
      <td>{usuario.username}</td>
      <td>{usuario.senha}</td>
      <td>{usuario.email}</td>
    </tr>
  });

  return (
    <Box>
      <Navbar />
      <Box m={10}>
        <Center>
          <Heading size={'sm'}>Controle de Usuários</Heading>
        </Center>
      </Box>
      <Box mx={100}>
        <Table
          p={4}
          m={4}
          marginLeft={'auto'}
          marginRight={30}
          borderRadius={10}
          borderWidth={1}
          variant='striped'>
          <Thead>
            <Tr>
              <Th>Usuário</Th>
              <Th>Senha</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {usuarioList}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}


export const getServerSideProps = async () => {
  console.log("Fethcing data from server side...");

  const res = await fetch(process.env.SERVER_HOST + "/api/usuarios");
  const json = await res.json();

  return {
    props: {
      usuarios: json
    }
  }
};

export default Usuarios;
