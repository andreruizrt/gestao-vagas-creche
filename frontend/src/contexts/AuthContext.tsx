import { createContext, useEffect, useState } from 'react';
import { SignInRequest, recoverUserInformation } from '../services/auth';
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router';

type User = {
    name: string;
    email: string;
    avatar_url: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void>;
}

type SignInData = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null)
    
    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies();

        if (token) {
            recoverUserInformation(token).then(response => {
                setUser(response.user);
            }

            )
        }
    })

    async function signIn({ email, password }: SignInData) {
        const { token, user } = await SignInRequest({
            email,
                password
        })

        setCookie(undefined, "nextauth.token", token, {
            maxAge: 60 * 60 * 0.5 // 30 min
        })

        setUser(user);

        Router.push('/dashboard');
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider> 
    );
}