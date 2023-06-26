import Footer from "@/components/footer/footer"
import IndexModal from "@/components/index-modal/indexModal"
import Navbar from "@/components/navbar/navbar"
import Page2 from "@/components/page2/page2"
import Page3 from "@/components/page3/page3"
import Page4 from "@/components/page4/page4"
import Layout from "@/layout/layout"
import { Box } from "@chakra-ui/react"
import Head from "next/head"
import { memo, useContext } from "react"
import { Context } from "./_app"
import logo from "@/assets/logo.svg"

const Index = () => {

    const { modalNow } = useContext(Context)

    return (
        <Layout>
            <Box color={"white"}>
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
                <Box>
                    <Navbar/>
                    <Box>
                        <Box px={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"100vh"} >
                            { modalNow === 0 && <IndexModal />}
                            { modalNow === 1 && <Page2/>}
                            { modalNow === 2 && <Page3/>}
                            { modalNow === 3 && <Page4/>}
                        </Box>
                    </Box>
                    <Footer/>
                </Box>
            </Box>
        </Layout>
    )
}

export default memo(Index)