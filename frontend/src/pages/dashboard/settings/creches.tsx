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

//     nomeFantasia;
//     razaoSocial;
//     cnpj;
//     telefone;
//     email;
//     endereco;
//     numero;
//     bairro;
//     cidade;
//     estado;
//     cep;
//     qtdVagas

const Creches = ({ creches }) => {
    const crecheList = creches.map(creche => {
        return <Tr key={creche.id}>
            <Td><Checkbox id='checkbox-creche' /></Td>
            <Td>{creche.nomeFantasia}</Td>
            <Td>{creche.razaoSocial}</Td>
            <Td>{creche.cnpj}</Td>
            <Td>{creche.telefone}</Td>
            <Td>{creche.email}</Td>
            <Td>{creche.endereco + " Nº" + creche.numero}</Td>
            <Td>{creche.bairro}</Td>
            <Td>{creche.cidade}</Td>
            <Td>{creche.estado}</Td>
            <Td>{creche.cep}</Td>
            <Td>{creche.qtdVagas}</Td>
        </Tr>
    });

    return (
        <Box>
            <Navbar />
            <Box m={10}>
                <Center>
                    <Heading size={'sm'}>Controle de Creches</Heading>
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
                        <Button id={"btn-delete"} colorScheme="red" onClick={selecionaCreche}>Deletar todos</Button>
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
                            <Th>Nome Fantasia</Th>
                            <Th>Razão Social</Th>
                            <Th>Cnpj</Th>
                            <Th>Telefone</Th>
                            <Th>Email</Th>
                            <Th>Endereco</Th>
                            <Th>Bairro</Th>
                            <Th>Cidade</Th>
                            <Th>Estado</Th>
                            <Th>CEP</Th>
                            <Th>Número Vagas</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {crecheList}
                    </Tbody>
                </Table>
            </Box>
        </Box >
    )
}

function selecionaCreche() {
    // const [deleteState, onStateChange] = useState();

    const creche = document.getElementById('checkbox-creche');
    if (creche) {
        creche.addEventListener('click', () => {
            const crecheId = document.getElementById('creche-id').innerHTML;
            document.getElementById('btn-delete').innerHTML = `Deletar ${crecheId}`;
            console.log(crecheId);
            deleteAllCreches(Number.parseInt(crecheId));
        });
    }
}


export const getServerSideProps = async () => {
    console.log("Fethcing data from server side...");

    try {
        const response = await fetch("http://localhost:8080/api/creche");
        const json = await response.json();

        return {
            props: {
                creches: json
            }
        }

    } catch (error) {
        console.log(error);
        return { props: { creches: [] } }
    }
};


const deleteAllCreches = async (id: Number | undefined) => {
    id ? console.log(id) : console.log("No ID");
    const url = id ? `http://localhost:8080/api/creche/${id}` : `http://localhost:8080/api/creche`;

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

const updateCrecheById = async () => {
    const response = await fetch('http://localhost:8080/api/creche/1', {
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

export default Creches;
