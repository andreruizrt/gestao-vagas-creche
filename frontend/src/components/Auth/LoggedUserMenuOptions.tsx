import { ReactNode, useContext } from "react";
import {
    Avatar,
    Menu,
    MenuButton,
    Button,
    MenuList,
    Link,
    MenuItem,
    useColorModeValue,
    Divider
  } from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext";

type UserOptionType = {
    link: string;
    children: ReactNode;
    action: () => void | null;
}
  
const UserOptions = [{ option: 'Perfil', link: "/profile" }];
  
const UserNavLink = ({ link, children, action }: { link: string, children: ReactNode, action: () => void | null}) => {
    return (
        <Link
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('blue.200', 'blue.700'),
          }}
          href={link}>
          <MenuItem onClick={action}>
            {children.toString ? children.toString() : children}
          </MenuItem>
        </Link>
      );
}    

const LoginCadastrarButtons = () => {
  const { user, logout } = useContext(AuthContext);
  
  return(
    <Menu>
        <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Avatar
                size={'sm'}
                src={user.avatar}
            />
        </MenuButton>
        <MenuList>
            {UserOptions.map((option) => (
                <UserNavLink key={option.option} link={option.link} action={null}>{option.option}</UserNavLink>
            ))}
            <Divider />
            <UserNavLink action={logout} link={'/'}>Sair</UserNavLink>
        </MenuList>
    </Menu>
  );
}

export default LoginCadastrarButtons;