import React from 'react'
import './Footerbanner.css'
import watch from '../../images/footer.png'

function Footerbanner() {
    return (
        <>
            <div className="container">
                <div className="Footerbanner">
                    <div className="Footerbanner__left">
                        <h2>Subscribe To Newsletter</h2>
                        <p>Get free guide about smart watches daily. </p>
                        <form className='footer__form' action="">
                            <input type="text" placeholder='Enter Email Address' />
                            <button type='button'>Subscribe</button>
                        </form>
                    </div>
                    <img src={watch} alt="jwhsj" />
                </div>
            </div>
        </>
    )
}

export default Footerbanner