import React, {useState} from 'react';
import image from '../Images/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg';
import Product from '../Comps/Product';
import '../Styles/AllProducts.css';
import DataCall from '../Config/hooks/DataCall';


function AllProducts() {

   const {docs} = DataCall("Products");

   return (
      <div className="allprods">
         <img className="home__image" src={image} alt=""/>
         <div className="product__row home__row">
            {/* <Product fixedWidth
               id="cat-1"
               title="The lean Startup: how constant can you be with your skills."
               price={200}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            /> */}
            { docs.length < 1 && 
               <div className="box">
                  <div className="loader-18"></div>
               </div>}
            { docs && docs.map((doc, i) => (
               <Product 
                  fixedWidth
                  className="allprods__product" 
                  key={i}
                  id={doc.id}
                  name={doc.productName}
                  title={doc.description}
                  price={Number(doc.price)}
                  rating={1}
                  image={doc.url}
                  user={doc.userEmail}
               />
            ))}
         </div>
      </div>
   )
}

export default AllProducts