import styles from './Banner.module.css'

/**
 * return the banner with or without text
 * @property {string} image - the image url
 * @property {string} alt - the image alt
 * @property {[string]} text - the text in banner (optional)
 * 
 * @return {ReactComponent} 
 */
export default function Banner({ img, alt, text }) {

    // if there's a text, there's a heading, else we had a label to section !
    let label
    text ? label = null : label = "bannière"

    return (
        // if label is false, react don't add it.
        <section className={styles.banner} aria-label={label}>
            <img src={img} alt={alt} className={styles.bannerImg} />
            <div className={styles.bannerMask}></div>
            {text ? <h2 className={styles.bannerText} >{text}</h2> : null}
        </section>
    )
}