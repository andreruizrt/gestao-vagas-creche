import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <Container bg={'gray.300'} maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }}>
            Comece agora
          </Button>
          <Button rounded={'full'} px={6}>
            Aprenda mais
          </Button>
        </Stack>
        <Flex w={'full'}>
        </Flex>
      </Stack>
    </Container>
  );
}

export default Hero;