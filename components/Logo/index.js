import Image from 'next/image'
import classNames from 'classnames'

import styles from './index.module.css'

import mapleLeaf from '../../public/maple-leaf.png'

export default function Logo({ tag = 'h1', className, ...rest }) {
    const Tag = `${tag}`
    return (
        <Tag className={classNames(className, styles.tag)} {...rest}>
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
                    className={styles.icon}
                    alt={'A maple leaf'}
                />
            </span>
        </Tag>
    )
}
