import React from 'react'
import './Serchbtm.css'

const Serchbtm = ({ data }) => {
    let serchItem = data?.map(el =>
        <div className='serch__item' key={el.id}>
            <h2>{el.title}</h2>
            <img src={el.thumbnail} alt={el.title} />
        </div>)
    return (
        <>
            <div className="container">
                <div className="navbar__serch__rezalt">
                    {serchItem}
                </div>
            </div>
        </>
    )
}

export default Serchbtm