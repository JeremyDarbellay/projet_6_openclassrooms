import styles from './Accordion.module.css'
import { ReactComponent as Arrow } from './arrow.svg'

import { useState } from 'react'

export default function Accordion({ title, content }) {

    const [ collapsed, setCollapsed ] = useState(false)

    function handleCollapsedClick() {

        setCollapsed(!collapsed)

    }

    return (
        <div>

            <button className={styles.button} onClick={handleCollapsedClick}>

                <div className={styles.title}>

                    <div>{title}</div>

                    { collapsed ? <Arrow className={`${styles.arrow} ${styles.collapsed}`}/> : <Arrow className={styles.arrow}/> }
                    
                </div>
                
            </ button>

            { collapsed ? <p className={styles.content}>{ content }</p> : null }

        </div>
    )
}