import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box position={"absolute"} bottom={"60px"} left={"20px"} >
            <Text fontSize={"18px"} color={"#3b4459"} >&copy; {new Date().getFullYear()} ForceExchange. All Right Reserved.</Text>
        </Box>
    )
}

export default Footer