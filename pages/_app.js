import PlausibleProvider from 'next-plausible'
import { EB_Garamond, Oswald } from '@next/font/google'

const garamond = EB_Garamond({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })

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
                    --oswald: ${oswald.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </PlausibleProvider>
    )
}

export default App
