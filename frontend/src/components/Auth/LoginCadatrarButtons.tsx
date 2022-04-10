import React from "react"

import {
    ButtonGroup,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react"

import CadastroForm from "../Form/CadastroForm"
import LoginForm from "../Form/LoginForm"

const CadastrarModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()

    return (
        <>
            <Button colorScheme="ghost" color="blue.500" mt={1} onClick={onOpen}>
                Cadastrar
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastrar</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody marginBottom={30}>
                        <CadastroForm />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

const LoginModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()

    return (
        <>
            <Button colorScheme='blue' mt={1} onClick={onOpen}>
                Login
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <LoginForm />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}


const LoginCadastrarButtons = () => (
    <ButtonGroup>
        <CadastrarModal />
        <LoginModal />
    </ButtonGroup>
);

export default LoginCadastrarButtons;