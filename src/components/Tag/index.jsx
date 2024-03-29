import styles from './Tag.module.css'

/**
 * Return a styled span "tag"
 * @property {string} tag - the text
 * 
 * @return {ReactComponent}
 */
export default function Tag({ tag }) {
    return (
        <span className={styles.tag}>{tag}</span>
    )
}