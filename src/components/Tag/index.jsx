import styles from './Tag.module.css'

/**
 * Return a styled span "tag"
 * @param {string} text the name
 */
export default function Tag({ text }) {
    return(<span className={styles.tag}>{text}</span>)
}