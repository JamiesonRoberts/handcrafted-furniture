import classNames from 'classnames'

import styles from './index.module.css'

export default function Footer({ className, ...rest }) {
    return (
        <footer className={classNames(styles.footer, className)} {...rest}>
            <p>Copyright &copy; 2023 Handcrafted Furniture.</p>
        </footer>
    )
}
