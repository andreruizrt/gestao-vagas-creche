import LoggedUserMenuOptions from './LoggedUserMenuOptions';
import LoginCadastrarButtons from './LoginCadatrarButtons';

export default function LoginNavBar {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe(x => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  return (<>
    {
      !user ? (
        <LoginCadastrarButtons />
      ) : (
        <LoggedUserMenuOptions />
      )
    }
  </>
  );

}




