import React from 'react'
import styles from './Links.module.css'

const Links = ({ title,  links}) => {
    return (
        <div className={styles.links}>
            <h2>{title}</h2>
            <ul>
                {links.map((link) => 
                    <li key={link}><a href="#" target="_blank" rel="noopener noreferrer">{link}</a></li>
                )}
            </ul>
        </div>
    )
}

export default Links