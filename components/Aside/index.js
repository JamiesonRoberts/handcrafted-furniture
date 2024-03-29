'use client'

import Image from 'next/image'

import styles from './index.module.css'
import { useState } from 'react'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import stakeTruck from '@/public/gallery/stake-truck.jpg'
import redOakBuffet from '@/public/gallery/red-oak-buffet-hutch.jpg'
import lutyenBench from '@/public/gallery/lutyen-bench-v2.jpg'
import chairStepLadder from '@/public/gallery/chair-step-ladder.jpg'
import servingTray from '@/public/gallery/serving-tray-cutting-board.jpg'
import patioTable from '@/public/gallery/patio-table.jpg'
import cherryNightTable from '@/public/gallery/cherry-night-table.jpg'
import musicStand from '@/public/gallery/bent-wood-music-stand.jpg'
import chestOfDrawers from '@/public/gallery/chest-of-drawers.jpg'

const galleryContent = [
  {
    src: stakeTruck,
    caption: 'Stake Truck of various hardwoods',
  },
  {
    src: redOakBuffet,
    caption: 'Red Oak Buffet & Hutch',
  },
  {
    src: lutyenBench,
    caption: 'Lutyen Bench in White Oak',
  },
  {
    src: chairStepLadder,
    caption: 'Chair / Step Ladder in Oak',
  },
  {
    src: servingTray,
    caption:
      'Serving Tray & Cutting Board - Hard Maple / Black Walnut Butterfly Joints',
  },
  {
    src: patioTable,
    caption: 'White Oak Patio Table with Extension Leaf',
  },
  {
    src: cherryNightTable,
    caption: 'Cherry Night Table with Aromatic Cedar Drawer & Interior',
  },
  {
    src: musicStand,
    caption: 'Bent Wood Music Stand in White Oak',
  },
  {
    src: chestOfDrawers,
    caption: 'Contemporary Chest of Drawers in Ash with Onyx stain',
  },
]

export default function Aside() {
  const [activeDot, setActiveDot] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setActiveDot(slider.track.details.rel)
      }
    },
  )

  return (
    <>
      <div
        className={`${styles.gallery} keen-slider`}
        ref={sliderRef}
      >
        {galleryContent.map((content, i) => {
          return (
            <figure key={i} className={`${styles.slide} keen-slider__slide`}>
              <div className={styles.imageHolder}>
                <Image
                  className={styles.image}
                  src={content.src}
                  priority={i === 0}
                  sizes='(min-width: 75rem) 50vw, (min-width: 37.5rem) 75vw, 90vw'
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
      <ol className={styles.pageDots}>
        {[...Array(galleryContent.length)].map((content, i) => {
          const attributes = {
            'aria-label': `Page dot ${i + 1}`,
          }
          if (activeDot === i) {
            attributes['aria-current'] = 'step'
          }
          return (
            <li
              key={i}
              className={`${styles.dot} ${
                activeDot === i ? styles.selected : ''
              }`}
              onClick={() => {
                instanceRef.current?.moveToIdx(i)
              }}
              {...attributes}
            ></li>
          )
        })}
      </ol>
    </>
  )
}
