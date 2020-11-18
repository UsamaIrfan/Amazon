import React from 'react';
import '../Styles/prodreg.css'
import { Link , useHistory } from 'react-router-dom';
import {useState} from 'react';
import ProgressBar from './ProgressBar';
import { useStateValue } from '../Config/StateProvider';
import { projectFirestore, timeStamp } from '../Config/Firebase';
import {motion} from 'framer-motion';

function ProdReg() {
 
   const [{url}] = useStateValue();
   const [uploadedImg, setuploadedImg] = useState(null);
   const [productName, setproductName] = useState(null);
   const [description, setdescription] = useState(null);
   const [price, setprice] = useState(null)
   const [error, setError] = useState(null);
   const history = useHistory();
   const [user, setUser] = useState(null)

   const registerProduct = (e) => {
      e.preventDefault();
      const firestoreRef = projectFirestore.collection("Products");
      const createdAt = timeStamp()
      const userEmail = user.email
      firestoreRef.add({ productName, createdAt , price, description, url, userEmail})
      .then(() => {
         history.push('/')
      })
   }

   const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']

   const changeHandler = (e) => {
      let selected = e.target.files[0];

      if (selected && allowedTypes.includes(selected.type)) {
         setuploadedImg(selected)
         setError(null)
      } else {
         setuploadedImg(null);
         setError("Please select an image of 'PNG' and 'JPG' format.")
      }
   }

   return (
      <div className="prodreg">
         <Link to="/">
            <img className="prodreg__logo" src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png" alt="Amazon Logo"/>
         </Link>
         <form onSubmit={registerProduct} className="prodreg__form">
            <h1>Product Registration</h1>
            <h5>Product Name</h5>
            <input maxlength={23} onChange={e => setproductName(e.target.value)} required className="prodreg__textInput" type="text" />
            <h5>Product Description</h5>
            <input maxlength={70} onChange={e => setdescription(e.target.value)} required className="prodreg__textInput" type="text" />
            <h5>Product Price</h5>
            <input onChange={e => setprice(e.target.value)} required className="prodreg__textInput" type="number" placeholder="In Dollars"/>
            <input onChange={changeHandler} required type="file" id="file" />
            <label className="prodreg__fileInput" for="file">Choose a file</label>
            {uploadedImg && <ProgressBar file={uploadedImg} setFile={setuploadedImg} />}
            {uploadedImg && <p>{uploadedImg.name}</p>}
            {error && <p className="error">{error}</p>}
            {url && <motion.button type="submit"
               initial={{y: "20px"}}
               animate={{y: 0}}
            >Register Product.</motion.button>}
         </form>
      </div>
   )
}

export default ProdReg
