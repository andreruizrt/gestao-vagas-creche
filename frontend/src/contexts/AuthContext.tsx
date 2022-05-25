import { createContext, useEffect, useState } from 'react';
import { recoverUserInformation, SignInRequest } from '../services/auth';
import Router from 'next/router';

import { parseCookies, setCookie, destroyCookie } from 'nookies';

type User = {
    name: string;
    username: string;
    email: string;
    avatar: string;
    tipo: string;
}

type SignInData = {
    username: string;
    password: string;
}

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    signIn: (data: SignInData) => Promise<void>;
    logout: () => void;
}


export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
    const [ user, setUser] = useState<User | null>(null);
    
    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies();

        if (token) {
            recoverUserInformation().then(response => {
                setUser(response.user);
            });
        }
    }, []);

    async function signIn( { username, password }: SignInData ) {
        const { token, user } = await SignInRequest( {
            username,
            password
        });
        
        setCookie(undefined, 'nextauth.token', token, {
            maxAge: 30 * 24 * 60 * 60,
        });

        setUser(user);

        Router.push('/dashboard');
    }

    function logout() {
        destroyCookie(undefined, 'nextauth.token');
        
        setUser(null);

        Router.push('/');
    }


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
}