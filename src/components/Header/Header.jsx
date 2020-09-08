import React from 'react'
import styles from './Header.module.css'

const Header = () => {

    return (
        <div className={styles.header}>
            <img src="./images/logo.svg" alt="shortly-logo"/>
            <div className={styles.header__left}>
                <a className={styles.link} href="http://" target="_blank" rel="noopener noreferrer">Features</a>
                <a className={styles.link} href="http://" target="_blank" rel="noopener noreferrer">Pricing</a>
                <a className={styles.link} href="http://" target="_blank" rel="noopener noreferrer">Resources</a>
            </div>
            <div className={styles.header__right}>
                <a className={styles.link} href="http://" target="_blank" rel="noopener noreferrer">Login</a>
                <a className={styles.buttonPrimary} href="http://" target="_blank" rel="noopener noreferrer">Sign Up</a>               
            </div>
        </div>
    )
}

export default Header