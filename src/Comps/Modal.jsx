import React from 'react';
import '../Styles/Modal.css';
import { useStateValue } from '../Config/StateProvider';
import {motion} from 'framer-motion';

function Modal() {

   const [{selectedProduct}, dispatch] = useStateValue();

   const handleClick = (e) => {

      if (e.target.classList.contains('backdrop')) {      
         dispatch({
            type: "UPDATE_MODAL",
            selectedProduct: null
         })
      }
   
   }

   return (
      <motion.div className="backdrop" onClick={handleClick}
         initial={{opacity: 0}}
         animate={{opacity: 1}}
      >
            <motion.img src={selectedProduct?.image} alt="Enlarged Product"
               initial={{y: "-100vh"}}
               animate={{y: 0}}
            />
      </motion.div>
   )
}

export default Modal
