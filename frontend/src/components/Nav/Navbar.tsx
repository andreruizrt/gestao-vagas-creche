import { ReactNode } from 'react';
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
import LoginNavBar from '../Autentication/LoginNavBar';
import { UserNavLink } from '../Autentication/LoginHamburger';

const NavBarOptions = [{ option: 'Dashboard', link: "/dashboard" }, { option: 'Usuarios', link: "/dashboard" }, { option: 'Sobre nós', link: "/dashboard" }];
const UserOptions = [{ option: 'Perfil', link: "/dashboard" }, { option: 'Sair', link: "/dashboard" }];

const NavLink = ({ link, children }: { link: string, children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
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
        <Flex alignItems={'center'}>
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