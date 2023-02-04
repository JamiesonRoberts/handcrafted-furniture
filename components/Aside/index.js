import classNames from 'classnames'

import styles from './index.module.css'
export default function Aside({ className, ...rest }) {
    return (
        <aside
            className={classNames(styles.aside, className)}
            {...rest}
        ></aside>
    )
}
