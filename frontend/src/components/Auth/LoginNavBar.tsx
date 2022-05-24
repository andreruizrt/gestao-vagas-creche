import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import LoggedUserMenuOptions from './LoggedUserMenuOptions';
import LoginCadastrarButtons from './LoginCadatrarButtons';

export default function LoginNavBar() {
  const { user } = useContext(AuthContext);

  const isLogged = !!user;

  return (
    <>
      {
        isLogged ? (
          <LoggedUserMenuOptions />
        ) : (
          <LoginCadastrarButtons />
        )
      }
    </>
  );

}




