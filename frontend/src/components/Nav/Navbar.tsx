import { ReactNode, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import CreshowIcon from './CreshowIcon';

import LoginNavBar from '../Auth/LoginNavBar';
import { UserNavLink } from '../Auth/LoginHamburger';

const NavBarOptions = [{ option: 'Dashboard', link: "/dashboard" }, { option: 'Área dos Pais', link: "/pais" }, { option: 'Sobre nós', link: "/about" }];
const UserOptions = [{ option: 'Perfil', link: "/dashboard" }, { option: 'Sair', link: "/dashboard" }];



const NavLink = ({ link, children }: { link: string, children: ReactNode }) => (
  <Link
    color="blue.500"
    px={2}
    py={2}
    rounded={'md'}
    _hover={{
      color: 'blue.800',
      textDecoration: 'none',
      bg: useColorModeValue('blue.200', 'blue.700'),
    }}
    href={link}>
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box bg={useColorModeValue('blue.100', 'blue.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Abrir Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <CreshowIcon />
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {NavBarOptions.map((option) => (
              <NavLink key={option.option} link={option.link}>{option.option}</NavLink>
            ))}
          </HStack>
        </HStack>
          <Flex align={'center'}>
            <LoginNavBar />
          </Flex>
      </Flex>

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
    </Box>
  );
}

export default Navbar;