import React from 'react'
import './Footerbr.css'
import Corusel from '../corusel/Corusel'

function Footerbr() {
    return (
        <>
            <div className="container">
                <div className="footerbr">
                    <h3>Here are our some of the best clients.</h3>
                    <h2>What People Say About Us</h2>
                </div>
            </div>
            <Corusel />
        </>
    )
}

export default Footerbr