import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material"

function Header() {
  return (
    <div className="header">
        
        <img className="header_logo"    src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="amazon logo"/>
        
        <div className='header_search' type='text'>
            <input className='header_searchInput'   type='text' />
            <SearchIcon className='header_searchIcon'></SearchIcon>
        </div>    

        <div className='header_nav'>
            <div className='header_option'>  {/*sign in options */}
                <span className='header_optionLineOne'>Hello Guest</span>
                <span className='header_optionLineTwo'>Sign in</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
        </div>
    </div>
  )
}

export default Header
