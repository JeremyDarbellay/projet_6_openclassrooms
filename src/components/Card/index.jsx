import styles from './Card.module.css'

export default function Card({ title, img }) {
    return (
        <article className={styles.card}>
            <img className={styles.cardImg} src={img} alt={title} />
            <div className={styles.cardMask}></div>
            <h3 className={styles.cardText}>{title}</h3>
        </article>
    )
}