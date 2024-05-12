import React, { useRef, useState } from 'react'
import './Corusel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Star from '../star/Star';
import Person from '../../images/pers.png';
import Person2 from '../../images/perss.png';

function Corusel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="corusel">
                            <div className='corusel__card'>
                                <img src={Person} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                            <div className='corusel__card'>
                                <img src={Person2} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corusel">
                            <div className='corusel__card'>
                                <img src={Person} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                            <div className='corusel__card'>
                                <img src={Person2} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corusel">
                            <div className='corusel__card'>
                                <img src={Person} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                            <div className='corusel__card'>
                                <img src={Person2} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corusel">
                            <div className='corusel__card'>
                                <img src={Person} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                            <div className='corusel__card'>
                                <img src={Person2} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corusel">
                            <div className='corusel__card'>
                                <img src={Person} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                            <div className='corusel__card'>
                                <img src={Person2} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="corusel">
                            <div className='corusel__card'>
                                <img src={Person} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                            <div className='corusel__card'>
                                <img src={Person2} alt="" />
                                <div className="corusel__card__right">
                                    <h2>Hamza Faizi</h2>
                                    <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                    <Star />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default Corusel