import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React, { memo } from 'react'
import logo from "@/assets/logo.svg"

const Layout = ({children}: {children: JSX.Element}) => {
    return (
        <Box className='gradient' >
            <Head>
                <title>Force Exchange</title>
                <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=no" />
                <meta name="keywords" content="exchange, forceexchange, force exchange, money, dollar, sum, tether, usd, usdt, uzb" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="description" content="" />
                <meta http-equiv="X-UA-Compatible" content="IE=7" />
                <meta name="robots" content="index, follow"/>
                <meta name="author" content="blocktechno" />

                <link rel="shortcut icon" href={"https://raw.githubusercontent.com/itkncoder/forceexchange/f5b3d0b29f6717b40187e5094c60ffa62bd76020/src/assets/logo.svg?token=AYLJ6GH3WJ7JRTNELKYJBDTETHNCM"} type="image/image" />
            </Head>
            <Box position={"relative"} minH={"100vh"} maxW={"1320px"} mx={"auto"} >
                {children}
            </Box>
        </Box>
    )
}

export default memo(Layout)