import React from 'react'
import styles from './Shortener.module.css'
import ShortenedLink from './ShortenedLink/ShortenedLink'

const Shortener = () => {
    return(
    <div className={styles.shortener}>
        <form action="">
            <input type="text" placeholder="Shorten a link here..."/>
            <button className={styles.buttonPrimary} type="submit">Shorten It!</button>
        </form>
        
        {/* <ShortenedLink sourceLink="www.wp.pl" shortLink="https://zxc.ink/k4kyka"/> */}
    </div>
    )
}

export default Shortener