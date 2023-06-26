import { Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import logo from "@/assets/logo.svg"
import verifyImg from "@/assets/verify.svg"
import Link from 'next/link'
import enter from "@/assets/enter.svg"
import { memo } from 'react'

interface INavbarItem {
    title: string,
    verify?: boolean,
    link: string
}

const NavbarItem = ({title, verify, link}: INavbarItem) => {
    return (
        <Box>
            <Link target={"_blank"} href={link}>
                <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"8px"}>
                    <Text _hover={{color: "#b7b7b7"}} fontSize={{base: "16px", md: "20px"}} >{title}</Text>
                    {
                        verify
                        &&
                        <Box>
                            <Image style={{width: "20px", height: "auto", paddingBottom: "3px"}} width={100} height={100} alt='verify' priority src={verifyImg} />
                        </Box>
                    }
                </Box>
            </Link>
        </Box>
    )
}

const Navbar = () => {
    return (
        <Box position={"absolute"} w={"100%"} left={"0"} top={"0"} py={{base: "20px", md: "60px"}} >
            <Box px={{base: "10px", md: "0"}} flexDirection={{base: "column", md: "row"}} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                <Box display={"flex"} flexDirection={{base: "column", md: "row"}} alignItems={"center"} gap={"75px"} >
                    <Box display={{base: "none", md: "block"}}>
                        <Link href={"/"}>
                            <Image style={{width: "175px", height: "auto"}} width={300} height={200} alt='logo' priority src={logo} />
                        </Link>
                    </Box>
                    <Box mb={"-15px"} height={"0"} display={{base: "block", md: "none"}}>
                        <Link href={"/"}>
                            <Image style={{width: "135px", height: "auto"}} width={300} height={200} alt='logo' priority src={logo} />
                        </Link>
                    </Box>
                    <Box mt={{base: "10px", md: "0"}} display={"flex"} justifyContent={"start"} alignItems={"center"} gap={{base: "25px", md: "35px"}} >
                        <NavbarItem link={"/qoidalar"} title={"Qoidalar"} />
                        <NavbarItem link={"/qollanma"} title={"Qo'llanma"} />
                        <NavbarItem link={"https://t.me/Feruz_769"} title={"Operator"} verify />
                    </Box>
                </Box>
                <Box my={{base: "10px", md: "0"}} display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"40px"} >
                    <Link href={"/login"}>
                        <Box display={"flex"} justifyContent={"start"} gap={"8px"} alignItems={"center"} >
                            <Image style={{width: "25px", height: "auto"}} width={300} height={200} alt='enter' priority src={enter} />
                            <Text _hover={{color: "#b7b7b7"}} fontSize={{base: "16px", md: "20px"}} >Kirish</Text>
                        </Box>
                    </Link>
                    <Link href={"/register"}>
                        <Button transition={".3s all"} _hover={{bg: "linear-gradient(to right, #2F41DD, #103A7C)"}} bg={"linear-gradient(to right, #495BF9, #134189)"} borderRadius={"14px"} color={"white"} height={"fit-content"} pb={{base: "6px", md: "8px"}} pt={{base: "9px", md: "12px"}} fontSize={{base: "16px", md: "18px"}} >Ro'yhatdan o'tish</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default memo(Navbar)