import React from 'react'
import styles from './Introduction.module.css'

const Introduction = () => {

    return(
        <div className={styles.introduction}>
            
                <h1>More than just shorter links</h1>
                <h2>Build your brand's recognition and get detailed insights on how your links are performing</h2>
                <a className={styles.buttonPrimary} href="http://" target="_blank" rel="noopener noreferrer">Get Started</a>
           
                <img src="./images/illustration-working.svg" alt="illustration-working"/>
            
        </div>
    )
}

export default Introduction