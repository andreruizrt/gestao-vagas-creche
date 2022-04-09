import Image from 'next/image';

import { Box, Heading, Text, Button } from '@chakra-ui/react';

import confusedTravolta from '../assets/images/confused-travolta.gif';

const PageNotFound = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, blue.400, blue.600)"
                backgroundClip="text">
                404
            </Heading>
            <Box>
                <Image src={confusedTravolta} height={300} width={300} />
            </Box>
            <Text fontSize="18px" mt={3} mb={2}>
                Página não encontrada!
            </Text>
            <Text color={'gray.500'} mb={6}>
                A página que está procurando não existe ou foi removida.
            </Text>

            <Button onClick={() => window.history.back()}
                colorScheme="blue"
                bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
                color="white"
                variant="solid">
                Voltar para a página anterior
            </Button>
        </Box>
    );
}

export default PageNotFound;