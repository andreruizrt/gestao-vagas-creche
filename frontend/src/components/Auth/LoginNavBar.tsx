import LoggedUserMenuOptions from './LoggedUserMenuOptions';
import LoginCadastrarButtons from './LoginCadatrarButtons';

const isUserLogged = false;

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


