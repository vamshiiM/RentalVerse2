import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';


const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'  />
          <input type="text" placeholder='last Name'  />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City'  />
          <input type="text" placeholder='State'  />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Pin code'  />
          <input type="text" placeholder='Country'  />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
           
           <div className="pay">

          <button className="btns" id="btn-1">
          <img src={assets.app_store} alt="paypal"></img>
          </button >
          <button className="btns" id="btn-2">
          <img src={assets.cred} alt="debit_card"></img>
          </button>
          <button className="btns" id="btn-3">
          CASH ON DELIVERY
          </button>
         
           </div>

        </div>

      </div>
      
    </form>
  )
}

export default PlaceOrder
