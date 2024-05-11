import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import "./Header.css"
import logo from '../../images/logo.svg'
import person from '../../images/person.png'
import shop from '../../images/shop.png'
import { FaRegHeart } from "react-icons/fa";


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
    return (
        <AppBar className='header__bg'>
            <div className="container">
                <Toolbar className='nav__item'>
                    <IconButton>
                        <img src={logo} alt="" />
                    </IconButton>
                    <Typography className='nav__link'>
                        <h3>Home</h3>
                        <h3>Brands</h3>
                        <h3>Recent Products</h3>
                        <h3>Contact</h3>
                        <h3>About</h3>
                    </Typography>
                    <div className="header__right">
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <img src={person} alt="" />
                        <img src={shop} alt="" />
                        <Link to={"/wishlist"}><FaRegHeart className='header__right__img' /></Link>
                    </div>
                </Toolbar>
            </div>
        </AppBar>
    );
}
