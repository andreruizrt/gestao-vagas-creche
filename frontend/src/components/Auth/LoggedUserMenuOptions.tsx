import { ReactNode, useContext } from "react";
import {
    Avatar,
    Menu,
    MenuButton,
    Button,
    MenuList,
    Link,
    MenuItem,
    useColorModeValue
  } from "@chakra-ui/react";
  
const UserOptions = [{ option: 'Perfil', link: "/dashboard" }, { option: 'Sair', link: "/dashboard" }];
  
const UserNavLink = ({ link, children }: { link: string, children: ReactNode }) => {
    return (
        <Link
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('blue.200', 'blue.700'),
          }}
          href={link}>
          <MenuItem>
            {children.toString ? children.toString() : children}
          </MenuItem>
        </Link>
      );
}    

const LoginCadastrarButtons = () => {
  
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
            />
        </MenuButton>
        <MenuList>
            {UserOptions.map((option) => (
                <UserNavLink key={option.option} link={option.link}>{option.option}</UserNavLink>
            ))}
        </MenuList>
    </Menu>
  );
}

export default LoginCadastrarButtons;