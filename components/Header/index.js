import Logo from '../Logo'

import styles from './index.module.css'

export default function Header({ ...rest }) {
    return (
        <header {...rest}>
            <div className={styles.logo}>
                <Logo tag={'h1'} />
            </div>
            <p>
                Custom pieces of furniture are a statement of personal taste and
                interior design. On this page, you can see a small example of
                previous pieces that have been designed for clients.
            </p>
        </header>
    )
}
