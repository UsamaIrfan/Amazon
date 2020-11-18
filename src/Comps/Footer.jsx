import React from 'react';
import '../Styles/Footer.css'

function Footer() {
   return (
      <div className="footer">
         <a href="#top">
            <div className="footer__backToTop">
            <p>Back to Top</p>
            </div>
         </a>
         <div className="footer__bar">
            <img className="footer__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo"/>
         </div>
      </div>
   )
}

export default Footer
