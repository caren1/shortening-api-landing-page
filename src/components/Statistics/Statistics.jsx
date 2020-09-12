import React from 'react'
import StatCard from './StatCard/StatCard'
import Shortener from '../Shortener/Shortener'
import ShortenedLink from '../ShortenedLink/ShortenedLink'

import styles from './Statistics.module.css'

const Statistics = () => {

    return (
    
        <div className={styles.statistics}>
            
             <Shortener />

             <ShortenedLink sourceLink="www.wp.pl" shortLink="https://zxc.ink/k4kyka"/>

             
            <h1>Advanced Statistics</h1>
            <h2>Track how your links are performing across the web with our advanced statistics dashboard</h2>
            
            <div className={styles.statistics__cards}>
                
                <StatCard icon={`./images/icon-brand-recognition.svg`} title={`Brand recognition`} subtitle={`Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content`}/>
                <StatCard icon={`./images/icon-detailed-records.svg`} title={`Detailed Records`} subtitle={`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`}/>
                <StatCard icon={`./images/icon-fully-customizable.svg`} title={`Fully customizable`} subtitle={`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`}/>
            </div>         
            <hr/>  
        </div>
       

    )
}

export default Statistics

