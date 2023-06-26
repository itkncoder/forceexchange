import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Input, ListIcon, MenuIcon, Text, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import logo from "@/assets/logo.svg"
import verifyImg from "@/assets/verify.svg"
import Link from 'next/link'
import enter from "@/assets/enter.svg"
import { memo } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

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
                    <Text _hover={{color: "#b7b7b7"}} fontSize={{base: "22px", md: "20px"}} >{title}</Text>
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

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box position={"absolute"} w={"100%"} left={"0"} top={"0"} py={{base: "30px", md: "60px"}} >
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
                        <Box position={"absolute"} zIndex={10} top={"20px"} right={"20px"} >
                            <Button onClick={onOpen} bg={"rgba(256, 256, 256, 0.05)"}>
                                <HamburgerIcon fontSize={"20px"} color={"white"}/>
                            </Button>
                        </Box>
                    </Box>
                    <Box mt={{base: "10px", md: "0"}} display={{base: "none", md: "flex"}} justifyContent={"start"} alignItems={"center"} gap={{base: "25px", md: "35px"}} >
                        <NavbarItem link={"/qoidalar"} title={"Qoidalar"} />
                        <NavbarItem link={"/qollanma"} title={"Qo'llanma"} />
                        <NavbarItem link={"https://t.me/Feruz_769"} title={"Operator"} verify />
                    </Box>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        size={"full"}
                    >
                        <DrawerOverlay />
                        <DrawerContent bg={"#0f1117"} >
                            <DrawerCloseButton color={"white"} />
                            <DrawerHeader color={"white"}>Menu:</DrawerHeader>

                            <DrawerBody color={"white"}>
                                <Box gap={"15px"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} >
                                    <NavbarItem link={"/qoidalar"} title={"Qoidalar"} />
                                    <NavbarItem link={"/qollanma"} title={"Qo'llanma"} />
                                    <NavbarItem link={"https://t.me/Feruz_769"} title={"Operator"} verify />
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Box>
        </Box>
    )
}

export default memo(Navbar)