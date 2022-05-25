type SignInRequestType = {
    username: string;
    password: string;
}

export function SignInRequest(data: SignInRequestType) {
    if (data.username == "ADMIN") {
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
    } else if (data.username == "PAI") {
        return {
            token: '@#$#@$%%#$@#ANDRERUIZ$$%%3#@$#@',
            user: {
                name: 'Claudio Pinto',
                username: 'claudiopinto',
                email: 'claudioPinto@gmail.com',
                // github random profile picture url
                avatar: 'https://www.bnl.gov/today/body_pics/2017/06/stephanhruszkewycz-hr.jpg',
                tipo: 'PAIS',
            }
        }
    } else if (data.username == "GERENTE") {
        return {
            token: '@#$#@$%%#$@#ANDRERUIZ$$%%3#@$#@',
            user: {
                name: 'Rodrigues Silva',
                username: 'rodriSilva',
                email: 'rodriguesSilva@gmail.com',
                avatar: 'https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg',
                tipo: 'GERENTE',
            }
        }
    } else {
        return {
            token: '@#$#@$%%#$@#ANDRERUIZ$$%%3#@$#@',
            user: {
                name: 'Marcela Almeida',
                username: 'marcelaAlmeida',
                email: 'marcelaAlmeida@gmail.com',
                avatar: 'https://i.pinimg.com/originals/e8/b2/71/e8b271169214323595f5155a649884d2.jpg',
                tipo: 'COMUM',
            }
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