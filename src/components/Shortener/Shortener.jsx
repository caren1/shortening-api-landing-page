import React from 'react'
import styles from './Shortener.module.css'

const Shortener = () => {
    return(
    <div className={styles.shortener}>
        <input type="text" placeholder="Shorten a link here..."/>
        <button className={styles.buttonPrimary} type="submit">Shorten It!</button>
    </div>
    )
}

export default Shortener