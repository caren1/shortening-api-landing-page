import React, { useState } from 'react'
import StatCard from './StatCard/StatCard'
import Shortener from '../Shortener/Shortener'
import ShortenedLink from '../ShortenedLink/ShortenedLink'


import styles from './Statistics.module.css'

import { shortenLink2 } from '../../api/index'

const Statistics = () => {

    const [ shortenedLinks, setShortenedLinks ] = useState([])
    const [ userUrl, setUserUrl ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)


    const handleShortenIt = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        const targetUrl = await shortenLink2(userUrl)
        setUserUrl('')
        setTimeout(() => {
            setIsLoading(false)
        }, 100);
        if (targetUrl) { 
            setIsLoading(false)
            const links = shortenedLinks.concat(targetUrl)
            setShortenedLinks(links)
        }
    }

    const handleInputChange = (event) => {
        setUserUrl(event.target.value)
    }


    return (
    
        <div className={styles.statistics}>
            
             <Shortener handleShortenIt={handleShortenIt} handleInputChange={handleInputChange} userUrl={userUrl} isLoading={isLoading}/>
             {isLoading ? <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/dae67631234507.564a1d230a290.gif" /> : null}
            {shortenedLinks.map(shortenedLink => (
                <ShortenedLink key={shortenedLink.hashid} sourceLink={shortenedLink.inputUrl} shortLink={shortenedLink.targetLink} />))
            }
             
            <h1>Advanced Statistics</h1>
            <h2>Track how your links are performing across the web with our advanced statistics dashboard</h2>
            
            <div className={styles.statistics__cards}>
                
                <StatCard icon={`./images/icon-brand-recognition.svg`} title={`Brand recognition`} subtitle={`Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content`}/>
                <StatCard icon={`./images/icon-detailed-records.svg`} title={`Detailed Records`} subtitle={`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`}/>
                <StatCard icon={`./images/icon-fully-customizable.svg`} title={`Fully customizable`} subtitle={`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`}/>
            </div>         
            <hr className={styles.statistics__hr}/>  
        </div>
       

    )
}

export default Statistics

