import Link from 'next/link'

export const metadata = {
    title: 'Whoops, something went wrong.',
}

export default function NotFound() {
    return (
        <div
            style={{
                minHeight: 'calc(100vh - 3rem)',
                width: 'calc(100vw - 3rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
            }}
        >
            <h1>404 - Page Not Found</h1>
            <Link href={'/'}>Return back to the main page</Link>
        </div>
    )
}
