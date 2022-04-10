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
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!')
        .required('requerido'),
    password: Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!')
        .required('requerido')
});

const submitLogin = async (values) => {
    try {
        const response = await fetch('http://locahost:8080/api/usuarios', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}

const LoginForm = () => (
    <Box>
        <Formik
            initialValues={{}}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
                submitLogin(values);
                actions.setSubmitting(true);
            }}
        >
            {(props) => (
                <Form>
                    <Box paddingLeft={2}>
                        <Field name='login'>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor='login'>Usuário ou Email:</FormLabel>
                                    <Input {...field} id='login' placeholder='Usuário ou email' />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Box p={2}>
                        <Field name='password'>
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