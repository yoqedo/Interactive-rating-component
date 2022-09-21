import React from 'react'
import thanks from '../images/illustration.svg'
import './thanks.css'

export default function Thanks({ handleClick, number }) {
    return (
        <div className='thanks'>
            <img src={thanks}></img>
            <p className='selected'>You selected {number} out of 5
            </p>
            <h1>Thank you!</h1>
            <p className='thanks-desc'>We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
            <button onClick={handleClick} className='sub-btn'>RATE AGAIN</button>

        </div>
    )
}
