import React, { useState, useEffect } from 'react'
import styles from './Shortener.module.css'

// import { shortenLink } from '../../api/index'
import api from '../../api/index'


// const [ input, setInput ] = useState('')
// const [ links, setLinks ] = useState([])


// const onSubmit = (event) => {
//     event.preventDefault()
//     const apiResponse = api.shortenLink(input)
//     console.log(apiResponse);
// }

// const handleInputChange = (event) => {
//     event.preventDefault()
//     console.log(event.target.value);
//     setInput(event.target.value);
    
// }

const Shortener = () => {
    return(
    <div className={styles.shortener}>
        <form action="">
            <input  type="text" placeholder="Shorten a link here..."/>
            <button className={styles.buttonPrimary} type="submit">Shorten It!</button>
        </form>
                
    </div>
    )
}

export default Shortener