type SignInRequestType = {
    username: string;
    password: string;
}

export function SignInRequest(data: SignInRequestType) {

    return {
        token: '@#$#@$%%#$@#ANDRERUIZ$$%%3#@$#@',
        user: {
            name: 'Andre Ruiz',
            username: 'andreruiz',
            email: 'andrelucasruizalmeida@gmail.com',
            avatar: 'https://avatars.githubusercontent.com/u/36556771?v=4',
            tipo: 'ADMINISTRADOR',
        }
    }
}

export async function recoverUserInformation() {
    return {
        user: {
            name: 'Andre Ruiz',
            username: 'andreruiz',
            email: 'andrelucasruizalmeida@gmail.com',
            avatar: 'https://avatars.githubusercontent.com/u/36556771?v=4',
            tipo: 'ADMINISTRADOR',
        }
    }
}