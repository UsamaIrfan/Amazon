import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../Config/StateProvider';
import {motion} from 'framer-motion';

function CheckoutProduct({id, title, image, rating, price}) {

   const [, dispatch] = useStateValue();
   const removeFromBasket = () => {
      // remove item from basket
      dispatch({
         type: "REMOVE_FROM_BASKET",
         id: id,
      })
   };

   const variants = {
      visible: {x : 0},
      hidden: {x: '-100vw'}
   }

   return (
      <motion.div className="chkoutProd"
         initial="hidden"
         animate="visible"
         variants={variants}
      >
         <img className="chkoutProd__image" src={image} alt=""/>
         <div className="chkoutProd__info">
            <p className="chkoutProd__title">{title}</p>
            <span>Price: <small>$</small><strong>{price}</strong></span>
            <span>Rating: <div className="product__rating">
               {
               Array(rating).fill().map((_, i) => {
                  return <p key={i} style={{color: 'orange'}}><StarIcon /></p>
               }) 
               }
            </div>
            </span>
            <button onClick={removeFromBasket} className="chkoutProd__remove">Remove from Basket</button>
         </div>
      </motion.div>
   )
}

export default CheckoutProduct
