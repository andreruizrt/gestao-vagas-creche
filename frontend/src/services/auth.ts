type SignInRequestType = {
    username: string;
    password: string;
}

const users = {
    andre: {
        token: '@#$#@$%%#$@#ANDRERUIZ$$%%3#@$#@',
        user: {
            name: 'Andre Ruiz',
            username: 'andreruiz',
            email: 'andrelucasruizalmeida@gmail.com',
            avatar: 'https://avatars.githubusercontent.com/u/36556771?v=4',
            tipo: 'ADMINISTRADOR',
        }
    },
    claudio: {
        token: '@#$#@$%%#$@#CLAUDIOPINTO$$%%3#@$#@',
        user: {
            name: 'Claudio Pinto',
            username: 'claudiopinto',
            email: 'claudioPinto@gmail.com',
            avatar: 'https://www.bnl.gov/today/body_pics/2017/06/stephanhruszkewycz-hr.jpg',
            tipo: 'PAIS',
        }
    },
    rodrigues: {
        token: '@#$#@$%%#$@#RODRIGUESSILVA$$%%3#@$#@',
        user: {
            name: 'Rodrigues Silva',
            username: 'rodriSilva',
            email: 'rodriguesSilva@gmail.com',
            avatar: 'https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg',
            tipo: 'GERENTE',
        }
    },
    marcela: {
        token: '@#$#@$%%#$@#MARCELAALMEIDA$$%%3#@$#@',
        user: {
            name: 'Marcela Almeida',
            username: 'marcelaAlmeida',
            email: 'marcelaAlmeida@gmail.com',
            avatar: 'https://i.pinimg.com/originals/e8/b2/71/e8b271169214323595f5155a649884d2.jpg',
            tipo: 'COMUM',
        }
    },
    vazio: {
        token: '',
        user: {
            name: '',
            username: '',
            email: '',
            avatar: '',
            tipo: '',
        }
    }
};



export function SignInRequest(data: SignInRequestType) {
    switch (data.username) {
        case "ADMIN":
        case "admin":
        case "ADMINSTRADOR":
            return users.andre;
        case "pai":
        case "Pai":
        case "PAI":
            return users.claudio;
        case "gerente":
        case "GERENTE":
            return users.rodrigues;
        case "comum":
        case "COMUM":
            return users.marcela;
        default:
            return users.vazio;
    };
};


export async function recoverUserInformation(token: string) {
    // const response = await fetch(`${process.env.API_URL}/user`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     }
    // });

    switch (token) {
        case users.andre.token:
            return users.andre.user;
        case users.claudio.token:
            return users.claudio.user;
        case users.rodrigues.token:
            return users.rodrigues.user;
        case users.marcela.token:
            return users.marcela.user;
        default:
            return users.vazio.user;
    };
};