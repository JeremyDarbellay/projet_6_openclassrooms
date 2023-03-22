import styles from './Logement.module.css'
import { Slideshow, Accordion, Tag } from '..'

import { useLoaderData } from 'react-router-dom'

export default function Logement() {


    let { apartment } = useLoaderData()

    /**
     * take rating (int)
     * output an html string
     * @param {int} rating the rating
     * @return {string} the html formatted string
     */
    function formatRating(rating) {

        return rating
    }


    return (
        <main>
            <section>
                <Slideshow pictures={apartment.picture}/>
            </section>
            <section>
                <div>
                    <h2>{ apartment.title }</h2>
                    <h3>{ apartment.location }</h3>
                    {
                        apartment.tags.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))
                    }
                </div>
                <div>
                    <div>
                        <div>{ apartment.host.name }</div>
                        <img src={ apartment.host.picture } alt={apartment.host.name} />
                    </div>
                    <div>{ formatRating(apartment.rating) }</div>
                </div>
            </section>
            <section>
                <Accordion title="description" content={apartment.description} />
                <Accordion title="Équipements" content={apartment.equipments} />
            </section>
        </main>
    )
}