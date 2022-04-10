import React from 'react';

import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    Link,
    Text
} from '@chakra-ui/react';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const cadastroSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!')
        .required('requerido'),
    password: Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!')
        .required('requerido'),
    email: Yup.string().email('Email inválido').required('Requerido'),
});

const submitCadastro = async (values: any) => {
    try {
        const response = await fetch('http://localhost:8080/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                values,
                admin: false
            })
        });
        
        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        alert(error);
    }
}

const CadastroForm = () => (
    <Box>
        <Formik
            initialValues={{}}
            validationSchema={cadastroSchema}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    submitCadastro(values)
                    actions.setSubmitting(true)
                    actions.submitForm
                }, 1000)
            }}
        >
            {(props) => (
                <Form>
                    <Box paddingLeft={2}>
                        <Field name='username'>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor='username'>Usuário:</FormLabel>
                                    <Input {...field} id='username' placeholder='Usuário' />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box p={2}>
                        <Field name='senha'>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor='senha'>Senha:</FormLabel>
                                    <Input {...field} id='senha' placeholder='Senha' type='password' />
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
                    <Box>
                        <HStack spacing={1} p={1} m={2}>
                            <Field type="checkbox" name="toggle" />
                            <Text>Aceitar</Text>
                            <Link href='/termos-de-uso'>
                                <Text fontWeight={'bold'}>termos de uso</Text>
                            </Link>
                        </HStack>
                    </Box>
                    <Button
                        mt={4}
                        colorScheme='blue'
                        isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Cadastrar
                    </Button>
                </Form>
            )}
        </Formik>
    </Box>
)

export default CadastroForm;