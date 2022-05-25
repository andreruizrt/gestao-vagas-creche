import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { Box, Button, Input, Spinner } from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AuthContext } from '../../contexts/AuthContext';

export default Login;

function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { signIn } = useContext(AuthContext);

    const { errors } = formState;

    async function handleSignIn(data) {
        await signIn(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <Box>
                    <label>Username</label>
                    <Input name="username" type="text" {...register('username')} borderColor={errors.username ? 'red' : ''} />
                    <Box bgColor={'red'}>{errors.username?.message}</Box>
                </Box>
                <Box>
                    <label>Password</label>
                    <Input name="password" type="password" {...register('password')} borderColor={errors.password ? 'red' : ''} />
                    <Box bgColor={'red'}>{errors.password?.message}</Box>
                </Box>
                <Button type='submit' left={'20vw'} mt={'3vh'} mb={'3vh'} disabled={formState.isSubmitting}>
                    {formState.isSubmitting && <Spinner />}
                    Login
                </Button>
                {errors.apiError &&
                    <Box bgColor={'red'}>{errors.apiError?.message}</Box>
                }
            </form>
        </>
    );
}
