import React from 'react'
import styles from './CallToAction.module.css'

const CallToAction = () => {

    return (
        <div className={styles.callToAction}>
            <h1>Boost your links today</h1>
            <a className={styles.buttonPrimary} href="http://" target="_blank" rel="noopener noreferrer">Get Started</a>
        </div>
    )
}

export default CallToAction