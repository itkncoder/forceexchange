import { Box, Button, CircularProgress, Text, useToast } from "@chakra-ui/react"
import Image from "next/image"
import { ChevronLeftIcon, CopyIcon } from "@chakra-ui/icons"
import { memo, useContext, useEffect } from "react"
import { Context } from "@/pages/_app"
import Progress from "../progress/progress"
import card from "@/assets/card.png"
import axios from "axios"

const Page4 = () => {

    const { setModalNow, sum, usdNow, fromTo, sumResult, usdResult, usd, address, nameInput, telOrUsername } = useContext(Context)

    const toast = useToast()

    const order = () => {
        if (address && nameInput && telOrUsername) {
            axios.post("https://forceexchangebackend.onrender.com/api/order/orders", {
                price: usdNow,
                name: nameInput,
                address: address,
                telAndUsername: telOrUsername,
                usdtTotal: fromTo ? usd : usdResult,
                uzsTotal: fromTo ? sumResult : sumResult
            }).then(() => {
                setModalNow(0)
                toast({
                    title: "Order qabul qilindi!",
                    description: "Adminlarimiz aloqaga chiqishadi",
                    status: 'info',
                    variant: "solid",
                    position: "top",
                    duration: 5000,
                    isClosable: true,
                })
            })
        } else {
            toast({
                title: "Ortga qaytib malumotlarni to'ldiring!",
                status: 'info',
                variant: "solid",
                position: "top",
                duration: 2500,
                isClosable: true,
            })
        }
    }

    const prevModal = () => {
        setModalNow((prev: number) => prev - 2)
    }

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"100%"}  >

            <Box w={"100%"} height={"100vh"} zIndex={1} className="filter" position={"fixed"} left={"0"} top={"0"} bg={"rgba(0, 0, 0, 0.5)"} ></Box>

            <Box position={"relative"} zIndex={"3"} display={"flex"} flexDirection={"column"} gap={"10px"} justifyContent={"center"} alignItems={"center"} maxW={"600px"} w={"100%"} shadow={"2xl"} py={"30px"} rounded={"25px"} px={{base: "10px", md: "25px"}} bg={"#1b1e27"}>

                <Box onClick={prevModal} border={"1px solid #1a1a1a"} position={"absolute"} cursor={"pointer"} _hover={{bg: "rgba(0, 0, 0, 0.2)"}} bg={"rgba(0, 0, 0, 0.1)"} display={"flex"} justifyContent={"center"} alignItems={"center"} w={"35px"} h={"35px"} rounded={"8px"} top={"15px"} left={"20px"} >
                    <ChevronLeftIcon fontSize={"24px"} />
                </Box>

                <Box w={"100%"} display={"flex"} justifyContent={"end"} alignItems={"center"} >
                    <Progress/>
                </Box>

                <Box w={"100%"} maxW={"360px"}>
                    <Text textAlign={"center"} fontSize={{base: "19px", md: "22px"}} >Order tasdiqlanishi uchun quyidagi kartaga pul o’tkazing:</Text>
                </Box>

                <Box mt={"8px"} w={"100%"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"15px"} >
                    <Box w={"100%"} my={"5px"}  display={"flex"} justifyContent={"center"} >
                        <Box>
                            <Image priority style={{width: "380px", height: "auto", borderRadius: "25px"}} width={1500} height={1000} alt="qr" src={card} />
                        </Box>
                    </Box>
                    <Box w={"100%"} >
                        <Text textAlign={"center"} fontSize={{base: "18px", md: "20px"}} >To’lov miqdori: {Number(sum).toLocaleString()} so’m 
                        <span><CopyIcon onClick={() => {
                                navigator.clipboard.writeText(Number(sum).toLocaleString())
                                toast({
                                    title: `Copied ${Number(sum).toLocaleString()}`,
                                    status: 'info',
                                    variant: "solid",
                                    position: "top",
                                    duration: 2000,
                                    isClosable: true,
                                })
                            }} cursor={"pointer"} mx={"10px"} color={"#7e90ba"} /></span> </Text>
                    </Box>
                    <Box w={"100%"} >
                        <Box w={"100%"} >
                            <Text color={"#7e90ba"} >Karta raqam:</Text>
                            <Text fontSize={{base: "14px", md: "16px"}} px={"20px"} mt={"2px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}}>9860 2210 5877 5270 <span><CopyIcon onClick={() => {
                                navigator.clipboard.writeText("9860 2210 5877 5270")
                                toast({
                                    title: 'Copied 9860 2210 5877 5270',
                                    status: 'info',
                                    variant: "solid",
                                    position: "top",
                                    duration: 2000,
                                    isClosable: true,
                                })
                            }} cursor={"pointer"} mx={"10px"} color={"#7e90ba"} /></span> </Text>
                        </Box>
                        <Box mt={{base: "8px", md: "15px"}} w={"100%"} >
                            <Text fontSize={{base: "14px", md: "16px"}} px={"20px"} mt={"2px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}}>Abdullayev Feruz</Text>
                        </Box>
                    </Box>
                </Box>

                <Box mt={{base: "5px", md: "15px"}} display={"flex"} justifyContent={"center"} w={"100%"}>
                    <Button onClick={order} _hover={{bg: "#1a233b"}} rounded={"15px"} px={"150px"} bg={"#232d45"} height={"fit-content"} pb={{base: "10px", md: "15px"}} pt={{base: "15px", md: "20px"}} color={"#0078ff"} fontSize={"18px"} >To’lov qildim</Button>
                </Box>

            </Box>
        </Box>
    )
}

export default memo(Page4)