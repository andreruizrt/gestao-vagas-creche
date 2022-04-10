import {
    VStack,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Link,
} from '@chakra-ui/react';

const ConfigList = [{option:'Geral', link: "#"}, {option:'Conta', link:"#"}, {option:'Segurança', link:"#"}, {option:'Notificações', link: "#"}, {option: 'Ajuda', link: "#"}]

const SettingsMenu = () => (
    <VStack
        w="15%"
        h="100%"
        bg="gray.500">
        <Box
            w="100%"
            bg="gray.500"
            borderRadius="lg"
            p="4">
            <Flex 
                flexDirection={'column'}
                 justify="space-between" align="center">
                {ConfigList.map((button) => (
                    <Link href={button.link}>
                        <Button key={button.option}
                            variant="ghost"
                            size="sm"
                            w="100wv"
                            px="10"
                            borderRadius="lg"
                            _hover={{
                                bg: 'gray.500',
                                color: 'white.500',
                            }}>{button.option}</Button>
                    </Link>
                ))}
            </Flex>
        </Box>
    </VStack>
);

export default SettingsMenu;