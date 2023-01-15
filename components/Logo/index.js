import styles from './index.module.css'
import Image from 'next/image'

import mapleLeaf from '../../public/maple-leaf.png'

export default function Logo() {
    return (
        <span className={styles.mainText}>
            Handcrafted Furniture
            <span className={styles.subText}>By Ken Roberts</span>
            <Image
                priority
                src={mapleLeaf}
                className={styles.icon}
                width={38}
                height={41}
            />
        </span>
    )
}
