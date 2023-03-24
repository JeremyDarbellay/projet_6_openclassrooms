import styles from './About.module.css'
import { Banner, Accordion } from '..'
import bannerImg from './about-banner.png'
import accordions from './accordions.json'


/**
 * return about page
 * @return {ReactComponent}
 */
export default function About() {

    return (
        <div className={styles.aboutPage}>
            <div className={styles.bannerWrapper}>
                <Banner img={bannerImg} alt="Un paysage naturel avec des montagnes des forêts et un cours d'eau le traversant" />
            </div>
            <section className={styles.accordionWrapper} aria-label="à-propos">
                {
                    accordions.map((accordion) => (
                        <Accordion
                            title={accordion.title}
                            content={accordion.content}
                            key={accordion.id}
                        />
                    ))
                }
            </section>
        </div>
    )
}