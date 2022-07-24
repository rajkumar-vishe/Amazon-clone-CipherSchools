import React from 'react'
import "./Checkout.css"

function Checkout() {
  return (
    <div className='checkout'>
       <div className='checkout__left'>
        <img 
          className='checkout__ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-GW-SWM_400x39._CB634187897_.jpg' 
          alt=""
        />

        <div>
          <h2 className='checkout__title'> 
              Shopping Cart</h2>
          {/* BasketItems*/}
          {/* BasketItems*/}
          {/* BasketItems*/}
          {/* BasketItems*/}
          {/* BasketItems*/}
        </div>
       </div>
       
       <div className='checkout__right'>
        <h2>Area to add subtotal will go on checkout </h2>
       </div>
    </div>
  )
}

export default Checkout