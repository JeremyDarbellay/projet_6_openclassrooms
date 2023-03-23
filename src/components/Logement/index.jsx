import styles from './Logement.module.css'
import { Slideshow, Accordion, Tag } from '..'
import { ReactComponent as Star } from './star.svg'

import { useLoaderData } from 'react-router-dom'

export default function Logement() {


    let { apartment } = useLoaderData()

    /**
     * translate rating into number or throw an error
     * output an Array with 5 entries
     * each entry has a bool "full"
     * @param {string|number} rating the rate
     * @return {Array.bool} final rating
     */
    function formatRating(rating) {

        if (typeof (rating) == 'string') rating = parseInt(apartment.rating)
        else if (typeof (rating) == 'number') { }
        else throw new Response()

        let ratingList = []

        for (let total = 0; total < 5; total++) {

            rating--

            if (rating > 0) ratingList.push({ "full": true })
            else ratingList.push({ "full": false })

        }

        return ratingList
    }


    return (
        <main>
            <section>
                <Slideshow pictures={apartment.pictures} title={apartment.title} />
            </section>
            <section className={styles.mainSection}>
                <div className={styles.apartmentInfos}>
                    <h2 className={styles.title}>{apartment.title}</h2>
                    <p className={styles.subtitle}>{apartment.location}</p>
                    <div className={styles.tags}>
                        {
                            apartment.tags.map((tag, index) => (
                                <Tag key={index} tag={tag} />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.hostAndRate}>
                    <div className={styles.host}>
                        <div className={styles.hostName}>{apartment.host.name}</div>
                        <img className={styles.hostImg} src={apartment.host.picture} alt={apartment.host.name} />
                    </div>
                    <div>
                        {
                            formatRating(apartment.rating).map((star, index) =>
                                star.full ? <span aria-hidden="true" key={index.toString()} className={`${styles.star} ${styles.full}`}><Star /></span>
                                    : <span aria-hidden="true" key={index.toString()} className={`${styles.star} ${styles.empty}`}><Star /></span>
                            )
                        }
                        <span className={styles.hiddenRating}>Note : {apartment.rating} sur 5</span>
                    </div>
                </div>
            </section>
            <section className={styles.accordionsWrapper}>
                <Accordion title="Description" content={apartment.description} />
                <Accordion title="Équipements" content={apartment.equipments} />
            </section>
        </main>
    )
}