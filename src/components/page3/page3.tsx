import { Box, Button, CircularProgress, Input, Text } from "@chakra-ui/react"
import Image from "next/image"
import qr from "@/assets/qr.svg"
import { ChevronLeftIcon, CopyIcon } from "@chakra-ui/icons"
import { useContext } from "react"
import { Context } from "@/pages/_app"

const Page3 = () => {

    const { setModalNow } = useContext(Context)

    const nextModal = () => {
        setModalNow(3)
    }

    const prevModal = () => {
        setModalNow((prev: number) => prev - 1)
    }

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"100%"}  >

            <Box w={"100%"} height={"100vh"} zIndex={1} className="filter" position={"fixed"} left={"0"} top={"0"} bg={"rgba(0, 0, 0, 0.5)"} ></Box>
            
            <Box position={"relative"} zIndex={"3"} display={"flex"} flexDirection={"column"} gap={"10px"} justifyContent={"center"} alignItems={"center"} maxW={"600px"} w={"100%"} shadow={"2xl"} py={"30px"} rounded={"25px"} px={"25px"} bg={"#1b1d27"}>

                <Box onClick={prevModal} border={"1px solid #1a1a1a"} position={"absolute"} cursor={"pointer"} _hover={{bg: "rgba(0, 0, 0, 0.2)"}} bg={"rgba(0, 0, 0, 0.1)"} display={"flex"} justifyContent={"center"} alignItems={"center"} w={"35px"} h={"35px"} rounded={"8px"} top={"15px"} left={"20px"} >
                    <ChevronLeftIcon fontSize={"24px"} />
                </Box>

                <Box w={"100%"} display={"flex"} justifyContent={"end"} alignItems={"center"} >
                    <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"} >
                        <Box display={"flex"} flexDirection={"column"} alignItems={"end"} >
                            <Text fontSize={"18px"}>Qolgan vaqt:</Text>
                            <Text color={"#7e90ba"} >29:15</Text>
                        </Box>
                        <CircularProgress trackColor="transparent" value={70} color='#0066CC' thickness='12px' />
                    </Box>
                </Box>

                <Box w={"100%"} maxW={"380px"}>
                    <Text textAlign={"center"} fontSize={"24px"} >
                        Order tasdiqlanishi uchun quyidagi manzilga Usdt o’tkazing:
                    </Text>
                </Box>

                <Box mt={"8px"} w={"100%"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"15px"} >
                    <Box w={"100%"} my={"5px"}  display={"flex"} justifyContent={"center"} >
                        <Box bg={"white"} rounded={"15px"} p={"15px"} >
                            <Image style={{width: "150px", height: "auto"}} width={100} height={100} alt="qr" src={qr} />
                        </Box>
                    </Box>
                    <Box w={"100%"} >
                        <Text textAlign={"center"} fontSize={"20px"} >To’lov miqdori: 1000 USDT</Text>
                    </Box>
                    <Box w={"100%"} >
                        <Box w={"100%"} >
                            <Text color={"#7e90ba"} >TRC20 address:</Text>
                            <Text px={"20px"} mt={"2px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}}>TG8zj8fPw7YmFXk2PyncndD81fQo5gJJpu <span><CopyIcon cursor={"pointer"} mx={"10px"} color={"#7e90ba"} /></span> </Text>
                        </Box>
                        <Box mt={"15px"} w={"100%"} >
                            <Text color={"#7e90ba"} >Binance Pay ID:</Text>
                            <Text px={"20px"} mt={"2px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}}>718799477 <span><CopyIcon cursor={"pointer"} mx={"10px"} color={"#7e90ba"} /></span> </Text>
                        </Box>
                    </Box>
                </Box>

                <Box mt={"15px"} display={"flex"} justifyContent={"center"} w={"100%"}>
                    <Button onClick={nextModal} _hover={{bg: "#1a233b"}} rounded={"15px"} px={"150px"} bg={"#232d45"} height={"fit-content"} pb={"15px"} pt={"20px"} color={"white"} fontSize={"18px"} >To’lov qildim</Button>
                </Box>

            </Box>
        </Box>
    )
}

export default Page3