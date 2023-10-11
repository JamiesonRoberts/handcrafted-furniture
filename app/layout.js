import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'
import { EB_Garamond, Montserrat } from 'next/font/google'

import '@/components/_globals/globals.css'

const garamond = EB_Garamond({
    subsets: ['latin'],
    variable: '--font-garamond',
    display: 'swap',
})
const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
})

export const metadata = {
    metadataBase: new URL('https://handcraftedfurniture.ca/'),
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: '32x32' },
            { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    themeColor: '#F7F7F7',
}

export default function RootLayout({ children }) {
    return (
        <html
            lang='en-CA'
            className={`${garamond.variable} ${montserrat.variable}`}
        >
            <CloudflareWebAnalyticsProvider
                token={'e22e63ea108f408b97f8737f4914b164'}
            />
            <body>{children}</body>
        </html>
    )
}
