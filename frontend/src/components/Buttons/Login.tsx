
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
    Link,
    Box,
    Checkbox,
    useColorModeValue
} from '@chakra-ui/react';


function errorMessageForm() {
    const [input, setInput] = useState('')
    
    return (
        <>
            <Stack p={5} m={5}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Acesse sua conta</Heading>
                    <Text align={'center'} fontSize={'lg'} color={'blue.600'}>
                        para acompanhar a matricula do seu filho. 👶
                    </Text>
                </Stack>
            </Stack>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <FormControl id="email">
                        <FormLabel>Email:</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Senha</FormLabel>
                        <Input type="password" />
                    </FormControl>
                    <Stack spacing={10}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Lembrar de mim</Checkbox>
                            <Link color={'blue.400'}>Esqueceu a senha?</Link>
                        </Stack>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Entrar
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} colorScheme='blue'>Login</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {errorMessageForm()}
                    </ModalBody>


                    <ModalFooter>
                        <Text>@UTFPR_DV</Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};

export default Login;