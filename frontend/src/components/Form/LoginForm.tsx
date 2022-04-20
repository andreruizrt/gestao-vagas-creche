import React from 'react';

import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from '@chakra-ui/react';

import { Field, Form, Formik } from 'formik';

const submitLogin = async (values) => {

    try {
        
        const valuesJson = await JSON.stringify(values);
        alert(valuesJson);

        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            body: valuesJson,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const isSucess = await response.status === 200;
        isSucess ? alert('Login realizado com sucesso!') : alert('Login falhou! Erro: ' + response.status);

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const LoginForm = () => (
    <Box>
        <Formik
            initialValues={{}}
            onSubmit={(values, actions) => {
                actions.setSubmitting(true);
                submitLogin(values).then(() => {
                    actions.setSubmitting(false);
                    actions.resetForm();
                });
            }}
        >
            {(props) => (
                <Form onSubmit={props.handleSubmit}>
                    <Box paddingLeft={2}>
                        <Field name='username'>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor='username'>Usuário ou Email:</FormLabel>
                                    <Input {...field} id='username' placeholder='Usuário ou email' />
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
                    <Button
                        mt={4}
                        colorScheme='blue'
                        isLoading={props.isSubmitting}
                        type='submit'
                    >
                        Entrar
                    </Button>
                </Form>
            )}
        </Formik>
    </Box>
)

export default LoginForm;