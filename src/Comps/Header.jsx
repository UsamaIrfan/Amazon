import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../Config/StateProvider'
import {auth} from '../Config/Firebase';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

//TODO Continue from here
function Header({render, show}) {
   const [{ basket , user }] = useStateValue();
   const [display, setDisplay] = useState('header__nav hidden')

   const login = () => {
      if (user) {
         auth.signOut();
      }
   }

   const navBarShow = (e) => {
      if (display == 'header__nav hidden') {
         setDisplay('header__nav show');
      } else {
         setDisplay('header__nav hidden')
      }
   }

   return (
      <nav className="header">
         <Link to="/">
            <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"/>
         </Link>

         {render && <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
         </div>}

         <div className={display}>

               
            <div onClick={navBarShow} className="header__cross">
                  <CloseIcon fontSize="large"/>
            </div>

            {show && render && <Link to={!user && "/login"} className="header__link">
               <div onClick={() => {login(); navBarShow()}} className="header__option">
                  <span className="header__darkOption header__email">Hello {user?.email}</span>
                  <span className="header__lightOption">{user ? "Sign Out" : "Sign In"}</span>
               </div>
            </Link>}

            {show && render && <Link to="/allproducts" className="header__link">
               <div onClick={navBarShow} className="header__option">
                  <span className="header__darkOption">All</span>
                  <span className="header__lightOption">Products</span>
               </div>
            </Link>}

            {show && <Link to="/prodreg" className="header__link">
               <div onClick={navBarShow} className="header__option">
                  <span className="header__darkOption">Register</span>
                  <span className="header__lightOption">New Product</span>
               </div>
            </Link>}

            {show && !render && <Link to="/" className="header__link">
               <div onClick={navBarShow} className="header__option">
                  <span className="header__darkOption">Go Back</span>
                  <span className="header__lightOption">Home</span>
               </div>
            </Link>}

            {show && <Link to="/checkout" className="header__link">
               <div onClick={navBarShow} className="header__optionBasket">
                  <ShoppingCartIcon />
                  <span className="header__basketNumber">{basket?.length}</span>
               </div>
            </Link>}

         </div>

         {<div onClick={navBarShow} className="header__hamburger">
               <MenuIcon fontSize="medium"/>
         </div>}
         {/* {Basket Icon} */}
      
      </nav>
   )
}

export default Header