import styles from './Banner.module.css'

export default function Banner({ img, alt, text }) {
    return (
        <section aria-label="Bannière" className={styles.banner}>
            <img src={img} alt={alt} className={styles.bannerImg} />
            <div className={styles.bannerMask}></div>
            { text ? <div className={styles.bannerText} >{text}</div> : null }
        </section>
    )
}