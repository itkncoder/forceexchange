import { Context } from "@/pages/_app"
import { Box, CircularProgress, Text, useToast } from "@chakra-ui/react"
import { memo, useContext, useEffect, useState } from "react"

const Progress = () => {

    const {timer, setTimer, setModalNow} = useContext(Context)

    const toast = useToast()

    useEffect(() => {
        if (timer > 450000 * 4 - 2000) {
            toast({
                title: 'Berilgan vaqt tugadi!',
                status: 'error',
                variant: "solid",
                position: "top",
                colorScheme: "dark",
                duration: 2000,
                isClosable: true,
            })
            setModalNow(0)
        }
    }, [timer])

    return (
        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"end"}>
                <Text fontSize={"18px"}>Qolgan vaqt:</Text>
                <Text color={"#7e90ba"} >{29 - new Date(timer).getMinutes()}:{60 - new Date(timer).getSeconds()}</Text>
            </Box>
            <CircularProgress trackColor="transparent" value={timer} max={450000 * 4} color='#0066CC' thickness='12px'/>
        </Box>
    )
}

export default memo(Progress)