import styles from './App.module.css'
import { Header, Footer } from '..'

import { Outlet } from 'react-router-dom'

import React from 'react'

/**
 * Return page from url
 */
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  )
}
