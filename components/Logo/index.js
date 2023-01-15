import styles from './index.module.css'
import Image from 'next/image'

import mapleLeaf from '../../public/maple-leaf.png'

export default function Logo({ tag = 'h1', className, ...rest }) {
    const Tag = `${tag}`
    return (
        <div className={className} {...rest}>
            <Tag className={styles.tag}>
                Handcrafted Furniture
                <span className={styles.subText}>
                    By Ken Roberts{' '}
                    <Image
                        priority
                        src={mapleLeaf}
                        width={38}
                        height={41}
                        aria-hidden={true}
                        focusable={false}
                    />
                </span>
            </Tag>
        </div>
    )
}
