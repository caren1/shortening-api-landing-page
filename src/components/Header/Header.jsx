import React, { useState } from 'react'
import Media from 'react-media'
import HamburgerMenu from 'react-hamburger-menu';
import styles from './Header.module.css'

const Header = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const mql = window.matchMedia('(min-width: 700px)');
    mql.addEventListener('change', (event) => {
        const desktopView = event.matches;
        if (desktopView) {
            setIsOpen(false)
        }
    })


    return (
        <>
        <Media query="(min-width:700px)" render={() => (
            <div className={styles.header}>
                <img src="./images/logo.svg" alt="shortly-logo"/>
                <div className={styles.header__left}>
                    <a className={styles.link} href="http://" target="_blank" rel="noopener noreferrer">Features</a>
                    <a className={styles.link} href="http://" target="_blank" rel="noopener noreferrer">Pricing</a>
                    <a className={styles.link} href="http://" target="_blank" rel="noopener noreferrer">Resources</a>
                </div>
                <div className={styles.header__right}>
                    <a className={styles.link} href="http://" target="_blank" rel="noopener noreferrer">Login</a>
                    <a className={styles.buttonPrimary} href="http://" target="_blank" rel="noopener noreferrer">Sign Up</a>               
                </div>
            </div>
        )}/>
        <Media query="(max-width:700px)" render={() => (
            <div className={styles.headerMobile}>
            <img src="./images/logo.svg" alt="shortly-logo"/>
            <HamburgerMenu className="hamburger" isOpen={isOpen}
                menuClicked={() => handleClick()}
                width={25}
                height={20}
                strokeWidth={2}
                rotate={0}
                color='hsl(257, 7%, 63%)'
                borderRadius={0}
                animationDuration={0.5}
            />

            { !isOpen ? null : (
            <div className={styles.headerMobileOverlay}>
                <a className={styles.mobileLink} href="http://" target="_blank" rel="noopener noreferrer">Features</a>
                <a className={styles.mobileLink} href="http://" target="_blank" rel="noopener noreferrer">Pricing</a>
                <a className={styles.mobileLink} href="http://" target="_blank" rel="noopener noreferrer">Resources</a>
                <hr className={styles.mobileHr}/>
                <a className={styles.mobileLink} href="http://" target="_blank" rel="noopener noreferrer">Login</a>
                <a className={styles.mobileLinkButtonPrimary} href="http://" target="_blank" rel="noopener noreferrer">Sign Up</a>               
            </div>
            )}  
            </div>
        ) }/>
        </>
    )
}

export default Header