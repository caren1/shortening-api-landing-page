import React from 'react'
import styles from './Shortener.module.css'



const Shortener = ({ handleShortenIt, handleInputChange, userUrl }) => {
    return(
    <div className={styles.shortener}>
        <form onSubmit={handleShortenIt}>
            <input value={userUrl} onChange={handleInputChange} type="url" placeholder="Shorten a link here..."/>
            <button className={styles.buttonPrimary} type="submit">Shorten It!</button>
        </form>
    </div>
    )
}

export default Shortener