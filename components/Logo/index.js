import classnames from 'classnames';
import { EB_Garamond } from '@next/font/google'
import styles from './index.module.css'

const garamond = EB_Garamond({ subsets: ['latin'] })

export default function Logo() {
    return (
        <span className={classnames(garamond.className, styles.mainText)}>
            Handcrafted Furniture
            <span className={styles.subText}>By Ken Roberts</span>
        </span>
    )
}
