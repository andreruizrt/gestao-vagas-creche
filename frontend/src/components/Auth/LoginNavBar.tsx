import { useState, useEffect } from 'react';

import LoggedUserMenuOptions from './LoggedUserMenuOptions';
import LoginCadastrarButtons from './LoginCadatrarButtons';

export default function LoginNavBar() {
  const [isLogged, setIsLogged] = useState(false);
  
  return (<>
    {
      isLogged ? (
        <LoginCadastrarButtons />
      ) : (
        <LoggedUserMenuOptions />
      )
    }
  </>
  );

}




