

type SignInRequestData = {
    email: string;
    password: string;
}


export async function SignInRequest(data: SignInRequestData) {
    return {
        token: "#FAFEQW@EQ##@FFF$F@$F@",
        user: {
            name: "João da Silva",
            email: "joao@email.com",
            avatar_url: "https://www.github.com/andreruizrt.png"
        }
    }
}

export async function recoverUserInformation(token: string) {
    console.log(token);
    return {
        user: {
            name: "João da Silva",
            email: "joao@email.com",
            avatar_url: "https://www.github.com/andreruizrt.png"
        }
    }
}