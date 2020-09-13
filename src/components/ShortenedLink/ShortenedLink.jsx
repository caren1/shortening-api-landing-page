import React from 'react'
import styles from './ShortenedLink.module.css'

const ShortenedLink = ({ sourceLink, shortLink }) => {

    return (
        <div className={styles.shortenedLink}>
            <p>{sourceLink}</p>
            <a  className={styles.shortLink} href="http://">{shortLink}</a>
            <a className={styles.buttonPrimary} href="http://" target="_blank" rel="noopener noreferrer">Copy</a>               
        </div>
    )
}

export default ShortenedLink