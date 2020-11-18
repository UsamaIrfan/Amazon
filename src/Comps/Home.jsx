import React from 'react';
import '../Styles/Home.css';
import image from '../Images/Application/Fuji_TallHero_Computers_1x._CB432469755_.jpg';
import Product from '../Comps/Product'

function Home() {
   return (
      <div className='allprods'>
         <img className="home__image" src={image} alt=""/>
         <div className="home__row">
            <Product
               id="cat-1"
               title="BEBONCOOL PS4 Controller Charger, Controller USB Charging Station Dock for DualShock 4,"
               price={200}
               rating={5}
               image="https://m.media-amazon.com/images/I/41VbT96pAWL._AC_SY200_.jpg"
            />
            <Product 
               id="cat-2"
               title="Minecraft - PlayStation 4"
               price={500}
               rating={5}
               image="https://m.media-amazon.com/images/I/51bdMhAVOfL._AC_SY200_.jpg"
            />
         </div>
         <div className="home__row">
            <Product 
               id="tech-6"
               title="BENGOO G9000 Stereo Gaming Headset for PS4."
               price={200}
               rating={5}
               image="https://m.media-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg"
            />
            <Product 
               id="tech-5"
               title="The VR headset to boost up your virtual reality experience."
               price={100}
               rating={5}
               image="https://m.media-amazon.com/images/I/31AZvhYLyeL._AC_SY200_.jpg"
            />
            <Product 
               id="tech-4"
               title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
               price={150}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
            />
         </div>
         <div className="home__row">
            <Product 
               id="tech-3"
               title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11"
               price={1000}
               rating={5}
               image="https://m.media-amazon.com/images/I/41Ww3zikowL._AC_SY200_.jpg"
            />
            <Product 
               id="tech-2"
               title="DualShock 4 Wireless Controller for PlayStation 4 - Custom Design"
               price={100}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/81n%2BViU1zWL._AC_SY220_.jpg"
            />
            <Product 
               id="tech-1"
               title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB"
               price={250}
               rating={5}
               image="https://m.media-amazon.com/images/I/51vOyKGea+L._AC_SY200_.jpg"
            />
         </div>
      </div>
   )
}

export default Home
