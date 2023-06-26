import { Context } from "@/pages/_app"
import { Box, CircularProgress, Text, useToast } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { memo, useContext, useEffect } from "react"

const Progress = () => {

    const router = useRouter()

    const {timer, setTimer, setModalNow, time} = useContext(Context)

    const toast = useToast()

    useEffect(() => {
        if (timer > 225000 * 4 - 1500) {
            clearTimeout(time)
            setTimeout(() => {
                router.reload()
            }, 1500)
            toast({
                title: 'Berilgan vaqt tugadi!',
                status: 'info',
                variant: "solid",
                position: "top",
                duration: 2500,
                isClosable: true,
            })
            setModalNow(0)
        }
    }, [timer])

    return (
        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"15px"}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"end"}>
                <Text fontSize={{base: "16px", md: "18px"}}>Qolgan vaqt:</Text>
                <Text fontSize={{base: "14px", md: "16px"}} color={"#7e90ba"} >{14 - new Date(timer).getMinutes()}:{60 - new Date(timer).getSeconds()}</Text>
            </Box>
            <CircularProgress trackColor="transparent" value={timer} max={225000 * 4} color='#0066CC' thickness='12px'/>
        </Box>
    )
}

export default memo(Progress)