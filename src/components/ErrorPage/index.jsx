import React from "react"
import { Link } from "react-router-dom"

import { Header, Footer } from '..'
import styles from './ErrorPage.module.css'

export default function ErrorPage() {
    return (
        <React.Fragment>
            <Header />
            <div className={styles.error}>
                <h2 className={styles.bigText}>404</h2>
                <div>Oups! La page que vous avez demandé n'existe pas.</div>
                <Link to="/">Retournez sur la page d'accueil</Link>
            </div>
            <Footer />
        </React.Fragment>
    )
}