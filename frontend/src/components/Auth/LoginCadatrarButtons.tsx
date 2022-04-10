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
            <Button colorScheme="blue" mt={4} onClick={onOpen}>
                Cadastrar
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastrar</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CadastroForm />
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme='blue' type="submit">Cadastrar</Button>
                    </ModalFooter>
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
            <Button colorScheme='blue' mt={4} onClick={onOpen}>
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
                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>Cancelar</Button>
                        <Button colorScheme='blue' type="submit">Login</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


const LoginCadastrarButtons = () => (
    <ButtonGroup>
        <LoginModal />
        <CadastrarModal />
    </ButtonGroup>
);

export default LoginCadastrarButtons;