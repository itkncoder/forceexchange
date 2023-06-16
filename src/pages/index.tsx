import Footer from "@/components/footer/footer"
import IndexModal from "@/components/index-modal/indexModal"
import Navbar from "@/components/navbar/navbar"
import Page2 from "@/components/page2/page2"
import Page3 from "@/components/page3/page3"
import Page4 from "@/components/page4/page4"
import Layout from "@/layout/layout"
import { Box, Button, Text } from "@chakra-ui/react"
import Head from "next/head"
import { useContext } from "react"
import { Context } from "./_app"

const Index = () => {

    const { modalNow } = useContext(Context)

    return (
        <Layout>
            <Box color={"white"}>
                <Head>
                    <title>Force Exchange</title>
                </Head>
                <Box>
                    <Navbar/>
                    <Box>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} h={"100vh"} >
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

export default Index