import logo from './footer-logo.png'
import styles from './Footer.module.css'

/**
 * return the footer
 * @return {ReactComponent}
 */
export default function Footer() {
    return (
        <footer id="footer" className={styles.Footer} data-testid="footer">
            <img src={logo} alt="logo de kasa en noir et blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}