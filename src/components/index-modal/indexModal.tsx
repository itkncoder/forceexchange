import { Box, Button, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"
import Image from "next/image"
import tether from "@/assets/tether.svg"
import sum from "@/assets/sum.svg"
import repeat from "@/assets/repeat.svg"
import angledown from "@/assets/angledown.svg"
import { useContext, useState } from "react"
import { Context } from "@/pages/_app"
import Usdt from "./usdt"
import Sum from "./sum"

const IndexModal = () => {

    const { setModalNow } = useContext(Context)
    const [fromTo, setFromTo] = useState<boolean>(true)

    const nextModal = () => {
        setModalNow(1)
    }

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"100%"}  >
            <Box display={"flex"} flexDirection={"column"} gap={"15px"} justifyContent={"center"} alignItems={"center"} maxW={"600px"} w={"100%"} shadow={"2xl"} py={"30px"} rounded={"25px"} px={"25px"} bg={"#1b1d27"}>

                {
                    fromTo 
                    ?
                    <>
                        <Usdt onTop changer={setFromTo} />
                        <Sum changer={setFromTo} />
                    </>
                    :
                    <>
                        <Sum onTop changer={setFromTo} />
                        <Usdt changer={setFromTo} />
                    </>
                }

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