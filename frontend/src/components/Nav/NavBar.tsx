import Link from 'next/link';

import {
    Box,
    Text,
    ButtonGroup,
    Spacer,
} from '@chakra-ui/react';

import Login from '../Buttons/Login';
import Cadastrar from '../Buttons/Cadastrar';

const NavBar = () => (
    <Box
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="1rem"
        bg="blue.700"
        color="white"
        fontWeight="semibold"
        fontSize="sm"
        fontFamily="mono"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
        borderBottomStyle="solid"
    >
        <Box>
            <Link href={"/"}>
                <Text
                    as="h1"
                    fontSize="2xl"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    lineHeight="short"
                >Creshow</Text>
            </Link>
        </Box>
        <Spacer />
        <ButtonGroup>
            <Login />
            <Cadastrar />
        </ButtonGroup>
    </Box>
)

export default NavBar
