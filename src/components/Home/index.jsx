import styles from './Home.module.css'
import { Banner, Card } from '..'
import bannerImg from './home-banner.png'

import { useLoaderData, Link } from 'react-router-dom'

/**
 * return home page
 * at "/" path
 * @return {ReactComponent}
 */
export default function Home() {

    const { apartments } = useLoaderData()

    return (
        <div className={styles.home}>
            <div className={styles.bannerWrapper}>
                <Banner img={bannerImg} alt="des vagues frappant des falaises" text="Chez vous, partout et ailleurs" />
            </div>
            <section className={styles.cardContainer} aria-label="Logements">
                {
                    apartments.map((apartment) => (
                        <Link key={apartment.id} className={styles.cardLink} to={`/logement/${apartment.id}`}>
                            <Card img={apartment.cover} title={apartment.title} />
                        </Link>
                    ))
                }
            </section>
        </div>
    )
}