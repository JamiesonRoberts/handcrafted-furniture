'use client'

import Link from 'next/link'

export default function Error() {
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
            <h1>Whoops - Something didn&apos;t quite go right there</h1>
            <Link href='/'>Return back to the main page</Link>
        </div>
    )
}
