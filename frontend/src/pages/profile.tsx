import { useContext } from 'react';

import {
    Box,
    Center,
    HStack,
    Image,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    VStack
} from '@chakra-ui/react';

import Navbar from '../components/Nav/Navbar';

import { AuthContext } from '../contexts/AuthContext';

function Profile() {
    const { user } = useContext(AuthContext);


    return (
        <Box>
            <Navbar />
            <VStack py={5}>
                <Image
                    src={user ? user.avatar : ""}
                    rounded={'full'}
                    width={'200px'}
                />
                <Box>
                    <TableContainer>
                        <Table variant='striped' colorScheme='teal'>
                            <Thead>
                                <Tr>
                                    <Th>Dados</Th>
                                    <Th>Cookies</Th>
                                </Tr>
                            </Thead>
                            <Tbody>

                                {
                                    user ? Object.keys(user).map((key, index) => {
                                        return (
                                            <Tr key={index}>
                                                <Td>{key}</Td>
                                                <Td>{user[key]}</Td>
                                            </Tr>
                                        )
                                    }) : null
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </VStack>
        </Box>
    )
}

export default Profile;