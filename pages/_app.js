import Head from 'next/head'
import PlausibleProvider from 'next-plausible'
import { EB_Garamond, Montserrat } from "next/font/google"

const garamond = EB_Garamond({ subsets: ['latin'] })
const montserrat = Montserrat({ weight: '400', subsets: ['latin'] })

import '@/styles/globals.css'
import '@/styles/flickity.css'

const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider
            domain='handcraftedfurniture.ca'
            trackOutboundLinks={true}
        >
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#1c1c1b'
                />
                <meta name='msapplication-TileColor' content='#1c1c1b' />
                <meta name='theme-color' content='#F7F7F7' />
            </Head>
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
