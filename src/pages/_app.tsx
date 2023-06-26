import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

export const Context = createContext<any>(null)

function App({ Component, pageProps }: any) {

    const [fromTo, setFromTo] = useState<boolean>(false)

    const [usdNow, setUsdNow] = useState()

    const [address, setAddress] = useState()
    const [telOrUsername, setTelOrUsername] = useState()
    const [nameInput, setNameInput] = useState()

    const [date] = useState(new Date())

    const [select, setSelect] = useState(true)

    const [sum, setSum] = useState()
    const [usd, setUsd] = useState(1)
    const [loaderUsd, setLoaderUsd] = useState(false)
    
    const [sumResult, setSumResult] = useState(null)
    const [usdResult, setUsdResult] = useState(null)

    const [modalNow, setModalNow] = useState(0)

    const [time, setTime] = useState<NodeJS.Timeout>()
    const [timer, setTimer] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            setTimer((prev: number) => prev + 500)
        }, 1000)

        const timeout = setTimeout(() => {
            clearInterval(interval)
        }, 10000000)

        setTime(timeout)

        axios.get("https://forceexchangebackend.onrender.com/api/price").then((res: any) => {
            setUsdNow(res.data.data[0].price)
            setSum(res.data.data[0].price)
            setLoaderUsd(true)
        })

    }, [])

    return (
        <Context.Provider value={{
            modalNow, setModalNow, timer, 
            setTimer, time, usdNow, sum, setSum, usd, setUsd, sumResult, 
            setSumResult, usdResult, setUsdResult, loaderUsd, date, fromTo, setFromTo,
            address, setAddress, telOrUsername, setTelOrUsername, nameInput, setNameInput, select, setSelect
        }}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Context.Provider>
    )
}

export default App;