import styles from './Accordion.module.css'
import { ReactComponent as Arrow } from './arrow.svg'

import { useState, useId } from 'react'

/**
 * @property {string} title - the title to click
 * @property {array|string} content - the expanded content
 * 
 * @return {ReactComponent}
 */
export default function Accordion({ title, content }) {

    // general id for accessibility concerns

    const id = useId()

    // if content isn't an array, create an array from it
    content = Array.isArray(content) ? content : [content]

    const [expanded, setExpanded] = useState(false)

    const [animation, setAnimation] = useState(false)

    const animationInProgress = animation ? styles.animation : styles.animationReverse

    function handleExpandedClick() {

        if (!expanded) {
            setAnimation(true)
            setExpanded(!expanded)
        }

        else {
            setAnimation(false)
            setTimeout(setExpanded, 250, !expanded)
        }

    }

    return (
        <div className={styles.wrapper}>

            <button 
                className={styles.button} 
                onClick={handleExpandedClick} 
                aria-expanded={expanded.toString()} aria-controls={`content-${id}`}
                id={`accordion-${id}`}
                aria-label={title}>

                <span className={styles.title}>

                    <span>{title}</span>

                    {
                        expanded ? 
                            <Arrow className={`${styles.arrow} ${styles.expanded}`} /> 
                            : <Arrow className={styles.arrow} />
                    }

                </span>

            </ button>

            {
                expanded ? 
                    <div 
                        role="region"
                        aria-labelledby={`accordion-${id}`}
                        className={`${styles.content} ${animationInProgress}`} 
                        id={`content-${id}`}
                    >
                        {content.map((node, index) => <p key={index.toString()}>{node}</p>)}
                    </div> 
                    : null
            }

        </div>
    )
}