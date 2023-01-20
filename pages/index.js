import Head from 'next/head'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />

                <title>Handcrafted Furniture by Ken Roberts</title>
                <meta
                    name='description'
                    content='Handcrafted Furniture by Ken Roberts. Handcrafted and Custom designed wooden Furniture for interior and garden. Designed and built for your home decor.'
                />

                <link
                    rel='icon'
                    href='https://handcraftedfurniture.ca/favicon.ico'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='https://handcraftedfurniture.ca/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='https://handcraftedfurniture.ca/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='https://handcraftedfurniture.ca/favicon-16x16.png'
                />
                <link
                    rel='manifest'
                    href='https://handcraftedfurniture.ca/site.webmanifest'
                />
                <link
                    rel='mask-icon'
                    href='https://handcraftedfurniture.ca/safari-pinned-tab.svg'
                    color='#1c1c1b'
                />
                <meta name='msapplication-TileColor' content='#1c1c1b' />
                <meta
                    name='theme-color'
                    content='#F7F7F7'
                    media='(prefers-color-scheme: light)'
                />
                <meta
                    name='theme-color'
                    content='#1C1C1B'
                    media='(prefers-color-scheme: dark)'
                />
            </Head>
            <div className={'layout'}>
                <Header style={{ gridArea: 'header' }} />
                <aside></aside>
                <Main style={{ gridArea: 'main' }} />
                <Footer style={{ gridArea: 'footer' }} />
            </div>
        </>
    )
}
