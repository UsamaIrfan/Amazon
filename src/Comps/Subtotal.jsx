import React from 'react'
import '../Styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Config/StateProvider';
import { getBasketTotal } from '../Config/reducer';

function Subtotal() {

   const [{basket}] = useStateValue();

   return (
      <div className="subtotal">
         <CurrencyFormat 
            renderText={(value) => (
               <>
                  <p>
                     Subtotal ({basket.length} items): <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                        <input type="checkbox"/> This Order Contains a gift
                  </small>
               </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"} 
         />
         <button>Proceed To Checkout</button>
      </div>
   )
}

export default Subtotal
