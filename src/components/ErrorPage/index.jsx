import React from "react"
import { Link } from "react-router-dom"

import { Header, Footer } from '..'
import styles from './ErrorPage.module.css'

import svg from './error.svg'

export default function ErrorPage() {
    return (
        <React.Fragment>
            <Header />
            <main className={styles.error}>
                
                <h2 className={styles.container}>
                    <img src={svg} alt="404" className={styles.img}></img>
                </h2>
                <div className={styles.detail}>Oups! La page que vous avez demandé n'existe pas.</div>
                <Link className={styles.link} to="/">Retournez sur la page d'accueil</Link>
            </main>
            <Footer />
        </React.Fragment>
    )
}