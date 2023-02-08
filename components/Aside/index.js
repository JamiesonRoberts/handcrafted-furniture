import classNames from 'classnames'
import Flickity from 'react-flickity-component'

import styles from './index.module.css'
import Image from 'next/image'

const galleryContent = [
    {
        img: {
            src: '/gallery/stake-truck.jpg',
            ratio: 768 / 1024,
        },
        caption: 'Stake Truck of various hardwoods',
    },
    {
        img: {
            src: '/gallery/red-oak-buffet-hutch.jpg',
            ratio: 730 / 954,
        },
        caption: 'Red Oak Buffet & Hutch',
    },
    {
        img: {
            src: '/gallery/lutyen-bench.jpg',
            ratio: 1000 / 546,
        },
        caption: 'Lutyen Bench in White Oak',
    },
    {
        img: {
            src: '/gallery/chair-step-ladder.jpg',
            ratio: 1200 / 757,
        },
        caption: 'Chair / Step Ladder in Oak',
    },
    {
        img: {
            src: '/gallery/serving-tray-cutting-board.jpg',
            ratio: 768 / 1024,
        },
        caption:
            'Serving Tray & Cutting Board - Hard Maple / Black Walnut Butterfly Joints',
    },
    {
        img: {
            src: '/gallery/patio-table.jpg',
            ratio: 677 / 994,
        },
        caption: 'White Oak Patio Table with Extension Leaf',
    },
    {
        img: {
            src: '/gallery/cherry-night-table.jpg',
            ratio: 1024 / 768,
        },
        caption: 'Cherry Night Table with Aromatic Cedar Drawer & Interior',
    },
    {
        img: {
            src: '/gallery/bent-wood-music-stand.jpg',
            ratio: 1006 / 500,
        },
        caption: 'Bent Wood Music Stand in White Oak',
    },
    {
        img: {
            src: '/gallery/chest-of-drawers.jpg',
            ratio: 388 / 550,
        },
        caption: 'Contemporary Chest of Drawers in Ash with Onyx stain',
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
                    return (
                        <figure
                            key={i}
                            className={styles.slide}
                            data-ratio={content.img.ratio}
                        >
                            <div className={styles.imageHolder}>
                                <Image
                                    className={styles.image}
                                    src={content.img.src}
                                    width={600}
                                    height={600 * content.img.ratio}
                                    priority={i === 0 ? true : false}
                                    sizes='(min-width: 75rem) 50vw, 90vw'
                                    alt={content.caption}
                                    aria-labelledby={`image-description-${i}`}
                                />
                            </div>
                            <figcaption
                                id={`image-description-${i}`}
                                className={styles.caption}
                            >
                                {content.caption}
                            </figcaption>
                        </figure>
                    )
                })}
            </Flickity>
        </aside>
    )
}
