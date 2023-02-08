import Link from 'next/link'
import { usePlausible } from 'next-plausible'

import styles from './index.module.css'
import classNames from 'classnames'

export default function Main({ className, ...rest }) {
    const plausible = usePlausible()

    return (
        <main className={classNames(styles.main, className)} {...rest}>
            <section>
                <h2>About</h2>
                <p>
                    We are a family run custom cabinetry business serving Canada
                    and the United States since 2002. Learning first hand in my
                    early years, I was mentored by both my grandfather and my
                    uncle in the craft of cabinetry. Through the years I&apos;ve
                    continued to perfect those skills and with an added interest
                    in period pieces, have studied traditional carving necessary
                    to enhance certain styles. Creating one of a kind pieces of
                    furniture is both a challenge and privileged. We are always
                    looking forward to working with our clients to create that
                    special piece whatever it might be.
                </p>
                <p>
                    If you have been looking for a specific piece of furniture
                    or can&apos;t find exactly what you need, we can customize
                    your piece using a variety of local hardwoods or imported
                    exotic woods and various finishes. Featuring quality
                    workmanship, we will make your furniture to your
                    specifications to suit your space and decor.
                </p>
            </section>
            <section>
                <h2>Contact</h2>
                <p>
                    <Link
                        href={
                            'mailto:ken@handcraftedfurniture.ca?subject=Email%20Inquiry%20from%20Handcraftedfurniture.ca'
                        }
                        onClick={() => {
                            plausible('Email Button: Click')
                        }}
                    >
                        ken@handcraftedfurniture.ca
                    </Link>
                </p>
                <p>
                    <Link
                        href={'tel:15198723930'}
                        onClick={() => {
                            plausible('Telephone Button: Click')
                        }}
                    >
                        (519) 872-3930
                    </Link>
                </p>
                <ul
                    aria-label={
                        'A list of other websites and services that Handcrafted Furniture is active on, links will open new tabs or windows.'
                    }
                    className={styles.externalLinkList}
                >
                    <li>
                        <Link
                            href={'https://www.facebook.com/HCFurn'}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            alt={
                                'Connect with Handcrafted Furniture on Facebook'
                            }
                            className={styles.externalLink}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                                aria-hidden={true}
                                focusable={false}
                                className={styles.externalLinkSVGIcon}
                            >
                                <path
                                    fill={'currentColor'}
                                    d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'
                                />
                            </svg>
                            <span className={'sr-only'}>
                                Connect with Handcrafted Furniture on Facebook
                                in a new window
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'https://www.instagram.com/ker1948/'}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            alt={'Connect with Ken on Instagram'}
                            className={styles.externalLink}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 448 512'
                                aria-hidden={true}
                                focusable={false}
                                className={styles.externalLinkSVGIcon}
                            >
                                <path
                                    fill={'currentColor'}
                                    d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                                />
                            </svg>
                            <span className={'sr-only'}>
                                Connect with Ken on Instagram in a new window
                            </span>
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    )
}
