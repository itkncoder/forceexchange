import { Box, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Skeleton, Text } from "@chakra-ui/react"
import Image from "next/image"
import tether from "@/assets/tether.png"
import angledown from "@/assets/angledown.svg"
import { useContext, useEffect } from "react"
import { Context } from "@/pages/_app"

const Usdt = ({changer, onTop}: {changer: any, onTop?: boolean}) => {

    const { usd, setUsd, usdResult, setSumResult, usdNow, loaderUsd } = useContext(Context)

    useEffect(() => {
        setSumResult(Number(usd) * Number(usdNow))
    }, [usd, usdNow])

    return (
        <Box w={"100%"} maxW={"580px"} position={"relative"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"35px"} height={"130px"} bg={"#0f1117"} border={"2px solid transparent"} rounded={"25px"}>

            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"} >
                <Skeleton startColor="rgba(256, 256, 256, .1)" endColor="rgba(256, 256, 256, .2)" rounded={"7px"} isLoaded={loaderUsd} w={"100%"}>
                    <Image style={{width: "35px", height: "auto"}} width={100} height={100} alt="tether" src={tether} />
                </Skeleton>
                <Skeleton startColor="rgba(256, 256, 256, .1)" endColor="rgba(256, 256, 256, .2)" rounded={"7px"} isLoaded={loaderUsd} w={"100%"}>
                    <Text fontSize={"26px"} pt={"5px"} >USDT</Text>
                </Skeleton>
            </Box>

            {
                onTop
                ?
                <Box display={"flex"} justifyContent={"end"} > 
                    <Skeleton startColor="rgba(256, 256, 256, .1)" endColor="rgba(256, 256, 256, .2)" rounded={"7px"} isLoaded={loaderUsd}>
                        <NumberInput value={Number(usd).toLocaleString()} onChange={(e: any) => setUsd(e)} mr={"0"} pl={"0"} variant={"unstyled"} w={"fit-content"} min={0} >
                            <NumberInputField w={"fit-content"} px={"0"} mr={"0"} pl={"0"} placeholder="0" textAlign={"end"} border={"0"} _focus={{border: "0", outline: "0"}} _hover={{bg: "transparent"}} height={"fit-content"} pb={"8px"} pt={"10px"} fontSize={"20px"} />
                        </NumberInput>
                    </Skeleton>
                </Box>
                :
                <Box display={"flex"} justifyContent={"end"}>
                    <Skeleton startColor="rgba(256, 256, 256, .1)" endColor="rgba(256, 256, 256, .2)" rounded={"7px"} isLoaded={loaderUsd}>
                        <Text fontSize={"24px"} >{Number(usdResult).toLocaleString() || 1}</Text>
                    </Skeleton>
                </Box>
            }

            <Text fontSize={"15px"} position={"absolute"} bottom={"15px"} left={"35px"} color={"#7e90ba"} >Tether USD</Text>

            { onTop && <Box left={"0"} w={"100%"} zIndex={"2"} position={"absolute"} bottom={"-20px"} display={"flex"} justifyContent={"center"} alignItems={'center'}>
                <Box onClick={() => changer((prev: boolean) => !prev)} cursor={"pointer"} shadow={"lg"} bg={"#394254"} w={"30px"} height={"30px"} display={"flex"} justifyContent={"center"} alignItems={'center'} rounded={"50%"} >
                    <Image style={{width: "22px", height: "auto"}} width={100} height={100} alt="angledown" src={angledown}/>
                </Box>
            </Box>}
        </Box>
    )
}

export default Usdt