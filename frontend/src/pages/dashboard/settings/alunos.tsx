import {
    Box,
    Button,
    Center,
    Checkbox,
    Flex,
    Heading,
    Image,
    Spacer,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import { useState } from 'react';

import Navbar from '../../../components/Nav/Navbar'

const Alunos = ({ alunos }) => {
    const alunoList = alunos.map(aluno => {
        return <Tr key={aluno.id}>
            <Td><Checkbox id='checkbox-aluno' key={aluno.id}/></Td>
            <Td><Image w={50} borderRadius={50} src={aluno.urlFoto} /></Td>
            <Td>{aluno.idResponsavel}</Td>
            <Td>{aluno.nome}</Td>
            <Td>{aluno.cpf}</Td>
            <Td>{aluno.rg}</Td>
            <Td>{aluno.matricula}</Td>
            <Td>{aluno.dataMatricula}</Td>
        </Tr>
    });

    return (
        <Box>
            <Navbar />
            <Box m={10}>
                <Center>
                    <Heading size={'sm'}>Controle de Alunos</Heading>
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
                        <Button id={"btn-delete"} colorScheme="red" onClick={selecionaAluno}>Deletar todos</Button>
                    </Box>
                </Flex>
            </Box>
            <Box mx={70}>
                <Table
                    className='tabelaAlunos'
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
                            <Th>Foto</Th>
                            <Th>Id responsavel</Th>
                            <Th>Nome</Th>
                            <Th>CPF</Th>
                            <Th>RG</Th>
                            <Th>Matricula</Th>
                            <Th>Data matricula</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {alunoList}
                    </Tbody>
                </Table>
            </Box>
        </Box >
    )
}

function selecionaAluno() {
    const [buttonState, onStateChange] = useState('');

    const aluno = document.getElementById('checkbox-aluno');
    if (aluno) {
        aluno.addEventListener('click', () => {
            const alunoId = document.getElementById('aluno-id').innerHTML;
            onStateChange(alunoId);
            document.getElementById('btn-delete').innerHTML = `Deletar ${alunoId}`;
            console.log(alunoId);
            deleteAllAlunos(Number.parseInt(alunoId));
        });
    }
}


export const getServerSideProps = async () => {
    console.log("Fethcing data from server side...");

    try {
        const response = await fetch("http://localhost:8080/api/alunos");
        const json = await response.json();

        return {
            props: {
                alunos: json
            }
        }

    } catch (error) {
        console.log(error);
        return { props: { alunos: [] } }
    }
};


const deleteAllAlunos = async (id: Number | undefined) => {
    id ? console.log(id) : console.log("No ID");
    const url = id ? `http://localhost:8080/api/alunos/${id}` : `http://localhost:8080/api/alunos`;

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

const updateAlunoById = async () => {
    const response = await fetch('http://localhost:8080/api/alunos/1', {
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

export default Alunos;
