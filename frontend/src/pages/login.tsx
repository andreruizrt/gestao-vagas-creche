import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { userService } from '../services';
import { Box, Button, Center, FormLabel, Heading, Input, Spinner } from '@chakra-ui/react';
import CreshowIcon from '../components/Nav/CreshowIcon';

export default Login;

function Login() {
    const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push('/');
        }
    }, []);

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Usuario é obrigatório'),
        password: Yup.string().required('Senha é obrigatória')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl.toString() || '/';
                router.push(returnUrl);
            })
            .catch(error => {
                // setError('apiError', { message: error });
                console.log(error);
            });
    }

    return (
        <Box pt={'10vh'} mx={'36vw'} alignContent={'center'}>
            <CreshowIcon />
            <Box bg={'blue.500'} border={'1px solid black'} borderRadius={15}>
                <Box pt={'10%'}>
                    <Center>
                        <Heading as={'h1'} size={'xl'} color={'white'}>Login</Heading>
                    </Center>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box px={'8%'} py={'4%'}>
                            <FormLabel color={'whiteAlpha.900'}>Usuário:</FormLabel>
                            <Input name="username" type="text" {...register('username')} colorScheme={`${errors.username ? 'red' : ''}`} />
                            <Box mt={'2%'} color={"red.800"}>{errors.username?.message}</Box>
                        </Box>
                        <Box px={'8%'} py={'4%'}>
                            <FormLabel color={'whiteAlpha.900'}>Senha:</FormLabel>
                            <Input name="password" type="password" {...register('password')} colorScheme={`${errors.username ? 'red' : ''}`} />
                            <Box mt={'2%'} color={"red.800"}>{errors.password?.message}</Box>
                        </Box>
                        <Button type='submit' left={'20vw'} mt={'3vh'} mb={'3vh'} disabled={formState.isSubmitting}>
                            {formState.isSubmitting && <Spinner />}
                            Login
                        </Button>
                        {errors.apiError &&
                            <Box bg={"red.900"}>{errors.apiError?.message}</Box>
                        }
                    </form>
                </Box>
            </Box>
        </Box>
    );
}