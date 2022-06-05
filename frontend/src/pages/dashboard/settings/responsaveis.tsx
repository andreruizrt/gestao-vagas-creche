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
import MaskApplier from '../../../modifiers/MaskApplier';

// id
// idUsuario
// nome
// cpf
// rg
// email
// telefone
// url
// urlFoto

const Responsaveis = ({ responsaveis }) => {
    const responsaveisList = responsaveis.map(responsaveis => {
        return <Tr key={responsaveis.id}>
            <Td><Checkbox id='checkbox-responsaveis' /></Td>
            <Td>{responsaveis.idUsuario}</Td>
            <Td>{responsaveis.nome}</Td>
            <Td>{MaskApplier().cpfMask(responsaveis.cpf)}</Td>
            <Td>{responsaveis.rg}</Td>
            <Td>{responsaveis.email}</Td>
            <Td>{MaskApplier().telefoneMask(responsaveis.telefone)}</Td>
            <Td>{responsaveis.urlFoto}</Td>
            <Td>{responsaveis.url}</Td>
        </Tr>
    });

    return (
        <Box>
            <Navbar />
            <Box m={10}>
                <Center>
                    <Heading size={'sm'}>Controle de Responsaveis</Heading>
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
                        <Button id={"btn-delete"} colorScheme="red" onClick={selecionaResponsaveis}>Deletar todos</Button>
                    </Box>
                </Flex>
            </Box>
            <Box mx={2}>
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
                            <Th>idUsuario</Th>
                            <Th>nome</Th>
                            <Th>cpf</Th>
                            <Th>rg</Th>
                            <Th>Email</Th>
                            <Th>Telefone</Th>
                            <Th>urlFoto</Th>
                            <Th>url</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {responsaveisList}
                    </Tbody>
                </Table>
            </Box>
        </Box >
    )
}

function selecionaResponsaveis() {
    // const [deleteState, onStateChange] = useState();

    const responsaveis = document.getElementById('checkbox-responsaveis');
    if (responsaveis) {
        responsaveis.addEventListener('click', () => {
            const responsaveisId = document.getElementById('responsaveis-id').innerHTML;
            document.getElementById('btn-delete').innerHTML = `Deletar ${responsaveisId}`;
            console.log(responsaveisId);
            deleteAllResponsaveis(Number.parseInt(responsaveisId));
        });
    }
}


export const getServerSideProps = async () => {
    console.log("Fethcing data from server side...");

    try {
        const response = await fetch("http://localhost:8080/api/responsaveis");
        const json = await response.json();

        return {
            props: {
                responsaveis: json
            }
        }

    } catch (error) {
        console.log(error);
        return { props: { responsaveis: [] } }
    }
};


const deleteAllResponsaveis = async (id: Number | undefined) => {
    id ? console.log(id) : console.log("No ID");
    const url = id ? `http://localhost:8080/api/responsaveis/${id}` : `http://localhost:8080/api/responsaveis`;

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

const updateResponsaveisById = async () => {
    const response = await fetch('http://localhost:8080/api/responsaveis/1', {
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

export default Responsaveis;
