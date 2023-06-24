import { Box, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"
import Image from "next/image"
import sum from "@/assets/sum.png"
import angledown from "@/assets/angledown.svg"

const Sum = ({changer, onTop}: {changer: any, onTop?: boolean}) => {
    return (
        <Box shadow={"2xl"} border={"3px solid #1D2533"} w={"100%"} maxW={"580px"} position={"relative"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"35px"} height={"130px"} bg={"#1b1f27"} rounded={"25px"}>

            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"} >
                <Image style={{width: "35px", height: "auto"}} width={100} height={100} alt="sum" src={sum} />
                <Text fontSize={"26px"} pt={"5px"} >UZS</Text>
            </Box>

            {
                onTop
                ?
                <Box display={"flex"} justifyContent={"end"} > 
                    <NumberInput variant={"unstyled"} w={"250px"} min={0} >
                        <NumberInputField w={"fit-content"} px={"0"} mr={"0"} pl={"0"} placeholder="0" textAlign={"end"} border={"0"} _focus={{border: "0", outline: "0"}} _hover={{bg: "transparent"}} height={"fit-content"} pb={"8px"} pt={"10px"} fontSize={"20px"} />
                    </NumberInput>
                </Box>
                :
                <Box>
                    <Text fontSize={"24px"} >11 420 320.50</Text>
                </Box>
            }
            
            { onTop && <Box left={"0"} w={"100%"} zIndex={"2"} position={"absolute"} bottom={"-23px"} display={"flex"} justifyContent={"center"} alignItems={'center'}>
                <Box onClick={() => changer((prev: boolean) => !prev)} cursor={"pointer"} shadow={"lg"} bg={"#394254"} w={"30px"} height={"30px"} display={"flex"} justifyContent={"center"} alignItems={'center'} rounded={"50%"} >
                    <Image style={{width: "22px", height: "auto"}} width={100} height={100} alt="angledown" src={angledown}/>
                </Box>
            </Box>}
        </Box>
    )
}

export default Sum