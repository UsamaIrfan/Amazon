import React from 'react'
import image from '../Images/Fuji_LP_Dash_en_US.jpg';
import '../Styles/Checkout.css'
import { useStateValue } from '../Config/StateProvider';
import emptyImage from '../Images/Application/kettle-desaturated._CB445243794_.svg';
import { Link } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
   const [{basket, user }] = useStateValue();
   return (
      <div className="checkout">
         <div className="checkout__left">
            <img className="checkout__ad" src={image} alt="Advertisement"/>
            {basket?.length === 0 ? (
               <div className="checkout__empty">
                  <img className="checkout__emptyImage" src={emptyImage} alt="Empty Cart"/>
                  <div className="checkout__emptyContainer">
                     <h1>Your Amazon Cart is empty.</h1>
                     <Link to="/login">
                        {!user && <button className="checkout__loginButton">Sign in to your account</button>}
                     </Link>
                  </div>
               </div>
            ) : (
               <div className="checkout__basket">
                  <h1>Your Shopping Cart</h1>
                  {basket.map((item, i) => (
                     <CheckoutProduct key={i}
                        id={item.id}
                        price={item.price}
                        rating={item.rating}
                        title= {item.title}
                        image={item.image}
                     />
                  ))}
               </div>
            )}
         </div>
         <div className="checkout__right">
            <Subtotal />
         </div>
      </div>
   )
}

export default Checkout
