import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <p className="header_logo"><img src="/art-ug2.png"/></p>
      </Link>
      <div className="justify-content-md-end d-flex">
      <div className="header__nav">
        <Link to={!user && '/login'} className="removeLink">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
          </div>
        </Link>
        <Link to='/orders' className="removeLink">
          <div className="header__option justify-content-end">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <Link to="/checkout" className="removeLink">
          <div className="header__optionBasket">
            <ShoppingBasket/>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>
      </div>
      </div>
      </div>
  );
}

export default Header;
