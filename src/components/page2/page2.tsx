import { Box, Button, CircularProgress, Input, Text } from "@chakra-ui/react"
import Image from "next/image"
import tether from "@/assets/tether.png"
import sumImg from "@/assets/sum.png"
import { useContext } from "react"
import { Context } from "@/pages/_app"
import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons"
import Progress from "../progress/progress"

const Page2 = () => {

    const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
    "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
    ]

    const { setModalNow, usdResult, date, fromTo, address, sumResult, setAddress, nameInput, setNameInput, telOrUsername, setTelOrUsername } = useContext(Context)

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
                        <Text fontSize={"18px"} >No: #{date.getTime().toString().slice(-6)}</Text>
                        <Text color={"#7e90ba"} >{date.getDate()} {monthNames[date.getMonth()]} {date.getFullYear()}. {date.getHours()}:{date.getMinutes()}</Text>
                    </Box>
                    <Progress/>
                </Box>

                <Box mt={"15px"} w={"100%"} maxW={"580px"} position={"relative"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"20px"} py={"15px"} bg={"#0f1117"} rounded={"25px"}>
                    {
                        !fromTo
                        ?
                        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"} >
                            <Image style={{width: "50px", height: "auto"}} width={100} height={100} alt="humo" src={tether} />
                            <Text fontSize={"24px"} >USDT</Text>
                        </Box>
                        :
                        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"} >
                            <Image style={{width: "50px", height: "auto"}} width={100} height={100} alt="humo" src={sumImg} />
                            <Text fontSize={"24px"} >UZS</Text>
                        </Box>
                    }
                    {
                        !fromTo
                        ?
                        <Box>
                            <Text color={"#7e90ba"} fontSize={"22px"}>{Number(usdResult).toLocaleString()} USDT</Text>
                        </Box>
                        :
                        <Box>
                            <Text color={"#7e90ba"} fontSize={"22px"}>{Number(sumResult).toLocaleString()} UZS</Text>
                        </Box>
                    }
                </Box>

                <Box mt={"8px"} w={"100%"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"15px"} >
                    <Box w={"100%"} >
                        <Text color={"#7e90ba"} >TRC-20 Address yoki Binance PayID:</Text>
                        <Input value={address} onChange={(e) => setAddress(e.target.value)} mt={"5px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}} variant={"filled"} placeholder="TRC-20 Address yoki Binance PayID..." />
                    </Box>
                    <Box w={"100%"} >
                        <Text color={"#7e90ba"} >Ism Familiya:</Text>
                        <Input value={nameInput} onChange={(e) => setNameInput(e.target.value)} mt={"5px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}} variant={"filled"} placeholder="Ism Familiya..." />
                    </Box>
                    <Box w={"100%"} >
                        <Text color={"#7e90ba"} >Telefon raqam: <span style={{color: "#444e64"}} >(yoki telegram @username)</span></Text>
                        <Input value={telOrUsername} onChange={(e) => setTelOrUsername(e.target.value)} mt={"5px"} rounded={"15px"} py={"15px"} height={"fit-content"} bg={"#0b1119"} _hover={{bg: "#0b1119"}} variant={"filled"} placeholder="Telefon raqamingiz yoki telegram @username..." />
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