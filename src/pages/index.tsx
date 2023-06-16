import Footer from "@/components/footer/footer"
import IndexModal from "@/components/index-modal/indexModal"
import Navbar from "@/components/navbar/navbar"
import Page2 from "@/components/page2/page2"
import Page3 from "@/components/page3/page3"
import Page4 from "@/components/page4/page4"
import Layout from "@/layout/layout"
import { Box, Button, Text } from "@chakra-ui/react"
import Head from "next/head"

const Index = () => {

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
                            <IndexModal />
                            {/* <Page2/> */}
                            {/* <Page3/> */}
                            {/* <Page4/> */}
                        </Box>
                    </Box>
                    <Footer/>
                </Box>
            </Box>
        </Layout>
    )
}

export default Index