import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React, { memo } from 'react'

const Layout = ({children}: {children: JSX.Element}) => {
    return (
        <Box className='gradient' >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=no" />
                <link rel="shortcut icon" href="https://raw.githubusercontent.com/itkncoder/forceexchange/97839c2ffbc9f08330fcfaacfd14de6b79c4b517/src/assets/logo.svg?token=AYLJ6GHKQAD7NQTGZOTBZ63ETEXAW" type="image/x-icon" />
            </Head>
            <Box position={"relative"} minH={"100vh"} maxW={"1320px"} mx={"auto"} >
                {children}
            </Box>
        </Box>
    )
}

export default memo(Layout)