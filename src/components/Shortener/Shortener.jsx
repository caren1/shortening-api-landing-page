import React from 'react'
import styles from './Shortener.module.css'


const Shortener = ({ handleShortenIt, handleInputChange }) => {
    return(
    <div className={styles.shortener}>
        <form onSubmit={handleShortenIt}>
            <input onChange={handleInputChange}  type="text" placeholder="Shorten a link here..."/>
            <button className={styles.buttonPrimary} type="submit">Shorten It!</button>
        </form>
                
    </div>
    )
}

export default Shortener