import Navbar from '../../../components/Nav/Navbar'
import { Box, Heading, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'

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
      <Box>
        <Heading>
          Lista de Usuários
        </Heading>
      </Box>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Senha</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {usuarioList}
        </Tbody>
      </Table>
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
