import React from 'react'
import LeftSide from '../../misc/message/LeftSide'
import RightSide from '../../misc/message/RightSide'

const Converstion = () => {
    return (
        <div className="message d-flex">
        <div className="col-md-4 border-right px-0">
        <LeftSide/>
    </div>
    <div className="col md-8 px-0">

        <RightSide/>
   
        </div>
    </div>
    )
}

export default Converstion