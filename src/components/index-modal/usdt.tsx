import { Box, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"
import Image from "next/image"
import tether from "@/assets/tether.svg"
import angledown from "@/assets/angledown.svg"

const Usdt = ({changer, onTop}: {changer: any, onTop?: boolean}) => {
    return (
        <Box w={"100%"} maxW={"580px"} position={"relative"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"35px"} height={"130px"} bg={"#0f1117"} rounded={"25px"}>

            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"} >
                <Image style={{width: "35px", height: "auto"}} width={100} height={100} alt="tether" src={tether} />
                <Text fontSize={"26px"} >USDT</Text>
            </Box>

            <Box display={"flex"} justifyContent={"end"} > 
                <NumberInput w={"250px"} min={0} >
                    <NumberInputField placeholder="Son kiriting..." border={"0"} _hover={{bg: "#1D2533"}} height={"fit-content"} pb={"8px"} pt={"10px"} fontSize={"16px"} bg={"#1D2533"} />
                    <NumberInputStepper border={"0"} >
                        <NumberIncrementStepper border={"0"} color={"white"} />
                        <NumberDecrementStepper border={"0"} color={"white"} />
                    </NumberInputStepper>
                </NumberInput>
            </Box>

            <Text fontSize={"15px"} position={"absolute"} bottom={"15px"} left={"35px"} color={"#7e90ba"} >Tether USD</Text>

            { onTop && <Box onClick={() => changer((prev: boolean) => !prev)} left={"0"} w={"100%"} zIndex={"2"} position={"absolute"} bottom={"-20px"} display={"flex"} justifyContent={"center"} alignItems={'center'}>
                <Box cursor={"pointer"} shadow={"lg"} bg={"#394254"} w={"30px"} height={"30px"} display={"flex"} justifyContent={"center"} alignItems={'center'} rounded={"50%"} >
                    <Image style={{width: "22px", height: "auto"}} width={100} height={100} alt="angledown" src={angledown}/>
                </Box>
            </Box>}
        </Box>
    )
}

export default Usdt