import PlausibleProvider from 'next-plausible'
import { EB_Garamond, Montserrat } from '@next/font/google'

const garamond = EB_Garamond({ subsets: ['latin'] })
const montserrat = Montserrat({ weight: '400', subsets: ['latin'] })

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider
            domain='handcraftedfurniture.ca'
            trackOutboundLinks={true}
        >
            <style jsx global>{`
                :root {
                    --garamond: ${garamond.style.fontFamily};
                    --montserrat: ${montserrat.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </PlausibleProvider>
    )
}

export default App
