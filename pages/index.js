import Head from 'next/head'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import Aside from '@/components/Aside'

export default function Home() {
    return (
        <>
            <Head>
                <title>Handcrafted Furniture by Ken Roberts</title>
                <meta
                    name='description'
                    content='Handcrafted Furniture by Ken Roberts. Handcrafted and Custom designed wooden Furniture for interior and garden. Designed and built for your home decor.'
                />

                <link rel='canonical' href='https://handcraftedfurniture.ca' />
            </Head>
            <div className={'layout'}>
                <Header style={{ gridArea: 'header' }} />
                <Aside style={{ gridArea: 'aside' }} />
                <Main style={{ gridArea: 'main' }} />
                <Footer style={{ gridArea: 'footer' }} />
            </div>
            <StructuredData />
        </>
    )
}
