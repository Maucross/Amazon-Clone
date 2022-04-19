import React from 'react'
import '../Styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {NavLink} from "react-router-dom";
import {useStateValue} from './StateProvider';
import {auth} from '../firebase'

function Header() {

   const [{basket, user}, dispatch] = useStateValue();

   const handleAuthentication = () => {
     if (user) {
       auth.signOut();
     }
   }


  return (
    <div className="header">
        <NavLink to="/">
          <img alt="amazon_logo" className="header__logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
        </NavLink>      
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <NavLink to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? 'Guest' : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </NavLink>
          <NavLink to='/orders'>
              <div className="header__option">
                <span className="header__optionLineOne">
                    Returns
                  </span>
                  <span className="header__optionLineTwo">
                    & Orders
                </span>
              </div>
          </NavLink>
          <div className="header__option">
            <span className="header__optionLineOne">
                Your
            </span>
            <span className="header__optionLineTwo">
                Prime
            </span>
          </div>
            <NavLink to="/checkout">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">
                   {basket?.length}
                </span>
              </div>
            </NavLink>
        </div>
    </div>
  )
}

export default Header