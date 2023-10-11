import Logo from "@/components/Logo";
import StructuredData from '@/components/StructuredData'

import styles from './layout.module.css'
export default function Layout({ children }) {
    return (
        <>
            <div className={styles.layout}>
                <header style={{ gridArea: 'header' }}>
                    <div className={styles.logo}>
                        <Logo tag={'h1'} />
                    </div>
                    <p>
                        Custom pieces of furniture are a statement of personal taste and
                        interior design. On this page, you can see a small example of
                        previous pieces that have been designed for clients.
                    </p>
                </header>
                {children}
                <footer className={styles.footer} style={{ gridArea: 'footer' }}>
                    <p>&copy;2023 Handcrafted Furniture by Ken Roberts</p>
                </footer>
            </div>
            <StructuredData />
        </>
    )
}
