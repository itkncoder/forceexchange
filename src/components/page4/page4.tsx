import { Box, Button, CircularProgress, Input, Text } from "@chakra-ui/react"
import Image from "next/image"
import qr from "@/assets/qr.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { CopyIcon } from "@chakra-ui/icons"

const Page4 = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"100%"}  >

            <Box w={"100%"} height={"100vh"} zIndex={1} className="filter" position={"fixed"} left={"0"} top={"0"} bg={"rgba(0, 0, 0, 0.5)"} ></Box>

            <Box position={"relative"} zIndex={"3"} display={"flex"} flexDirection={"column"} gap={"10px"} justifyContent={"center"} alignItems={"center"} maxW={"600px"} w={"100%"} shadow={"2xl"} py={"30px"} rounded={"25px"} px={"25px"} bg={"#1b1d27"}>

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
                        Order tasdiqlanishi uchun quyidagi kartaga pul o’tkazing:
                    </Text>
                </Box>

                <Box mt={"8px"} w={"100%"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"15px"} >
                    <Box w={"100%"} my={"5px"}  display={"flex"} justifyContent={"center"} >
                        <Box>
                            <Image style={{width: "350px", height: "auto", borderRadius: "25px"}} width={600} height={500} alt="qr" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_OW25WoDBUuH2e52M2lNOdl1EZp3xgQwocBi0YaLkiniBwEQVAz-c5QzXA4kiHzCS-Q8&usqp=CAU"} />
                        </Box>
                    </Box>
                    <Box w={"100%"} >
                        <Text textAlign={"center"} fontSize={"20px"} >To’lov miqdori: 11 420 320.50 so’m</Text>
                    </Box>
                    <Box w={"100%"} >
                        <Box w={"100%"} >
                            <Text color={"#7e90ba"} >Karta raqam:</Text>
                            <Text px={"20px"} mt={"2px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}}>9860 2210 5877 5270 <span><CopyIcon cursor={"pointer"} mx={"10px"} color={"#7e90ba"} /></span> </Text>
                        </Box>
                        <Box mt={"15px"} w={"100%"} >
                            <Text px={"20px"} mt={"2px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}}>Abdullayev Feruz</Text>
                        </Box>
                    </Box>
                </Box>

                <Box mt={"15px"} display={"flex"} justifyContent={"center"} w={"100%"}>
                    <Button _hover={{bg: "#1a233b"}} rounded={"15px"} px={"150px"} bg={"#232d45"} height={"fit-content"} pb={"15px"} pt={"20px"} color={"#0078ff"} fontSize={"18px"} >To’lov qildim</Button>
                </Box>

            </Box>
        </Box>
    )
}

export default Page4