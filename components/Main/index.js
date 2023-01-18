import classNames from 'classnames'

import styles from './index.module.css'

export default function Main({ className, ...rest }) {
    return (
        <main className={classNames(styles.main, className)} {...rest}>
            <h2>About</h2>
            <p>
                We are a family run custom cabinetry business serving Canada and
                the United States since 2002. Learning first hand in my early
                years, I was mentored by both my grandfather and my uncle in the
                craft of cabinetry. Through the years I&apos;ve continued to
                perfect those skills and with an added interest in period
                pieces, have studied traditional carving necessary to enhance
                certain styles. Creating one of a kind pieces of furniture is
                both a challenge and privileged. We are always looking forward
                to working with our clients to create that special piece
                whatever it might be.
            </p>
            <p>
                If you have been looking for a specific piece of furniture or
                can&apos;t find exactly what you need, we can customize your
                piece. Using a variety of local hardwoods or imported exotic
                woods, and offering various finishes we can customize your
                piece. Featuring quality workmanship at a reasonable price, we
                make your furniture to your specifications to suit your space.
            </p>
            <h2>Contact</h2>
        </main>
    )
}
