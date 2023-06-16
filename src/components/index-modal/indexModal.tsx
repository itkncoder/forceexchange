import { Box, Button, Text } from "@chakra-ui/react"
import Image from "next/image"
import tether from "@/assets/tether.svg"
import sum from "@/assets/sum.svg"
import repeat from "@/assets/repeat.svg"
import angledown from "@/assets/angledown.svg"
import { useContext } from "react"
import { Context } from "@/pages/_app"

const IndexModal = () => {

    const { setModalNow } = useContext(Context)

    const nextModal = () => {
        setModalNow(1)
    }

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"100%"}  >
            <Box display={"flex"} flexDirection={"column"} gap={"15px"} justifyContent={"center"} alignItems={"center"} maxW={"600px"} w={"100%"} shadow={"2xl"} py={"30px"} rounded={"25px"} px={"25px"} bg={"#1b1d27"}>

                <Box w={"100%"} maxW={"580px"} position={"relative"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"35px"} py={"50px"} bg={"#0f1117"} rounded={"25px"}>
                    <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"} >
                        <Image style={{width: "35px", height: "auto"}} width={100} height={100} alt="tether" src={tether} />
                        <Text fontSize={"26px"} >USDT</Text>
                    </Box>
                    <Box>
                        <Text fontSize={"26px"}>1070.85</Text>
                    </Box>

                    <Text fontSize={"15px"} position={"absolute"} bottom={"15px"} left={"35px"} color={"#7e90ba"} >Tether USD</Text>

                    <Box left={"0"} w={"100%"} zIndex={"2"} position={"absolute"} bottom={"-20px"} display={"flex"} justifyContent={"center"} alignItems={'center'}>
                        <Box cursor={"pointer"} shadow={"lg"} bg={"#394254"} w={"30px"} height={"30px"} display={"flex"} justifyContent={"center"} alignItems={'center'} rounded={"50%"} >
                            <Image style={{width: "22px", height: "auto"}} width={100} height={100} alt="angledown" src={angledown}/>
                        </Box>
                    </Box>
                </Box>

                <Box shadow={"2xl"} border={"3px solid #1D2533"} w={"100%"} maxW={"580px"} position={"relative"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"35px"} py={"40px"} bg={"#1b1f27"} rounded={"25px"}>
                    <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"} >
                        <Image style={{width: "35px", height: "auto"}} width={100} height={100} alt="sum" src={sum} />
                        <Text fontSize={"26px"} >UZS</Text>
                    </Box>
                    <Box>
                        <Text fontSize={"26px"}>11 420 320,50</Text>
                    </Box>
                </Box>

                <Box mt={"5px"} w={"100%"} maxW={"580px"} position={"relative"} gap={"15px"} display={"flex"} justifyContent={"start"} alignItems={"center"} px={"35px"} py={"20px"} bg={"#0f1117"} rounded={"15px"}>
                    <Image style={{width: "25px", height: "auto"}} width={100} height={100} alt="repeat" src={repeat} />
                    <Text fontSize={"18px"} >1 USDT <span style={{color: "#7e90ba", padding: "0 5px"}} >=</span> 11 250 SO'M</Text>
                </Box>

                <Box mt={"5px"} w={"100%"}>
                    <Button _hover={{bg: "#1a233b"}} rounded={"15px"} w={"100%"} bg={"#232d45"} height={"fit-content"} pb={"15px"} pt={"20px"} color={"white"} fontSize={"18px"} onClick={nextModal} >Sotib olish</Button>
                </Box>

            </Box>
        </Box>
    )
}

export default IndexModal