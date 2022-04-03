import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Image
} from '@chakra-ui/react';

import ImagemMenino from '../../images/menino-maos-pintadas.jpg'

export default function CallToActionWithIllustration() {
    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Veja as vagas abertas,{' '}
                    <Text as={'span'} color={'blue.400'}>
                        cadastre-se!
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    Nunca foi tão fácil encontrar vagas! Facilite! Matricule seu filho facilmente e acompanhe todo
                    o seu andamento na creche, fácil e prático. CRESHOW!!🙌
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Button
                        rounded={'full'}
                        px={6}
                        colorScheme={'blue'}
                        bg={'blue.400'}
                        _hover={{ bg: 'blue.500' }}>
                        Cadastrar
                    </Button>
                    <Button rounded={'full'} px={6}>
                        Saiba mais
                    </Button>
                </Stack>
                <Flex w={'full'} justifyContent="center">
                    <Image
                        src={ImagemMenino.src}
                        alt="Menino com mãos pintadas"
                        w={'md'}
                    />
                </Flex>
            </Stack>
        </Container>
    );
};