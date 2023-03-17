import logo from './footer-logo.png'
import styles from './Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.Footer}>
            <img src={logo} alt="logo de kasa en noir et blanc" />
            <p>© 2020 Kasa. All rights reserved</p> 
        </footer>
    )
}