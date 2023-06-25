import '@/styles/globals.css'
import { ChakraProvider, useToast } from '@chakra-ui/react'
import { createContext, useEffect, useState } from 'react';

export const Context = createContext<any>(null)

function App({ Component, pageProps }: any) {

    const toast = useToast()

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

    }, [])

    return (
        <Context.Provider value={{modalNow, setModalNow, timer, setTimer, time}}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Context.Provider>
    )
}

export default App;