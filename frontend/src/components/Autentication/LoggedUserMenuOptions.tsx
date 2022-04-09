import { ReactNode } from "react";

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

const UserNavLink = ({ link, children }: { link: string, children: ReactNode }) => (
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

const LoginCadastrarButtons = () => (
    <Menu>
        <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Avatar
                size={'sm'}
                src={'https://images.unsplash.com/photo-1593642647962-b9f8d8f8d8f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
            />
        </MenuButton>
        <MenuList>
            {UserOptions.map((option) => (
                <UserNavLink key={option.option} link={option.link}>{option.option}</UserNavLink>
            ))}
        </MenuList>
    </Menu>
);

export default LoginCadastrarButtons;