import Head from 'next/head'
import Logo from "../components/Logo";

export default function Home() {
    return (
        <>
            <Head>
                <title>Handcrafted Furniture by Ken Roberts</title>
                <meta name="description"
                      content="Handcrafted Furniture by Ken Roberts. Handcrafted and Custom designed wooden Furniture for interior and garden. Designed and built for your home decor."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <h1><Logo/></h1>
            </main>
        </>
    )
}
