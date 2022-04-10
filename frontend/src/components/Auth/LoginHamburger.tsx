import { ReactNode } from "react";
import { Link, useDisclosure } from "@chakra-ui/react";

import { Box, MenuItem, Stack, useColorModeValue } from "@chakra-ui/react";

const UserOptions = [{ option: 'Perfil', link: "/dashboard" }, { option: 'Sair', link: "/dashboard" }];

const UserNavLink = ({ link, children }: { link: string, children: ReactNode }) => (
    <Link
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('blue.200', 'blue.700'),
        }}
        href={link}>
        <MenuItem>
            {children}
        </MenuItem>
    </Link>
);

const LoginHamburger = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {
                isOpen ? (
                    <Box pb={4} display={{ md: 'none' }} >
                        <Stack as={'nav'} spacing={4}>
                            {UserOptions.map((option) => (
                                <UserNavLink key={option.option} link={option.link}>{option.option}</UserNavLink>
                            ))}
                        </Stack>
                    </Box >
                ) : null
            }
        </>
    );
};

export {
    UserNavLink,
    LoginHamburger
};
