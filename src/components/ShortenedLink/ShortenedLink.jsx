import React, { useState } from 'react'
import styles from './ShortenedLink.module.css'
import copy from 'copy-to-clipboard'



const ShortenedLink = ({ sourceLink, shortLink }) => {

    const [ isCopied, setIsCopied ] = useState(false)

    const copyLink = (url) => {
        copy(url);
        setTimeout(() => {
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 5000);
        }, 100);
    }


    return (
        <div className={styles.shortenedLink}>
            <p>{sourceLink}</p>
            <hr className={styles.shortenedLink__hr}/>
            <a  className={styles.shortLink} href="http://">{shortLink}</a>
            <button className={styles.buttonPrimary} href="http://" target="_blank" rel="noopener noreferrer" onClick={() => copyLink(shortLink)}>{isCopied ? 'Copied!' : 'Copy'}</button>               
        </div>
    )
}

export default ShortenedLink