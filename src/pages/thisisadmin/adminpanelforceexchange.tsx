import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.svg"
import Head from "next/head"
import { ChangeEvent, useEffect, useState } from "react"
import axios from "axios"

const Adminpanelforceexchange = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loader, setLoader] = useState(true)

    const [data, setData] = useState([])

    const [newPrice, setNewPrice] = useState<Number | String>()
    
    useEffect(() => {
        axios.get("https://forceexchangebackend.onrender.com/api/order/orders").then((res) => {
            setData(res.data.data)
            setLoader(false)
        })
    }, [])

    const setPrice = () => {
        axios.put("https://forceexchangebackend.onrender.com/api/price", {
            price: newPrice
        }).then(() => {
            onClose()
            setNewPrice('')
        })
    }

    return (
        <Box color={"white"} className='gradient' >
            <Head>
                <title>ForceExchange ADMIN</title>
            </Head>
            <Box position={"relative"} minH={"100vh"} px={"20px"} >
                <Box display={"flex"} justifyContent={"space-between"} gap={{base: "15px", md: "0"}} flexDirection={{base: "column", md: "row"}} alignItems={"center"} py={"25px"} >
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
                            {
                                !loader ?
                                <><Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th color={"#f1f1f1"} borderColor={"gray"} >Name</Th>
                                            <Th color={"#f1f1f1"} borderColor={"gray"} >TelAndUsername</Th>
                                            <Th color={"#f1f1f1"} borderColor={"gray"} >Address</Th>
                                            <Th color={"#f1f1f1"} borderColor={"gray"} >UsdPrice</Th>
                                            <Th color={"#f1f1f1"} borderColor={"gray"} >UsdTotal</Th>
                                            <Th color={"#f1f1f1"} borderColor={"gray"} >UzsTotal</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody >
                                        {
                                            data.map((i: any) => 
                                                <Tr key={i._id} >
                                                    <Td border={"0"}>{i.name}</Td>
                                                    <Td border={"0"}>{i.telAndUsername}</Td>
                                                    <Td border={"0"}>{i.address}</Td>
                                                    <Td border={"0"}>{i?.usdtPrice}</Td>
                                                    <Td border={"0"}>{i.usdtTotal}</Td>
                                                    <Td border={"0"}>{i.uzsTotal}</Td>
                                                </Tr>
                                            )
                                        }
                                    </Tbody>
                                </Table></>
                                :
                                <Box display={"flex"} justifyContent={"center"} height={"300px"} alignItems={"center"} >
                                    <Spinner/>
                                </Box>
                            }
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
                        <Text color={"white"} my={"3px"} >1$ Narxini UZS da yozing...</Text>
                        <Input value={String(newPrice)} onChange={(e: any) => setNewPrice(e.target.value)} color={"white"} placeholder="1$ Narxini UZS da yozing..." border={"0"} bg={"rgba(256, 256, 256, .1)"} type={'number'} />
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={setPrice} colorScheme='blue'>O'zgartirish</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    )
}

export default Adminpanelforceexchange