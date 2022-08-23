import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider";

function Header() {

    const [{basket}] =useStateValue();

  return (
    <div className="header">
        
        <Link to='/'>
            <img className="header_logo"   src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
        </Link>
        
        <div className='header_search' type='text'>
            <input className='header_searchInput'   type='text' />
            <SearchIcon className='header_searchIcon'></SearchIcon>
        </div>    

        <div className='header_nav'>

            <div className='header_option'>  {/*sign in options */}
                <span className='header_optionLineOne'>Hello Guest</span>
                <span className='header_optionLineTwo'>Sign in</span>
            </div>

            <div className='header_option'>  {/*Returns & Orders*/}
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>  
            </div>

            <div className='header_option'>  {/*Your Prime */}
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>

            <Link to="/checkout">
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='header_optionLineTwo header_basketcount'>{basket?.length}</span>
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Header
