import React from 'react'
import Links from './Links/Links'

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
             <div className={styles.left}>
                 <img className={styles.left__logo} src="./images/logo.svg" alt="footer-logo"/>
             </div>
             <div className={styles.center}>
                 <Links title="Features" links={["Link Shortening", "Branded Links", "Analytics"]} />
                 <Links title="Resources" links={["Blog", "Developers", "Support"]} />
                 <Links title="Company" links={["About", "Our Team", "Careers", "Contact"]} />
            </div>
            <div className={styles.right}>
                <img className={styles.icon} src="./images/icon-facebook.svg" alt=""/>
                <img className={styles.icon} src="./images/icon-twitter.svg" alt=""/>
                <img className={styles.icon} src="./images/icon-pinterest.svg" alt=""/>
                <img className={styles.icon} src="./images/icon-instagram.svg" alt=""/>
            </div>
        </div>
    )
}

export default Footer