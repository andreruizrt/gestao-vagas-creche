import { Button, ButtonGroup, Icon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const LoginCadastrarButtons = () => (
    <ButtonGroup>
        <Button
            variant={'solid'}
            colorScheme={'teal'}
            size={'sm'}
            mr={4}
            leftIcon={<Icon />}>
            Entrar
        </Button>
        <Button
            variant={'solid'}
            colorScheme={'teal'}
            size={'sm'}
            mr={4}
            leftIcon={<AddIcon />}>
            Cadastrar
        </Button>
    </ButtonGroup>
);

export default LoginCadastrarButtons;