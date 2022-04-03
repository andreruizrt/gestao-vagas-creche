
import { useState } from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/hooks'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

import {
    Text,
    Input,
    Button,
    Heading,
    Stack,
    Box,
    Checkbox,
} from '@chakra-ui/react';

import Link from 'next/link';


function errorMessageForm() {
    const [input, setInput] = useState('')

    return (
        <>
            <Stack p={5} m={5}>
                <Stack align={'center'}>
                    <Heading m={3} fontSize={'4xl'}>Cadastre-se</Heading>
                    <Text fontSize={'lg'} color={'blue.600'}>
                        para poder matricular seu filho em
                        <Link href="/">
                            <Text color={'blue.400'}>
                                creches
                            </Text>
                        </Link>
                    </Text>
                </Stack>
            </Stack>
            <Box p={8}>
                <Stack spacing={4}>
                    <FormControl id="name">
                        <FormLabel>Nome Completo:</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email:</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Senha</FormLabel>
                        <Input type="password" />
                    </FormControl>
                    <Stack>
                        <Stack>
                            <Box display={'inline'}>
                                <Checkbox>Aceitar os
                                    <Link href='/termos'>
                                        <Text color={"blue.400"}>termos de uso</Text>
                                    </Link>
                                </Checkbox>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

const Cadastrar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} colorScheme='whiteAp'>Cadastrar</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastrar</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {errorMessageForm()}
                    </ModalBody>


                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button variant='ghost'>Cadastrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};

export default Cadastrar;