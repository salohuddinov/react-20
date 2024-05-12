import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import axios from '../../api';
import "./Header.css"
import logo from '../../images/logo.svg'
import person from '../../images/person.png'
import shop from '../../images/shop.png'
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import Serchbtm from '../serchbtm/Serchbtm';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header() {
    const [value, setValue] = useState("")
    const [data, setData] = useState(null)

    useEffect(() => {
        if (!value.trim()) return
        axios
            .get(`/products/search?q=${value.trim()}`)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
    }, [value])

    const wishes = useSelector((state) => state.wishlist.value);
    const carts = useSelector((state) => state.cart.value);
    return (
        <AppBar className='header__bg'>
            <div className="container">
                <Toolbar className='nav__item'>
                    <IconButton>
                        <Link to={'/'}><img src={logo} alt="" /></Link>
                    </IconButton>
                    <Typography className='nav__link'>
                        <Link to={'/'}><h3>Home</h3></Link>
                        <Link to={'/brands'}><h3>Brands</h3></Link>
                        <Link to={'/recent'}><h3>Recent Products</h3></Link>
                        <Link to={'/contact'}> <h3>Contact</h3></Link>
                        <Link to={'/about'}><h3>About</h3></Link>
                    </Typography>
                    <div className="header__right">
                        <Search className='serch'>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                            {
                                value.trim() ? <Serchbtm data={data} /> : <></>
                            }
                        </Search>
                        <div className="icn">
                            <img className='header__right__img' src={person} alt="" />
                            <Link to={'/cart'}>
                                <img className='header__right__img' src={shop} alt="" />
                                {carts.length > 0 ? (
                                    <sup>
                                        <p className='sup__p'>{carts.length}</p>
                                    </sup>
                                ) : (
                                    <></>
                                )}
                            </Link>
                            <Link to={"/wishlist"}>
                                <FaRegHeart className='header__right__img' />
                                {wishes.length > 0 ? (
                                    <sup>
                                        <p className='sup__p'>{wishes.length}</p>
                                    </sup>
                                ) : (
                                    <></>
                                )}
                            </Link>
                        </div>
                    </div>
                </Toolbar>
            </div>
        </AppBar>
    );
}
