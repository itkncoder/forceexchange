import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.svg"
import Head from "next/head"

const Adminpanelforceexchange = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box color={"white"} className='gradient' >
            <Head>
                <title>ForceExchange ADMIN</title>
            </Head>
            <Box position={"relative"} minH={"100vh"} px={"20px"} >
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} py={"25px"} >
                    <Link href={"/"}>
                        <Image style={{width: "175px", height: "auto"}} width={400} height={300} alt='logo' priority src={logo} />
                    </Link>
                    <Box>
                        <Button onClick={onOpen} transition={".3s all"} _hover={{bg: "linear-gradient(to right, #2F41DD, #103A7C)"}} bg={"linear-gradient(to right, #495BF9, #134189)"} borderRadius={"14px"} color={"white"} height={"fit-content"} pb={"8px"} pt={"12px"} fontSize={"18px"} >Narx o'zgartirish</Button>
                    </Box>
                </Box>
                <Box>
                    <Box my={"10px"} >
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th color={"#f1f1f1"} borderColor={"gray"} >UsdPrice</Th>
                                        <Th color={"#f1f1f1"} borderColor={"gray"} >Name</Th>
                                        <Th color={"#f1f1f1"} borderColor={"gray"} >Address</Th>
                                        <Th color={"#f1f1f1"} borderColor={"gray"} >TelAndUsername</Th>
                                        <Th color={"#f1f1f1"} borderColor={"gray"} >UsdTotal</Th>
                                        <Th color={"#f1f1f1"} borderColor={"gray"} >UzsTotal</Th>
                                    </Tr>
                                </Thead>
                                <Tbody >
                                    <Tr>
                                        <Td border={"0"}>UsdPrice</Td>
                                        <Td border={"0"}>Name</Td>
                                        <Td border={"0"}>Address</Td>
                                        <Td border={"0"}>TelAndUsername</Td>
                                        <Td border={"0"}>UsdTotal</Td>
                                        <Td border={"0"}>UzsTotal</Td>
                                    </Tr>
                                    <Tr>
                                        <Td border={"0"}>UsdPrice</Td>
                                        <Td border={"0"}>Name</Td>
                                        <Td border={"0"}>Address</Td>
                                        <Td border={"0"}>TelAndUsername</Td>
                                        <Td border={"0"}>UsdTotal</Td>
                                        <Td border={"0"}>UzsTotal</Td>
                                    </Tr>
                                    <Tr>
                                        <Td border={"0"}>UsdPrice</Td>
                                        <Td border={"0"}>Name</Td>
                                        <Td border={"0"}>Address</Td>
                                        <Td border={"0"}>TelAndUsername</Td>
                                        <Td border={"0"}>UsdTotal</Td>
                                        <Td border={"0"}>UzsTotal</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"#0f1117"}>
                    <ModalHeader color={"white"}>Narxlarni o'zgartirish</ModalHeader>
                    <ModalCloseButton color={"white"} />
                    <ModalBody>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue'>O'zgartirish</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    )
}

export default Adminpanelforceexchange