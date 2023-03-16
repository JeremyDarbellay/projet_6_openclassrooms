import logo from './LOGO.png'

import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo de Kasa"></img>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/a-propos">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
