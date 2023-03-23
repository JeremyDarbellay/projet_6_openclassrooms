import styles from './Accordion.module.css'
import { ReactComponent as Arrow } from './arrow.svg'

import { useState } from 'react'

/**
 * @property {string} title - the title to click
 * @property {array|string} content - the collapsed content
 * 
 * @return {ReactComponent}
 */
export default function Accordion({ title, content }) {

    // if content isn't an array, create an array from it
    content = Array.isArray(content) ? content : [content]

    const [ collapsed, setCollapsed ] = useState(false)

    const [ animation, setAnimation ] = useState(false)

    const animationInProgress = animation ? styles.animation : styles.animationReverse;

    function handleCollapsedClick() {

        if (!collapsed)  {
            setAnimation(true)
            setCollapsed(!collapsed)
        } 

        else {
            setAnimation(false)
            setTimeout( setCollapsed, 250, !collapsed)
        }

    }

    return (
        <div className={styles.wrapper}>

            <button className={styles.button} onClick={handleCollapsedClick}>

                <div className={styles.title}>

                    <div>{title}</div>

                    { collapsed ? <Arrow className={`${styles.arrow} ${styles.collapsed}`}/> : <Arrow className={styles.arrow}/> }
                    
                </div>
                
            </ button>

            { collapsed ? <div className={`${styles.content} ${animationInProgress}`}>{ content.map( (node, index) => <p key={index.toString()}>{node}</p>) }</div> : null }

        </div>
    )
}