import { Box, NumberInput, NumberInputField, Text } from "@chakra-ui/react"
import Image from "next/image"
import sumImg from "@/assets/sum.png"
import angledown from "@/assets/angledown.svg"
import { Context } from "@/pages/_app"
import { useContext, useEffect } from "react"

const Sum = ({changer, onTop}: {changer: any, onTop?: boolean}) => {

    const { sum, setSum, usdNow, setUsdResult, sumResult } = useContext(Context)

    useEffect(() => {
        setUsdResult(Number(sum) / Number(usdNow))
    }, [sum, usdNow])

    return (
        <Box shadow={"2xl"} border={"3px solid #1D2533"} w={"100%"} maxW={"580px"} position={"relative"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"35px"} height={"130px"} bg={"#1b1f27"} rounded={"25px"}>

            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"} >
                <Image style={{width: "35px", height: "auto"}} width={100} height={100} alt="sum" src={sumImg} />
                <Text fontSize={"26px"} pt={"5px"} >UZS</Text>
            </Box>

            {
                onTop
                ?
                <Box display={"flex"} justifyContent={"end"} > 
                    <NumberInput value={Number(sum).toLocaleString()} onChange={(e: any) => setSum(e)} variant={"unstyled"} min={0} >
                        <NumberInputField w={"fit-content"} px={"0"} mr={"0"} pl={"0"} placeholder="0" textAlign={"end"} border={"0"} _focus={{border: "0", outline: "0"}} _hover={{bg: "transparent"}} height={"fit-content"} pb={"8px"} pt={"10px"} fontSize={"24px"} />
                    </NumberInput>
                </Box>
                :
                <Box>
                    <Text fontSize={"24px"} >{Number(sumResult).toLocaleString() || 0}</Text>
                </Box>
            }
            
            { onTop && <Box left={"0"} w={"100%"} zIndex={"2"} position={"absolute"} bottom={"-23px"} display={"flex"} justifyContent={"center"} alignItems={'center'}>
                <Box onClick={() => changer((prev: boolean) => false)} cursor={"pointer"} shadow={"lg"} bg={"#394254"} w={"30px"} height={"30px"} display={"flex"} justifyContent={"center"} alignItems={'center'} rounded={"50%"} >
                    <Image style={{width: "22px", height: "auto"}} width={100} height={100} alt="angledown" src={angledown}/>
                </Box>
            </Box>}
        </Box>
    )
}

export default Sum