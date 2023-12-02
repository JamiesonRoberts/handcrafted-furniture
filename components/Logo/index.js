import Image from 'next/image'

import styles from './index.module.css'

import mapleLeaf from '@/public/maple-leaf.png'

export default function Logo({ tag = 'h1', ...rest }) {
  const Tag = `${tag}`
  return (
    <Tag className={styles.tag} {...rest}>
      Handcrafted Furniture
      <span className={styles.subText}>
        By Ken Roberts{' '}
        <Image
          src={mapleLeaf}
          aria-hidden={true}
          focusable={false}
          className={styles.icon}
          alt={'A maple leaf'}
        />
      </span>
    </Tag>
  )
}
