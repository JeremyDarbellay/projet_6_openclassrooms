import styles from './Slideshow.module.css'
import arrow from './arrow.svg'

import { useState } from 'react'

/**
 * return a slideshow
 * @property {string} image - the image url
 * @property {string} title - the alt of the image
 * 
 * @return {ReactComponent}
 */
export default function Slideshow({ pictures, alt }) {

    const [index, setIndex] = useState(0)

    const [animated, setAnimated] = useState(false)

    const animationInProgress = animated ? styles.animation : null

    let currentPicture = pictures[index]

    /**
     * change img src to next picture
     * change index state accordingly
     * display an animation between states
     * @return {void}
     */
    function handleNextClick() {

        setAnimated(true)

        let nextIndex

        nextIndex = index + 1

        if (nextIndex > (pictures.length - 1)) nextIndex = 0

        currentPicture = pictures[nextIndex]

        setTimeout(() => {

            setIndex(nextIndex)

            setAnimated(false)

        }, 500)

    }

    /**
     * change img src to previous picture
     * change index state accordingly
     * display an animation between states
     * @return {void}
     */
    function handlePreviousClick() {

        setAnimated(true)


        let nextIndex

        nextIndex = index - 1

        if (nextIndex < 0) nextIndex = (pictures.length - 1)

        currentPicture = pictures[nextIndex]


        setTimeout(() => {

            setIndex(nextIndex)

            setAnimated(false)

        }, 500)
    }

    return (
        <div className={styles.wrapper}>
            <img className={`${styles.img} ${animationInProgress}`} src={currentPicture} alt={alt} />
            {pictures.length === 1 ? null :
                <div>
                    <button className={styles.previous} onClick={handlePreviousClick}>
                        <img className={styles.arrow} src={arrow} alt="Précédent" />
                    </button>
                    <span className={styles.indicator}>{index + 1}/{pictures.length}</span>
                    <button onClick={handleNextClick} className={styles.next}>
                        <img className={styles.arrow} src={arrow} alt="Suivant" />
                    </button>
                </div>
            }
        </div>
    )
}