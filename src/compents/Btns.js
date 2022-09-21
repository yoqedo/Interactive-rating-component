

import React from 'react'

export default function btns({ num, handleBtnClick }) {



    return (
        <div onClick={() => handleBtnClick(num)} className='btn'>{num}</div>
    )
}
