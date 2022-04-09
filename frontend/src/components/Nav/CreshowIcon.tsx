import { Box, Heading, Link } from '@chakra-ui/react'

const CreshowIcon = () => {
    return (
        <Link
            _hover={{
                MozOsxFontSmoothing: 'grayscale',
                p: 1,
                textDecoration: 'none',
                color: '#fff',
                rounded: 'sm',
            }}
            href='/'>
            <Box>
                <Heading
                    display="inline-block"
                    as="h1"
                    size="sm"
                    bgGradient="linear(to-r, blue.400, blue.600)"
                    backgroundClip="text">
                    CRESHOW
                </Heading>
                👶
            </Box>
        </Link>
    )
}


export default CreshowIcon;


