import styles from './App.module.css'
import { Header, Footer } from '..'

import { Outlet } from 'react-router-dom'

import React from 'react'

/**
 * Return page
 * with header and footer
 * @return {ReactComponent}
 */
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}
