import styles from './Slideshow.module.css'
import arrow from './arrow.svg'

import { useState } from 'react'

export default function Slideshow({ pictures, title}) {

    const [ index, setIndex ] = useState(0)

    let currentPicture = pictures[index]

    /**
     * change img src to next picture
     * change index state accordingly
     * @return {void}
     */
    function handleNextClick() {

        let nextIndex

        nextIndex = index + 1

        if (nextIndex > (pictures.length -1)) nextIndex = 0;

        currentPicture = pictures[nextIndex]

        setIndex(nextIndex)

    }

    /**
     * change img src to previous picture
     * change index state accordingly
     * @return {void}
     */
    function handlePreviousClick() {

        let nextIndex

        nextIndex = index - 1

        if (nextIndex < 0 ) nextIndex = (pictures.length - 1);

        currentPicture = pictures[nextIndex]

        setIndex(nextIndex)

        }

    return(
        <div className={styles.wrapper}>
            <img className={styles.img} src={currentPicture} alt={title}/>
            <button className={styles.previous} onClick={handlePreviousClick}>
                <img className={styles.arrow} src={arrow} alt="Précédent" />
            </button>
            <span className={styles.indicator}>{index + 1}/{pictures.length}</span>
            <button onClick={handleNextClick} className={styles.next}>
                <img className={styles.arrow} src={arrow} alt="Suivant" />
            </button>
        </div>
    )
}