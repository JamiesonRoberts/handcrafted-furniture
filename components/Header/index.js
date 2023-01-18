import classNames from 'classnames'

import Logo from '../Logo'

import styles from './index.module.css'

export default function Footer({ className, ...rest }) {
    return (
        <header className={classNames(className)} {...rest}>
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
