import { Box } from '@chakra-ui/react'
import React from 'react'

const Layout = ({children}: {children: JSX.Element}) => {
    return (
        <Box className='gradient' >
            <Box position={"relative"} minH={"100vh"} maxW={"1320px"} mx={"auto"} >
                {children}
            </Box>
        </Box>
    )
}

export default Layout