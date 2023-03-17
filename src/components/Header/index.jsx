import logo from './logo.png'
import styles from './Header.module.css'

import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header id="header" className={styles.Header} data-testid="header">
            <img src={logo} alt="Logo de Kasa"></img>
            <nav id="navigation">
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/a-propos">A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
