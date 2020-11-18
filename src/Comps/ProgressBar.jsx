import React, { useEffect } from 'react'
import useStorage from '../Config/hooks/useStorage';
import { useStateValue } from '../Config/StateProvider';
import {motion} from 'framer-motion';

function ProgressBar({file, setFile}) {
   const {url, progress} = useStorage(file);
   const [, dispatch] = useStateValue();
   useEffect(() => {

      if(url) {
         dispatch({
            type: "UPDATE_REG_PROD_IMAGE",
            url: url
         })
         setFile(null)
      }

   }, [url, setFile])

   return (
      <motion.div className="progressbar"
         initial={{width: 0}}
         animate={{width: progress + '%'}}
      >
      </motion.div>
   )
}

export default ProgressBar;
