import styles from './Card.module.css'

/**
 * return a card with text at bottom
 * @property {string} title - the text at bottom
 * @property {string} image - the image url
 * 
 * @return {ReactComponent}
 */
export default function Card({ title, img }) {
    return (
        <article className={styles.card}>
            <img className={styles.cardImg} src={img} alt={title} />
            <div className={styles.cardMask}></div>
            <h3 className={styles.cardText}>{title}</h3>
        </article>
    )
}