import { useState } from 'react';

import { Box, Heading, HStack, Button, FormControl, FormLabel, Input, FormErrorMessage, Text } from '@chakra-ui/react'
import Navbar from '../components/Nav/Navbar';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';

const submitCadastro = async (values: any) => {

    try {
        const response = await fetch('http://localhost:8080/api/responsavel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        const data = await response.json();
        data.status === 'success' ? alert('Cadastro realizado com sucesso!') : alert('Erro ao realizar o cadastro!');

        return data;
    } catch (error) {
        console.log(error);
    }
}

const CadastroResponsavel = () => (
    <Box>
        <Navbar />
        <Box mx={300} p={50}>
            <Formik
                initialValues={{}}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        actions.setSubmitting(true);
                        submitCadastro(values)
                            .then(() => {
                                actions.setSubmitting(false);
                                actions.resetForm();
                            })
                    }, 1000);
                }}
            >
                {(props) => (
                    <Form onSubmit={props.handleSubmit}>
                        <Box>
                            <Field name='nome'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='nome'>Usuário:</FormLabel>
                                        <Input {...field} id='nome' placeholder='Nome Completo' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box p={2}>
                            <Field name='telefone'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='telefone'>Telefone:</FormLabel>
                                        <Input {...field} id='telefone' placeholder='Telefone' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box p={2}>
                            <Field name='email'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='email'>Email:</FormLabel>
                                        <Input {...field} id='email' placeholder='Email' type='email' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box p={2}>
                            <Field name='cpf'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='cpf'>CPF:</FormLabel>
                                        <Input {...field} id='cpf' placeholder='CPF' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box p={2}>
                            <Field name='rg'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor='rg'>RG:</FormLabel>
                                        <Input {...field} id='rg' placeholder='Registro geral' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Box>
                        <Box p={2}>
                            <Field name='comprovante_residencia'>
                                {/*<Button>Enviar Comprovante</Button> */}
                            </Field>
                        </Box>
                        <Box>
                            Comprovante de Residência:
                            <Form action="/uploadphoto" encType="multipart/form-data" method="POST">
                                <Input type="file" name="myImage" accept="image/*" />
                                <Input type="submit" value="Escolha arquivo para fazer upload" />
                            </Form>
                        </Box>
                        <Box>
                            <HStack spacing={1} p={1} m={2}>
                                <Field type="checkbox" name="toggle" />
                                <Text>Aceitar</Text>
                                <Link href='/termos-de-uso'>
                                    <Text fontWeight={'bold'}>termos de uso</Text>
                                </Link>
                            </HStack>
                        </Box>
                        <HStack alignItems='end' spacing={2} p={1} mt={2}>
                            <Button colorScheme='teal'>
                                Cancelar
                            </Button>
                            <Button
                                colorScheme='blue'
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Cadastrar
                            </Button>
                        </HStack>
                    </Form>
                )}
            </Formik>
        </Box>
    </Box>
)

export default CadastroResponsavel;