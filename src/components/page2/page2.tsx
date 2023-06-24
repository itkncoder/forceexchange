import { Box, Button, CircularProgress, Input, Text } from "@chakra-ui/react"
import Image from "next/image"
import humo from "@/assets/humo.svg"
import { useContext } from "react"
import { Context } from "@/pages/_app"
import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons"
import Progress from "../progress/progress"

const Page2 = () => {

    const { setModalNow } = useContext(Context)

    const nextModal = () => {
        setModalNow((prev: number) => prev + 2)
    }

    const prevModal = () => {
        setModalNow((prev: number) => prev - 1)
    }

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"100%"}  >
            
            <Box w={"100%"} height={"100vh"} zIndex={1} className="filter" position={"fixed"} left={"0"} top={"0"} bg={"rgba(0, 0, 0, 0.5)"} ></Box>

            <Box position={"relative"} zIndex={"3"} display={"flex"} flexDirection={"column"} gap={"15px"} justifyContent={"center"} alignItems={"center"} maxW={"600px"} w={"100%"} shadow={"2xl"} py={"30px"} rounded={"25px"} px={"25px"} bg={"#1b1d27"}>

                <Box onClick={prevModal} border={"1px solid #1a1a1a"} position={"absolute"} cursor={"pointer"} _hover={{bg: "rgba(0, 0, 0, 0.2)"}} bg={"rgba(0, 0, 0, 0.1)"} display={"flex"} justifyContent={"center"} alignItems={"center"} w={"35px"} h={"35px"} rounded={"8px"} top={"15px"} left={"20px"} >
                    <CloseIcon fontSize={"14px"} />
                </Box>

                <Box pt={"30px"} w={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Box>
                        <Text fontSize={"18px"} >No: #121406</Text>
                        <Text color={"#7e90ba"} >15 iyun 2023. 16:40</Text>
                    </Box>
                    <Progress/>
                </Box>

                <Box mt={"15px"} w={"100%"} maxW={"580px"} position={"relative"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"20px"} py={"15px"} bg={"#0f1117"} rounded={"25px"}>
                    <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"} >
                        <Image style={{width: "50px", height: "auto"}} width={100} height={100} alt="humo" src={humo} />
                        <Text fontSize={"24px"} >Humo</Text>
                    </Box>
                    <Box>
                        <Text color={"#7e90ba"} fontSize={"20px"}>11 420 320.50 so'm</Text>
                    </Box>
                </Box>

                <Box mt={"8px"} w={"100%"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"15px"} >
                    <Box w={"100%"} >
                        <Text color={"#7e90ba"} >TRC-20 Address yoki Binance PayID:</Text>
                        <Input mt={"5px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}} variant={"filled"} placeholder="TRC-20 Address yoki Binance PayID..." />
                    </Box>
                    <Box w={"100%"} >
                        <Text color={"#7e90ba"} >Ism Familiya:</Text>
                        <Input mt={"5px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}} variant={"filled"} placeholder="Ism Familiya..." />
                    </Box>
                    <Box w={"100%"} >
                        <Text color={"#7e90ba"} >Telefon raqam: <span style={{color: "#444e64"}} >(yoki telegram @username)</span></Text>
                        <Input mt={"5px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}} variant={"filled"} placeholder="Telefon raqamingiz yoki telegram @username..." />
                    </Box>
                </Box>

                <Box mt={"15px"} display={"flex"} justifyContent={"center"} w={"100%"}>
                    <Button onClick={nextModal} _hover={{bg: "#1a233b"}} rounded={"15px"} px={"150px"} bg={"#232d45"} height={"fit-content"} pb={"15px"} pt={"20px"} color={"white"} fontSize={"18px"} >To’lov qilish</Button>
                </Box>

            </Box>
        </Box>
    )
}

export default Page2