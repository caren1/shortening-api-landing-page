import React from 'react'
import styles from './StatCard.module.css'

const StatCard = ({ icon, title, subtitle }) => {

    return(
        <div className={styles.statCard}>
            <div className={styles.icon}>
                <img src={icon} alt="card-icon"/>
            </div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

export default StatCard