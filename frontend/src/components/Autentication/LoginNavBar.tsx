import LoggedUserMenuOptions from './LoggedUserMenuOptions';
import LoginCadastrarButtons from './LoginCadatrarButtons';

const isUserLogged = true;

const LoginNavBar = () => (
  <>
    {
      !isUserLogged ? (
        <LoginCadastrarButtons />
      ) : (
        <LoggedUserMenuOptions />
      )
    }
  </>
);

export default LoginNavBar;


