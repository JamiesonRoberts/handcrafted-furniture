import Head from 'next/head'
import Link from 'next/link'

import Logo from '../components/Logo'

const layoutStyles = {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
}

export default function Home() {
    return (
        <>
            <Head>
                <title>404 - Page not found</title>
            </Head>

            <main style={layoutStyles}>
                <Logo tag={'div'} />
                <h1>404 - Page Not Found</h1>
                <Link href={'/'}>Return back to the main page</Link>
            </main>
        </>
    )
}
