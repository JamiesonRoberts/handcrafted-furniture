import classNames from 'classnames'
import Flickity from 'react-flickity-component'

import styles from './index.module.css'
import Image from 'next/image'

const galleryContent = [
    {
        img: {
            src: '/gallery/image_1.jpg',
            alt: '',
            ratio: 768 / 1024,
            width: 600,
            height: 500,
        },
        caption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tincidunt dolor eu aliquam.',
    },
    {
        img: {
            src: '/gallery/image_2.jpg',
            alt: '',
            ratio: 730 / 954,
        },
        caption:
            'Ut ornare sit amet lorem in sagittis. Proin faucibus lacus nunc.',
    },
    {
        img: {
            src: '/gallery/image_3.jpg',
            alt: '',
            ratio: 1200 / 757,
        },
        caption:
            'Donec varius ligula vel metus sagittis, id efficitur magna pharetra.',
    },
    {
        img: {
            src: '/gallery/image_4.jpg',
            alt: '',
            ratio: 768 / 1024,
        },
        caption: 'Maecenas rhoncus urna eu efficitur lobortis.',
    },
    {
        img: {
            src: '/gallery/image_5.jpg',
            alt: '',
            ratio: 677 / 994,
        },
        caption:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque maximus ante a risus finibus sollicitudin.',
    },
    {
        img: {
            src: '/gallery/image_6.jpg',
            alt: '',
            ratio: 1024 / 768,
        },
        caption: 'Etiam efficitur facilisis nisi eget vestibulum.',
    },
    {
        img: {
            src: '/gallery/image_7.jpg',
            alt: '',
            ratio: 1006 / 500,
        },
        caption: 'Maecenas venenatis pellentesque consequat.',
    },
    {
        img: {
            src: '/gallery/image_9.jpg',
            alt: '',
            ratio: 388 / 550,
        },
        caption:
            'Praesent rutrum, libero nec tempus tincidunt, lacus velit sollicitudin enim, nec consequat enim diam nec lorem.',
    },
]

export default function Aside({ className, ...rest }) {
    return (
        <aside className={classNames(styles.aside, className)} {...rest}>
            <Flickity
                className={styles.gallery}
                options={{
                    pageDots: true,
                    cellAlign: 'left',
                    contain: true,
                    adaptiveHeight: true,
                    arrowShape: {
                        x0: 10,
                        x1: 60,
                        y1: 50,
                        x2: 70,
                        y2: 40,
                        x3: 30,
                    },
                }}
            >
                {galleryContent.map((content, i) => {
                    let width = 600
                    let height = 600 * content.img.ratio
                    if (content.img.ratio >= 1) {
                        height = 600
                        width = 600 * content.img.ratio
                    }

                    let paddingBottom = content.img.ratio * 100
                    if (paddingBottom >= 140) paddingBottom = 140

                    return (
                        <figure
                            key={i}
                            className={styles.slide}
                            data-ratio={content.img.ratio}
                        >
                            <div
                                className={styles.image}
                                style={{
                                    paddingBottom: `${paddingBottom}%`,
                                }}
                            >
                                <Image
                                    src={content.img.src}
                                    alt={content.img.alt}
                                    width={width}
                                    height={height}
                                    priority={i === 0 ? true : false}
                                    sizes='(min-width: 75rem) 50vw, 90vw'
                                />
                            </div>
                            <figcaption>{content.caption}</figcaption>
                        </figure>
                    )
                })}
            </Flickity>
        </aside>
    )
}
