import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

export const Context = createContext<any>(null)

function App({ Component, pageProps }: any) {

    const router = useRouter()

    const [usdNow, setUsdNow] = useState()

    const [date] = useState(new Date())

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
            setSumResult, usdResult, setUsdResult, loaderUsd, date
        }}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Context.Provider>
    )
}

export default App;