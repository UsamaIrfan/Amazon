import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import '../Styles/Product.css';
import { useStateValue } from '../Config/StateProvider';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

function Product({name, id, price, title, rating, image, fixedWidth}) {

   const [{ user }, dispatch] = useStateValue();
   let className = "product"
   className = fixedWidth ? "product__fixed" : "product";

   const updateModal = () => {
    
      dispatch({
         type: "UPDATE_MODAL",
         selectedProduct: {
            price: price,
            title: title,
            image: image
         }
      })
      
   }

   const addToBasket = () => {

      dispatch({
         type: 'ADD_TO_BASKET',
         item: {
            id: id,
            title: title,
            price: price,
            image: image,
            rating: rating,
         }
      })      
   };

   return (
      <motion.div className={className}
         whileHover={{top: '10px'}}
         layout
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{delay: 1}}
      >
         <p className="product__info">
            {name && <h2>{name}</h2>}
            {title}
            {price && <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
         </p>}
         <div className="product__rating">
            {
            Array(rating).fill().map((_, i) => {
               return <span key={i} style={{color: 'orange'}}><StarIcon /></span>
            }) 
            }
         </div>
         </p>
         <img onClick={updateModal} className="product__image" src={image} alt="Product"/>
         <Link to={!user && "/login"}>
            <button onClick={user && addToBasket} className="product__addToBasket">Add To Basket</button>
         </Link>
      </motion.div>
   )
}

export default Product
