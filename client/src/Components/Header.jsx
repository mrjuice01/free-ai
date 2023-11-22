import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function Header() {
    return (
        <Box w={"100%"} bg="black" h="50px">
            <Text textAlign={'center'} fontFamily='Lora' fontSize={'29px'} color='white'>  Intelligent.AI</Text>
        </Box>
    );
}

export default Header;