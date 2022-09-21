import React from 'react'
import './card.css'
import Btns from './Btns'
import icon from '../images/icon-star.svg'

export default function Card({ handleClick, btnClick }) {


    return (
        <div className='card'>
            <div className='star-btn'>
                <img src={icon}></img>
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            <div className='btn-container'>
                <Btns num={'1'} handleBtnClick={btnClick} />
                <Btns num={'2'} handleBtnClick={btnClick} />
                <Btns num={'3'} handleBtnClick={btnClick} />
                <Btns num={'4'} handleBtnClick={btnClick} />
                <Btns num={'5'} handleBtnClick={btnClick} />
            </div>

            <button onClick={handleClick} className='sub-btn'>SUBMIT</button>
        </div>
    )
}
