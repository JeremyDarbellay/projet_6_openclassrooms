import styles from './Home.module.css'
import { Banner, Card } from '..'
import bannerImg from './home-banner.png'

import { useLoaderData, Link } from 'react-router-dom'

export default function Home() {

    const { apartments } = useLoaderData()

    return (
        <div className={styles.home}>
            <Banner img={bannerImg} alt="des vagues frappant des falaises" text="Chez vous, partout et ailleurs" />
            <div className={styles.cardContainer}>
                {
                    apartments.map((apartment) => (
                        <Link key={apartment.id} className={styles.cardLink} o={`/logement/${apartment.id}`}>
                            <Card img={apartment.cover} title={apartment.title} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}