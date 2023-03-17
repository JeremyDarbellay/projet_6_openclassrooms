import styles from './Card.module.css'

export default function Card({ title, img }) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={img} alt={title} />
            <div className={styles.cardMask}></div>
            <p className={styles.cardText}>{title}</p>
        </div>
    )
}