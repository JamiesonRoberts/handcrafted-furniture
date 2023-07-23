import { useState } from 'react'
import Image from 'next/image'

import classNames from 'classnames'
import { useKeenSlider } from 'keen-slider/react'

import styles from './index.module.css'

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
            src: '/gallery/lutyen-bench-v2.jpg',
            ratio: 1350 / 1080,
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
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        selector: `.${styles.slide}`,
        draggable: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <aside className={classNames(styles.aside, className)} {...rest}>
            <div ref={sliderRef} className={styles.gallery}>
                {galleryContent.map((content, i) => {
                    return (
                        <figure key={i} className={styles.slide}>
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
            </div>
            {loaded && instanceRef.current && (
                <div className={styles.dots}>
                    <button
                        onClick={(e) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                        className={styles.arrow}
                        aria-hidden='true'
                        tabIndex='-1'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
                        </svg>
                    </button>
                    {[
                        ...Array(
                            instanceRef.current.track.details.slides.length,
                        ).keys(),
                    ].map((idx) => {
                        return (
                            <span
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={classNames(
                                    styles.dot,
                                    currentSlide === idx ? styles.active : '',
                                )}
                                aria-hidden='true'
                                tabIndex='-1'
                            ></span>
                        )
                    })}
                    <button
                        onClick={(e) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                        className={styles.arrow}
                        aria-hidden='true'
                        tabIndex='-1'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
                        </svg>
                    </button>
                </div>
            )}
        </aside>
    )
}
