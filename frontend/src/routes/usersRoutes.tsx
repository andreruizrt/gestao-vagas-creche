import Route from 'react';

const pathsPublicos = ['/', '/home', '/about' ];
const pathsUsuarioComum = [pathsPublicos, '/dashboard', '/profile', '/settings'];
const pathsUsuarioAdmin = [pathsUsuarioComum, '/admin', '/admin/users', '/admin/users/new', '/admin/users/:id', '/admin/users/:id/edit'];
const pathsPais = ['/AreaDosPais', '/pais/new', '/pais/:id', '/pais/:id/edit'];
const pathsGerente = [pathsUsuarioComum, '/creches', '/creches/new', '/creches/:id', '/creches/:id/edit'];

export const redirectToPath = (path: string, userType: string) => {
    if (userType === 'ADMINISTRADOR') {
        if (pathsUsuarioAdmin.includes(path)) {
            return path;
        } else {
            return '/admin';
        }
    } else if (userType === 'GERENTE') {
        if (pathsGerente.includes(path)) {
            return path;
        } else {
            return '/creches';
        }
    } else if (userType === 'COMUM') {
        if (pathsPais.includes(path)) {
            return path;
        } else {
            return '/AreasDosPais';
        }
    } else {
        if (pathsPublicos.includes(path)) {
            return path;
        } else {
            return '/home';
        }
    }
}