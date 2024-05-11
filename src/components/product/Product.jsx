import React from 'react'
import './Product.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Product = ({ data, title }) => {
    const dispatch = useDispatch();
    const wishes = useSelector((state) => state.wishlist.value);
    const cart = useSelector((state) => state.cart.value);

    if (!data) {
        return <h2>loding</h2>;
    }

    let products = data?.map((el) => (
        <div key={el.id} className="cardd">
            <div class="card">
                <div class="icon">
                    <img className='image' src={el.thumbnail} alt="" />
                </div>
                <span>
                    <button className='like__button' onClick={() => dispatch(addToCart(el))}>
                        {
                            cart.some(c => c.id === el.id) ?
                                <ShoppingCartRoundedIcon /> :
                                <ShoppingCartOutlinedIcon />
                        }
                    </button>
                    <button className='cart__button' onClick={() => dispatch(toggleToWishes(el))}>
                        {
                            wishes.some(w => w.id === el.id) ?
                                <FavoriteIcon /> :
                                <FavoriteBorderIcon />
                        }
                    </button>
                </span>
            </div>
            <Link to={`/single/${el.id}`}>
                <h2 className='title'>{el.title}</h2>
            </Link>
            <div className="prices">
                <h2>${el.price}</h2>
                <h4>$534.33</h4>
            </div>
        </div>
    ));

    return (
        <>
            <div className="container">
                <div className="product">
                    <h3>Find your favourite smart watch.</h3>
                    <h2>Our Latest Products</h2>
                    <h2>{title}</h2>
                    <div className="product__wrapper">
                        {products}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product