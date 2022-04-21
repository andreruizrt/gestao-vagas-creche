import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Heading,
  Spacer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'

import Navbar from '../../../components/Nav/Navbar'

const Usuarios = ({ usuarios }) => {
  const usuarioList = usuarios.map(usuario => {
    return <Tr key={usuario.id}>
      <Td><Checkbox id='checkbox-usuario' /></Td>
      <Td id='usuario-id'>{usuario.id}</Td>
      <Td>{usuario.username}</Td>
      <Td>{usuario.senha}</Td>
      <Td>{usuario.email}</Td>
    </Tr>
  });

  return (
    <Box>
      <Navbar />
      <Box m={10}>
        <Center>
          <Heading size={'sm'}>Controle de Usuários</Heading>
        </Center>
      </Box>
      <Box>
        <Flex>
          <Box mx={5}>
            <Button colorScheme="blue">Alterar</Button>
          </Box>
          <Box>
            <Button colorScheme="green">Adicionar</Button>
          </Box>
          <Spacer />
          <Box mx={5}>
            <Button id={"btn-delete"} colorScheme="red" onClick={selecionaUsuario}>Deletar todos</Button>
          </Box>
        </Flex>
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
              <Th>/</Th>
              <Th>ID</Th>
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
    </Box >
  )
}

function selecionaUsuario() {
  // const [deleteState, onStateChange] = useState();

  const usuario = document.getElementById('checkbox-usuario');
  if (usuario) {
    usuario.addEventListener('click', () => {
      const usuarioId = document.getElementById('usuario-id').innerHTML;
      document.getElementById('btn-delete').innerHTML = `Deletar ${usuarioId}`;
      console.log(usuarioId);
      deleteAllUsers(Number.parseInt(usuarioId));
    });
  }
}


export const getServerSideProps = async () => {
  console.log("Fethcing data from server side...");

  try {
    const response = await fetch("http://localhost:8080/api/usuarios");
    const json = await response.json();

    return {
      props: {
        usuarios: json
      }
    }

  } catch (error) {
    console.log(error);
    return { props: { usuarios: [] } }
  }
};


const deleteAllUsers = async (id: Number | undefined) => {
  id ? console.log(id) : console.log("No ID");
  const url = id ? `http://localhost:8080/api/usuarios/${id}` : `http://localhost:8080/api/usuarios`;

  try {
    const response = await fetch(url, {
      method: 'DELETE'
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  };
}

const updateUserById = async () => {
  const response = await fetch('http://localhost:3000/usuarios/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 1,
      username: 'teste',
      senha: 'teste',
      email: 'test@gmail.com'
    })
  });
};

export default Usuarios;
