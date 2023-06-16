import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { createContext, useState } from 'react';

const Context = createContext<any>(null)

function App({ Component, pageProps }: any) {

    const [modalNow, setModalNow] = useState(0)

    return (
        <Context.Provider value={{modalNow, setModalNow}}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Context.Provider>
    )
}

export default App;