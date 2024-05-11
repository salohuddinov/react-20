import React from 'react'
import './Hero.css'
import hero from '../../images/hero.png'
import search from '../../images/hero2.png'


function Hero() {
    return (
        <>
            <div className="herobg"></div>
            <div className="container">
                <div className="hero">
                    <div className="hero__left">
                        <h2>Discover Most Suitable Watches</h2>
                        <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                        <form className='hero__form' action="">
                            <div className="serc">
                                <img src={search} alt="" />
                                <input type="text" placeholder='Find the best brands' />
                            </div>
                            <button type='button'>Search</button>
                        </form>
                    </div>
                    <img className='hero__img' src={hero} alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero