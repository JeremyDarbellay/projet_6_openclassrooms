import styles from './Accordion.module.css'
import { ReactComponent as Arrow } from './arrow.svg'

export default function Accordion({ title, content}) {
    return (
        <button className={styles.expanded}>
            <div className={styles.title}>
                <div>{title}</div>
                <Arrow className={styles.arrow }/>
            </div>
            <p className={styles.content}>{content}</p>
        </button>
    )
}