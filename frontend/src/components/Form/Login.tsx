import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { userService } from '../../services/user.service';
import { Box, Button, Input } from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl.toString() || '/';
                router.push(returnUrl);
            })
            .catch(error => {
                setError('apiError', { message: error });
            });
    }

    return (
        <Box className="col-md-6 offset-md-3 mt-5">
            <Box className="alert alert-info">
                Username: test<br />
                Password: test
            </Box>
            <Box className="card">
                <Box className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box className="form-group">
                            <label>Username</label>
                            <Input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <Box className="invalid-feedback">{errors.username?.message}</Box>
                        </Box>
                        <Box className="form-group">
                            <label>Password</label>
                            <Input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <Box className="invalid-feedback">{errors.password?.message}</Box>
                        </Box>
                        <Button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </Button>
                        {errors.apiError &&
                            <Box className="alert alert-danger mt-3 mb-0">{errors.apiError?.message}</Box>
                        }
                    </form>
                </Box>
            </Box>
        </Box>
    );
}
